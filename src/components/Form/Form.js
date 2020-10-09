import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div>
      <form>
          <div className='form-group'>
              <input
            placeholder='Nama Lengkap'
          />
          </div>
          <div className='form-group'>
               <input
            placeholder='Ketingkatan'
          />
          </div>
          <div className='form-group'>
              <input
            placeholder='Cabang/Daerah/Wilayah'
          />
          </div>
          <div className='form-group'>
             <input
            placeholder='Lulus Muallimin'
          />
          <div className='form-group'>
             <input
            placeholder='No HP/WA'
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

export default Form
