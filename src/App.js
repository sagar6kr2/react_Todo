import logo from './logo.svg';
import './App.css';
import Todo from './Component/Todo';
import Form from './Component/Form';
import { useState } from 'react';
import NewTodo from './Component/NewTodo';


const DummyData = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    // date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    // date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    // date: new Date(2021, 5, 12),
  },
]
const App =() => {
  const[expense, setExpense]=useState(DummyData)

  const addDataHandler= (expence) =>{
    setExpense((prevExpenses)=>{
     return[expence, ...prevExpenses ];
      
     
    });
    // console.log('App.js');
    // console.log(expence);
  }

  return (
    <div className="App">
      <NewTodo onAddData={addDataHandler}/>
     {/* <Todo/> */}
     <Form item={expense}/>
    </div>
  );
}

export default App;
