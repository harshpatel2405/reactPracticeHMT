import React, { useState } from "react";

const FormDemo3 = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");

  const data = [
    {
      id: 1,
      customer: "Harsh",
      type: "Deposit",
      amount: 5000,
      status: "failed",
    },
    {
      id: 2,
      customer: "Rahul",
      type: "Withdraw",
      amount: 2000,
      status: "success",
    },
    {
      id: 3,
      customer: "Amit",
      type: "Deposit",
      amount: 8000,
      status: "failed",
    },
    {
      id: 4,
      customer: "Priya",
      type: "Withdraw",
      amount: 3000,
      status: "pending",
    },
    {
      id: 5,
      customer: "Dev",
      type: "Deposit",
      amount: 10000,
      status: "success",
    },
  ];

  const filteredTransactions = data.filter((item) => {
  const searchMatch = item.customer
    .toLowerCase()
    .includes(search.toLowerCase());

  const typeMatch = type === "all" || item.type === type;

  const statusMatch = status === "all" || item.status === status;

  return searchMatch && typeMatch && statusMatch;
});

  return (
    <div>
      <h1>Bank Transaction Filter</h1>

      <input
        type="text"
        placeholder="Search Customer"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="all">All Type</option>
        <option value="Deposit">Deposit</option>

        <option value="Withdraw">Withdraw</option>
      </select>

      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="all">All Status</option>
        <option value="success">Success</option>

        <option value="pending">Pending</option>

        <option value="failed">Failed</option>
      </select>

      <br />
      <br />

      <table border="1" className="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.customer}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDemo3;
