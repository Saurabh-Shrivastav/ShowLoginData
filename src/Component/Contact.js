import React, { useState } from 'react'
import './Contact.css'
import Button from './Button';


const Contact = () => {

  const [name, setName] = useState("Saurabh")
  const [email, setEmail] = useState("saurabhshrivastav0345@gmail")
  const [text, setText] = useState("Do Somthing")


  // let name = "SAURABH"
  // let email = "saurabhshrivastav0345@gmail.com"
  // let text = "Do Somthing"

  const onSubmit = (e) =>{
    e.preventDefault()

    setName( e.target[0].value)
    setEmail( e.target[1].value)
    setText( e.target[2].value)
  }

  

  return (
    <div className='container'>
      <div className='contact_form'>

        <form onSubmit={onSubmit}>
          <div className='form_control'>
             <label htmlFor='name'>Name</label>
             <input type='text'name='name'/>
          </div>

          <div className='form_control'>
             <label htmlFor='name'>Email</label>
             <input type='email'name='email'/>
          </div>

          <div className='form_control'>
             <label htmlFor='text'>Text</label>
             <textarea name='text' rows='8'/>
          </div>

          <div
          style={{
            display: "flex",
            justifyContent: "end"
          }}>
          <Button text="SUBMIT BUTTON"/>
          </div>
          <div>
            {name + "  " + email + "  " + text}
          </div>
        </form>

      </div>


      <div className='contact_Image'>
         <img src='/img/contact1.avif' alt='contact image' height="400px"/>
      </div>
    </div>
  )
}

export default Contact
