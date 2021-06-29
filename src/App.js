 
import './App.css';
import List from './List';
import { useState } from 'react';


function App() {
  const [item, setItem] = useState("")
  const [list, setList] = useState([])


  const handleChange=(event)=>{

    if(event.target.value.trim()!==""){
      setItem(event.target.value)
    }

  }


  const  handleSubmit =(event)=>{
  event.preventDefault();
  setList([...list, item]);
 setItem("")
}

 

  return (
    <main>
        <section>
          <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={handleChange}/>
            <button type="submit">Submit</button>
          </form>
        </section>
        
<List list={list}/>
    </main>
  );
}

export default App;
