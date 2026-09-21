import React, { useEffect, useState } from "react";

const Expense = ({ expense, setExpense }) => {
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    let total = 0;

    expense.forEach((exp) => {
      total += Number(exp.amount);
    });

    setTotalExpense(total);
  }, [expense]);

  const deleteExpense = (id) => {
    setExpense((prev) => prev.filter((exp) => exp.id != id));
  };

  let index = 1;

  return (
    <div>
      <h1>Expense Page</h1>

      <h5>Data : {expense.length}</h5>

      {expense.length === 0 ? (
        <p>No Expenses are there</p>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>ID</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {expense.map((exp) => (
              <tr key={exp.id}>
                <td>{index++}</td>
                <td>{exp.id}</td>
                <td>{exp.title}</td>
                <td>{exp.amount}</td>
                <td>
                  <button className="" onClick={() => deleteExpense(exp.id)}>
                    <img
                      src="https://cdn-icons-png.flaticon.com/256/6861/6861362.png"
                      height="50px"
                    />
                  </button>
                </td>
              </tr>
            ))}

            <tr className="table-active">
              <td colSpan={3}>Total</td>
              <td>{totalExpense}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Expense;

// src/components/expense/expense.jsx
// src/components/expense/AddExpense.jsx
// src/app.jsx
