import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'
export default function List({list} ) {
     
    return (
        <div>
            {list.map((item)=>{
                return<div key={item}>{item} 
                    <MdEdit/>
                    <MdDelete/>
                </div>
            })}
                
        </div>
    )
}
