import React, { useEffect,useState} from 'react'
import {DATA} from '../FakeData/Data'
import './Render.css'
import {getUser} from '../../redux/action/User'
import {connect} from 'react-redux'

const Render = ({getUser,users:{user,loading}}) => {
  useEffect(()=>{
    getUser()
  },[])
  
  const [formData, setFormData] = useState({
    subcategoryId: "Tahun"
  });
  const {subcategoryId} = formData;

  let A = subcategoryId
  let C = null

  if (A == 'Tahun' ){
    C = [...user]
  }else{
    let B = [...user] 
    C = B.filter((el)=>el.lulus === subcategoryId )
  }

  ;

  const onChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div style ={{paddingTop:20}}>
        <select
          style={{width:100,borderRadius:30,borderWidth:2,borderColor:'#3399ff'}}
          name='subcategoryId'
          onChange={(e) => {
              onChange(e);
          }}
        >
        <option>Tahun</option>
                {loading ? (<option>WIAT FOR LOADING</option>):(
                    user.map((Allcategory) => (
                        <option value={Allcategory.lulus} key={Allcategory.id}>
                            {Allcategory.lulus}
                        </option>
                    ))
                )}
        </select>
      </div>
      <div style={{paddingTop:30}}>
          {C.map((data)=>
          <>
            <div className="dropdown">
                <div>
                    <button className="dropbtn">{data.name}</button>
                    <p>{data.lulus}</p>
                </div>
                <div className="dropdown-content">
                    <a href="#">{data.tingkat}</a>
                    <a href="#">{data.cabang}</a>
                    <a href="#">{data.nohp}</a>
                </div>
            </div>
          </>
          )}
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  users: state.User
});
export default connect(mapStateToProps, { getUser })(Render);
