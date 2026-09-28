import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Expense.css";
const Expense = ({ expense, setExpense }) => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [search, setSearch] = useState("");
  const filteredExpense = expense.filter((exp) => {
    return (
      exp.title.toLowerCase().includes(search.toLowerCase()) ||
      exp.category.toLowerCase().includes(search.toLowerCase())
    );
  });
  useEffect(() => {
    let total = 0;
    filteredExpense.forEach((exp) => {
      total += Number(exp.amount);
    });
    setTotalExpense(total);
  }, [filteredExpense]);
  const deleteExpense = (id) => {
    setExpense((prev) => prev.filter((exp) => exp.id !== id));
    toast.success(`Expense ${id} deleted successfully`);
  };
  let index = 1;
  return (
    <div className="expense-list-page">
      {" "}
      {/* ================= HEADER ================= */}{" "}
      <div className="expense-list-header">
        {" "}
        <div>
          {" "}
          <h1>Expense Tracker</h1>{" "}
          <p>Manage and track all your expenses.</p>{" "}
        </div>{" "}
        <div className="expense-count">
          {" "}
          {filteredExpense.length} / {expense.length}{" "}
        </div>{" "}
      </div>{" "}
      {/* ================= SEARCH / FILTER ================= */}{" "}
      <div className="expense-filters">
        {" "}
        <div className="search-box">
          {" "}
          <span>🔍</span>{" "}
          <input
            type="text"
            placeholder="Search by title or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
        </div>{" "}
        <select
          className="category-filter"
          value={
            [
              "food",
              "fuel",
              "travel",
              "entertainment",
              "miscellaneous",
            ].includes(search)
              ? search
              : ""
          }
          onChange={(e) => setSearch(e.target.value)}
        >
          {" "}
          <option value="">All Categories</option>{" "}
          <option value="food">Food</option> <option value="fuel">Fuel</option>{" "}
          <option value="travel">Travel</option>{" "}
          <option value="entertainment">Entertainment</option>{" "}
          <option value="miscellaneous">Miscellaneous</option>{" "}
        </select>{" "}
        {search && (
          <button className="clear-search" onClick={() => setSearch("")}>
            {" "}
            Clear{" "}
          </button>
        )}{" "}
      </div>{" "}
      {/* ================= SUMMARY ================= */}{" "}
      <div className="summary-card">
        {" "}
        <div>
          {" "}
          <p>Total Expenses</p> <h2> {filteredExpense.length} </h2>{" "}
        </div>{" "}
        <div className="summary-divider"></div>{" "}
        <div>
          {" "}
          <p>Total Amount</p>{" "}
          <h2> ₹{totalExpense.toLocaleString("en-IN")} </h2>{" "}
        </div>{" "}
      </div>{" "}
      {/* ================= RESULT COUNT ================= */}{" "}
      <div className="result-info">
        {" "}
        Showing <strong>{filteredExpense.length}</strong> of{" "}
        <strong>{expense.length}</strong> expenses{" "}
      </div>{" "}
      {/* ================= EMPTY STATE ================= */}{" "}
      {expense.length === 0 ? (
        <div className="empty-state">
          {" "}
          <div className="empty-icon"> 💰 </div> <h2>No Expenses Yet</h2>{" "}
          <p> You haven't added any expenses yet. </p>{" "}
        </div>
      ) : filteredExpense.length === 0 ? (
        <div className="empty-state">
          {" "}
          <div className="empty-icon"> 🔍 </div> <h2>No Expenses Found</h2>{" "}
          <p> Try searching for a different title or category. </p>{" "}
          <button className="clear-empty-btn" onClick={() => setSearch("")}>
            {" "}
            Clear Search{" "}
          </button>{" "}
        </div>
      ) : (
        /* ================= TABLE ================= */ <div className="expense-table-container">
          {" "}
          <table className="expense-table">
            {" "}
            <thead>
              {" "}
              <tr>
                {" "}
                <th>Sr.No.</th> <th>ID</th> <th>Title</th> <th>Amount</th>{" "}
                <th>Category</th> <th>Action</th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {filteredExpense.map((exp) => (
                <tr key={exp.id}>
                  {" "}
                  <td className="serial-number"> {index++} </td>{" "}
                  <td className="expense-id"> #{exp.id} </td>{" "}
                  <td className="expense-title"> {exp.title} </td>{" "}
                  <td className="expense-amount">
                    {" "}
                    ₹{Number(exp.amount).toLocaleString("en-IN")}{" "}
                  </td>{" "}
                  <td>
                    {" "}
                    <span className={`category-badge ${exp.category}`}>
                      {" "}
                      {exp.category}{" "}
                    </span>{" "}
                  </td>{" "}
                  <td>
                    {" "}
                    <button
                      className="delete-btn"
                      onClick={() => deleteExpense(exp.id)}
                      title="Delete Expense"
                    >
                      {" "}
                      🗑️{" "}
                    </button>{" "}
                  </td>{" "}
                </tr>
              ))}{" "}
              {/* TOTAL */}{" "}
              <tr className="total-row">
                {" "}
                <td colSpan="3"> Total </td>{" "}
                <td> ₹{totalExpense.toLocaleString("en-IN")} </td> <td></td>{" "}
                <td></td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>{" "}
        </div>
      )}{" "}
      {/* <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />{" "} */}
    </div>
  );
};
export default Expense;
