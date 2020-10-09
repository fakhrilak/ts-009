import React from 'react'
import {DATA} from '../FakeData/Data'
import './Render.css'
const Render = () => {
  return (
    <div>
      <div style={{paddingTop:30}}>
          {DATA.map((data)=>
          <>
            <div className="dropdown">
                <div>
                    <button className="dropbtn">{data.nama}</button>
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

export default Render
