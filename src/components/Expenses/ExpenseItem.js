import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
  const [title,setTitle] = useState(props.title);

    const clickHandler = ()=>{
        setTitle('Updated!');
        console.log(title);
    }
   
    return (
       
           <div className="expense-item">
               <ExpenseDate date={props.date}/>
               <div className="expense-item__description">
               <h1>{title}</h1>
               </div>
               <div className="expense-item__price">Rs{props.amount}</div>
               <button onClick={clickHandler}>Click</button>
           </div>
      
    );
}

export default  ExpenseItem;