import React, { useEffect, useState } from "react";

const Expense = ({ expense, setExpense }) => {
  const [totalExpense, setTotalExpense] = useState(0);
  const [search, setSearch] = useState("");

  const filteredExpense = expense.filter((exp) =>
    exp.title.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    let total = 0;

    filteredExpense.forEach((exp) => {
      total += Number(exp.amount);
    });

    setTotalExpense(total);
  }, [filteredExpense]);

  const deleteExpense = (id) => {
    setExpense((prev) => prev.filter((exp) => exp.id != id));
  };

  let index = 1;

  return (
    <div>
      <h1>Expense Page</h1>
      <input
        type="text"
        placeholder="Enter title to search "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h5>Showing : {filteredExpense.length}/{expense.length}</h5>

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
            {filteredExpense.map((exp) => (
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


// * tag based searching , date based searching , 