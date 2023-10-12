import {v4 as uuidv4} from 'uuid';
import {useState} from 'react';
import './index.css';
import Contact from './components/contacts';

const initialContactsList = [
  {
    id: uuidv4(), 
    name: 'Ramya',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(), 
    name: 'Charan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Priya',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]


function App() {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [contactsList, setContactList] = useState(initialContactsList) //initial contact list 

  const addBtn = (e)=>{
    e.preventDefault();

    const newContact = {
      id:uuidv4(),
      name: name,
      mobileNo: mobile,
      isFavorite: false,
    }

    setContactList([...contactsList, newContact]);
    setName("")
    setMobile("")
  }

  const toggleIsFavorite = contactId=>{
    setContactList((prevState)=>(
      prevState.map((eachContact)=>eachContact.id === contactId ? {...eachContact, isFavorite: !eachContact.isFavorite}:eachContact)
    ))
  }
  

  return (
    
    <div className="App">
      <h1 style={{color:"darkgreen",textAlign:"center",fontSize:"50px",margin:"3vh"}}>Contacts</h1>
      <div className='d-flex justify-content-between p-3'>
        <input type='text' placeholder='Name' className='form-control p-3 m-1' onChange={((e)=>setName(e.target.value))} value={name}/>
        <input type='text' placeholder='Mobile Number' className='form-control p-3 m-1' onChange={((e)=>setMobile(e.target.value))} value={mobile}/>
        <button type='button' className='btn btn-primary m-1' onClick={addBtn}>Add Number</button>

      </div>
      <ul className='contacts-table p-3'>
        <li className='table-header p-2'>
          <p className='table-header-cell name-column'>Name</p>
          <hr className='seperator'/>
          <p className='table-header-cell'>Mobile Number</p>
          
        </li>
        <ul>
        { contactsList.map(eachContact=>(
          <Contact
          contactDetails={eachContact}
          key={eachContact.id}
          isToggle={toggleIsFavorite}
          />
        ))}
        </ul>
      
      </ul>
    </div>
  );
}

export default App;
