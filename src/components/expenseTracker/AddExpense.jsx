import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddExpense = () => {
  const { register, handleSubmit, reset } = useForm();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [expense, setExpense] = useState([]);

  const addExpense = (data) => {
    setTitle(data.title);
    setAmount(data.amount);
    console.log(title);
    console.log(amount);

    const newExpense = {
      id: Date.now(),
      title: data.title,
      amount: data.amount,
    };

    setExpense([...expense, newExpense]);

    console.log(expense);

    reset();
  };

  return (
    <div>
      <h1>Add Expense Page</h1>
      <form onSubmit={handleSubmit(addExpense)}>
        <label>Enter Title : </label>
        <input
          type="text"
          placeholder="Enter Title for Expense"
          {...register("title")}
          required
        />
        <br />

        <label>Enter Amount : </label>
        <input
          type="number"
          placeholder="Enter Amount"
          {...register("amount")}
          required
          min="50"
        />

        <br />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
