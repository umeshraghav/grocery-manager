 
import './App.css';
import List from './List';
import Alert from './Alert';
import { useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';

const getLocalStorage=()=>{
  let list = localStorage.getItem('list')
  if(list){
      return list = JSON.parse(localStorage.getItem('list'))
  }else{
    return [];
  }

}



function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setEditing] = useState(false)
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState(
    {show :false, msg:'', type:""})
 


  const  handleSubmit =(event)=>{
  event.preventDefault();

  if(!name){
    showAlert(true,'Please Enter value in textbox','danger')
         
  }
  else if(name && isEditing){
      setList(list.map((item)=> {
        if(item.id === editId){
          return{...item, title:name }
        }
        return item; 
        
        }))
setName("");
setEditId(null);
setEditing(false);
showAlert(true, 'item Updated', 'success')
  
  }else{
     
    const newItem = {
        id : uuidv4(),
       title : name
      }
      setList([...list, newItem]);
      showAlert(true, `${newItem.title} is added to list`, 'success')
      setName("")
  }

   }

   const removeItem = (id)=>{
     showAlert(true,'item Deleted', 'danger')
   setList(list.filter(item=>item.id !== id))
   }


  const editItem = (id)=>{
      const newItem = list.find(item=> item.id===id);
      setEditId(id);
       setEditing(true)  
      
      setName(newItem.title)
  }


const showAlert=(show=false, msg="", type="")=>{
  setAlert({show,msg,type})
}
 

   useEffect(() => {
     localStorage.setItem('list',JSON.stringify(list))
  }, [list])


  return (
    <main>
        <section>
          {alert.show && <Alert {...alert}   removeAlert={showAlert}/> }
          <form onSubmit={handleSubmit}>
            <h3>Grocery Manager</h3>
            <div className="form-control">

            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Grocery item"/>
            <button className="submit-btn" type="submit">{isEditing ? 'Edit': 'Add'}</button>

            </div>

          </form>

        
       
        
        {list.length> 0 && <div className="container"> 
          <List  items={list} removeItem={removeItem} editItem={editItem}/>
        <button className="clear-btn" onClick={()=>{showAlert(true,'List Cleared', 'success'); setList([])}}>Clear List </button>
        </div> }
        </section>
    </main>
  );
}

export default App;
