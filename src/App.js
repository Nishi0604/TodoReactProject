import React, { useState} from 'react';
import ToDoList from './ToDoList'; 
import "./index.css";

const App = () => {

const [inputList, setInputList ] = useState();
const [Item, setItem ] = useState([]); 


const itemEvent = (e)=> {
  setInputList(e.target.value); 
};

const listOfItems = (e) => {  
  setItem((oldItems) => {
    return [...oldItems, inputList];
  }) ;
   setInputList("");               
};
 
const deleteItems = (id) => {
  console.log("deleted");

  setItem((oldItems) => {
    return oldItems.filter((arrElem, index) => {
      return index !== id;
    })
  }
  )
};

 
  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Item"
        value={inputList}
        onChange={itemEvent} />  
        <button onClick={listOfItems}> + </button>

        <ol>
         {/* <li>
           {inputList}
         </li> */}
         {Item.map( (itemval,index)  => {
           return   <ToDoList key={index} 
           id={index} 
           text={itemval}  
           onSelect = {deleteItems}
           />;
       })}
        </ol>
      </div>
    </div>
  )  
}


export default App;
