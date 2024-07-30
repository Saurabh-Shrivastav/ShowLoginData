
import './App.css'
import Navigation from './Component/Navigation';
import ContactHeader from './Component/ContactHeader';
import Contact from './Component/Contact';
import Button from './Component/Button';
import { MdMessage } from 'react-icons/md';
import {FaPhone} from "react-icons/fa"
import {HiMail} from "react-icons/hi"

function App() {

   const onViaCallSubmit = ()=>{
    console.log("I am from call");
   }

  return (
    <div className="App">
     <Navigation/>
     <ContactHeader/>

     <div className='top_btn'>
     {/* <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
     <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhone fontSize="24px"/>}/> */}
     </div>
     {/* <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/> */}
     <Contact/>

    </div>
  );
}

export default App;
