import React,{useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addUser, deleteUser,updateUser } from '../store/CrudSlice';



const Crud = () => {
    const userDetails= useSelector((state)=>state.input)
    console.log(userDetails);
    const [value, setValue] = useState('');
    const [email, setEmail]= useState('')
    
	const dispatch = useDispatch();
    const handleClick=(id)=>{
        console.log(id);
        dispatch(deleteUser({id:id}));

    }
    const handleUpdate = (id, newName, newEmail) => {
        const updatedName = prompt('Enter new name:', newName);
        const updatedEmail = prompt('Enter new email:', newEmail);
      
        if (updatedName && updatedEmail) {
          dispatch(
            updateUser({
              id,
              name: updatedName,
              email: updatedEmail,
            })
          );
        }
      };
    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(addUser({ id: new Date().toISOString(),name:value, email:email,

        }))
        setEmail('')
        setValue('')
    };

  return (<>
    <div className='container'>
    <form onSubmit={onSubmit}>
    <h2>Crud Operation</h2>
    
    <input type ='text' value={value} onChange={(e)=>setValue(e.target.value)}
    placeholder='Enter Name' />
    <br/>
    <br/>
    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email' />
    <br/>
    <br/>
    <button>submit</button>
    </form>
    </div>
    <div className='table'>
    <ul>{userDetails.map(user => <div key={user.id}>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li><button onClick={()=>handleClick(user.id)}> x </button></li>
        <li><button onClick={()=> handleUpdate(user.id,'New Name', 'newemail@example.com')}>edit</button></li>
        </div>)}
  </ul>
 
    </div>
    
    </>
  )
}

export default Crud