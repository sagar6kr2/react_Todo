import React, { useState } from "react";
import './todo.css'

const Todo = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const addNumberHandler = (event) => {
    setEnterNumber(event.target.value);
    //   console.log(event.target.value);
  };
  const addTextHandler = (event) => {
    setEnterTitle(event.target.value);
    // console.log(event.target.value);
  };
  const cleanHandler = (event) => {
    event.preventDefault();
    const expenceData = {
      title: enterTitle,
      amount: enterNumber,
    };
    props.onSaveTodoData(expenceData)
    setEnterNumber("");
    setEnterTitle("");

      console.log(expenceData);
  };

  return (
    <form className="expence_from"  onSubmit={cleanHandler} >
      <div>
        <div>
          <label>Title</label>
          <input
            type="text"
            onChange={addTextHandler}
            value={enterTitle}
          ></input>
        </div>
        <div>
          <label>Amount</label>
          <input
            type="number"
            onChange={addNumberHandler}
            min="0.01"
            step="0.01"
            value={enterNumber}
          ></input>
        </div>
        <button type="submit" >
          Add Items
        </button>
      </div>
      {/* <button onClick={cleanHandler}>clean me</button> */}
    </form>
  );
};

export default Todo;