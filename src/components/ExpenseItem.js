import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
   
    return (
       
           <div className="expense-item">
               <ExpenseDate date={props.date}/>
               <div className="expense-item__description">
               <h1>{props.title}</h1>
               </div>
               <div className="expense-item__price">Rs{props.amount}</div>
           </div>
      
    );
}

export default  ExpenseItem;