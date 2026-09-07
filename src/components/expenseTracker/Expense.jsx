import React, { useEffect } from "react";

const Expense = ({ expense }) => {
  let totalExpense = Number(0);
    let index = 1;

  expense.forEach((exp) => {
    totalExpense += Number(exp.amount);
  });

  return (
    <div>
      <h1>Expense Page</h1>
      <h5>data : {expense.length}</h5>

      {expense.length === 0 ? (
        <p>No Expenses are there</p>
      ) : (
        <table className="table table-dark">
          <tr>
            <th>Sr.No.</th>
            <th>ID</th>
            <th>Title</th>
            <th>Amount</th>
          </tr>
          {expense.map((exp) => (
            <tr key={exp.id}>
                <td>{index++}</td>
              <td>{exp.id}</td>
              <td>{exp.title}</td>
              <td>{exp.amount}</td>
            </tr>
          ))}
          <tr class="table-active">
            <td colSpan={3}>Total</td>
            <td>{totalExpense}</td>
          </tr>
        </table>
      )}
      <table className="table table-dark"></table>
    </div>
  );
};

export default Expense;
