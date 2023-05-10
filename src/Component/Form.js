import React from "react";
import FormItem from "./FormItem";

function Form(props) {
  return (
    <div>
      {props.item.map((expense) => (
        <FormItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
      {/* <FormItem title={props.item[0].title} amount={props.item[0].amount}/>
      <FormItem title={props.item[1].title} amount={props.item[1].amount}/>
      <FormItem title={props.item[2].title} amount={props.item[2].amount}/>
      <FormItem title={props.item[3].title} amount={props.item[3].amount}/>
     */}
    </div>
  );
}

export default Form;
