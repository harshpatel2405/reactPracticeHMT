import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddExpense = ({ setExpense }) => {
  const { register, handleSubmit, reset } = useForm();

  const addExpense = (data) => {
    const newExpense = {
      id: Date.now(),
      title: data.title,
      category:data.category,
      amount: data.amount,
    };

    setExpense((prev) => [...prev, newExpense]);
    

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

<br></br>
        <label>category</label>
        <select>
          <option name="category" value="food">Food</option>
          <option name="category" value="fuel">Fuel</option>
          <option name="category" value="travel">Travel</option>
          <option name="category" value="entertainment">Entertainment</option>
          <option name="category" value="miscellaneous">Miscellaneous</option>
        </select>

        <br />
        <button type="submit">Add Expense</button>
      </form>

      <Link to="/expense">Go to Expense Page</Link>
    </div>
  );
};

export default AddExpense;
