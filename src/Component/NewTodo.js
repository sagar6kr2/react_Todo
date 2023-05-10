import React from 'react'
import Todo from './Todo'

const  NewTodo =(props) => {
    const saveTododataHandler = (enterDataOFTodo) =>{
      const expenceData  ={
        ...enterDataOFTodo,
        id: Math.random().toString()
      };
    //    console.log(expenceData);
       props.onAddData(expenceData);
    };
  return (
    <div>
      <Todo onSaveTodoData={saveTododataHandler}/>
    </div>
  )
}

export default NewTodo
