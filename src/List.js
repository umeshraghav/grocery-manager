import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
export default function List({items,removeItem,editItem}) {
 /*
  {list.map((item)=>{
                return<div className="list-item" key={item}>{item} 
                   
                </div>
            })}
           
 */

    return (
        <div>
                {items.map((item)=>{
                    const {id, title} = item;
                    return <div key={id} className="groceryitem">
                        <p>{title}</p>
                        <div className="btn-container">
                        <button className="edit-btn" onClick={()=>editItem(id)}> <MdEdit/> </button>
                   <button className="delete-btn" onClick={()=>removeItem(id)}>  <MdDelete/> </button>
                  
                            </div>
                        </div>
                })}
        </div>
    )
}
