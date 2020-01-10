import React from 'react'

export default function Savings () {
  return (
    <section className='save-container'>
        {/* <button type="button" className="btn btn-primary">Primary</button> */}
        <h2>
            Select your savings
        </h2>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          defaultValue
          id='defaultCheck1'
        />
        <label className='form-check-label' style={{color: "black"}} htmlFor='defaultCheck1'>
        <i class="fas fa-car"></i>
        </label>
        <input
          className='form-check-input'
          type='checkbox'
          defaultValue
          id='defaultCheck1'
        />
        <label className='form-check-label' style={{color: "black"}} htmlFor='defaultCheck1'>
        <i class="fas fa-car"></i>
        </label> <input
          className='form-check-input'
          type='checkbox'
          defaultValue
          id='defaultCheck1'
        />
        <label className='form-check-label' style={{color: "black"}} htmlFor='defaultCheck1'>
        <i class="fas fa-car"></i>
        </label>
      </div>
     
    </section>
  )
}
