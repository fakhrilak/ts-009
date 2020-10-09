import React,{useState} from 'react'
import './Form.css'
import {postUser} from '../../redux/action/User'
import {connect} from 'react-redux'

const Form = ({postUser}) => {

  const [formData, setFormData] = useState({
    name: "",
    tingkat: "",
    cabang: "",
    lulus: "",
    nohp: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { name,tingkat,cabang,lulus,nohp } = formData;

  const onSubmit = (e) => {
    e.preventDefault();
    postUser(
      name,
      tingkat,
      cabang,
      lulus,
      nohp,
    );
    setFormData({
    name: "",
    tingkat: "",
    cabang: "",
    lulus: "",
    nohp: "",
    })
  };
  return (
    <div>
      <form onSubmit={(e)=>onSubmit(e)}>
          <div className='form-group'>
              <input
            type="text"
            placeholder='Nama Lengkap'
            value={name}
            name="name"
            onChange={(e) => onChange(e)}
          />
          </div>
          <div className='form-group'>
               <input
            type='text'
            placeholder='Ketingkatan'
            value={tingkat}
            name="tingkat"
            onChange={(e) => onChange(e)}
          />
          </div>
          <div className='form-group'>
              <input
            type="text"
            placeholder='Cabang/Daerah/Wilayah'
            value={cabang}
            name="cabang"
            onChange={(e) => onChange(e)}
          />
          </div>
          <div className='form-group'>
             <input
            type="type"
            placeholder='Lulus Muallimin'
            value={lulus}
            name="lulus"
            onChange={(e) => onChange(e)}
          />
          <div className='form-group'>
             <input
            type="type"
            placeholder='No HP/WA'
            value={nohp}
            name="nohp"
            onChange={(e) => onChange(e)}
          />
          </div>
          </div>
          <div className='btn-Submit'>
              <button>Submit</button>
          </div>
      </form>
    </div>
  )
}
const mapStateToProps = (state) => ({
  
});
export default connect(mapStateToProps, { postUser })(Form);