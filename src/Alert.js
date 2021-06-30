import React,{useEffect} from 'react'

function Alert({type, msg, removeAlert}) {
  
    useEffect(()=>{
       const timeout = setTimeout(() => {
            removeAlert();
        }, 1300);
        return ()=> clearTimeout(timeout)
    },[])
    return (
        <p className={`${type}`}>
               {msg}
        </p>
    )
}

export default Alert
