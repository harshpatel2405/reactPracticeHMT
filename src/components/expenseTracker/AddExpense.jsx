import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddExpense.css";

const AddExpense = ({ setExpense }) => {
  const { register, handleSubmit, reset } = useForm();

  const addExpense = (data) => {
    const newExpense = {
      id: Date.now(),
      title: data.title,
      category: data.category,
      amount: data.amount,
    };

    setExpense((prev) => [...prev, newExpense]);

    toast.success("Expense added successfully!");

    reset();
  };

  return (
    <div className="expense-page">

      <div className="expense-card">

        <div className="expense-header">
          <h1>Add Expense</h1>
          <p>Track your spending and manage your expenses.</p>
        </div>

        <form onSubmit={handleSubmit(addExpense)}>

          {/* Title */}
          <div className="form-group">
            <label>Expense Title</label>

            <input
              type="text"
              placeholder="e.g. Grocery Shopping"
              {...register("title")}
              required
            />
          </div>

          {/* Amount */}
          <div className="form-group">
            <label>Amount</label>

            <div className="amount-input">
              <span>₹</span>

              <input
                type="number"
                placeholder="Enter amount"
                {...register("amount")}
                required
                min="50"
              />
            </div>
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select {...register("category")}>

              <option value="food">
                🍔 Food
              </option>

              <option value="fuel">
                ⛽ Fuel
              </option>

              <option value="travel">
                ✈️ Travel
              </option>

              <option value="entertainment">
                🎬 Entertainment
              </option>

              <option value="miscellaneous">
                📦 Miscellaneous
              </option>

            </select>
          </div>

          {/* Button */}
          <button type="submit" className="add-expense-btn">
            + Add Expense
          </button>

        </form>

        <Link to="/expense" className="expense-link">
          View All Expenses →
        </Link>

      </div>

      {/* <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      /> */}

    </div>
  );
};

export default AddExpense;