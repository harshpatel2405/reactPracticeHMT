import React from "react";
import { useForm } from "react-hook-form";

const HookForm2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <label>Enter Name : </label>
        <input
          type="text"
          placeholder="Enter your name"
          {...register("uname", {
            // required: true,
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Enter 3 or more characters",
            },
            maxLength: {
              value: 10,
              message: "Characters should be less than 10",
            },
          })}
        />
        {errors.uname && (
          <span style={{ color: "red" }}>{errors.uname.message}</span>
        )}
        <br />

        <label>Enter Your Age : </label>
        <input
          type="number"
          placeholder="Enter your age"
          {...register("age", {
            required: "Age is Required",
            min: {
              value: 18,
              message: "Age should be more than 18",
            },
            max: {
              value: 60,
              message: "Age should be less than 60",
            },
          })}
        />
        {errors.age && (
          <span style={{ color: "red" }}>{errors.age.message}</span>
        )}
        <br />
        <label>Enter Your Phone Number : </label>
        <input
          type="number"
          placeholder="Enter your phone number"
          {...register("phone", {
            required: "Number is Required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "number should start with 6-9 only",
            },
          })}
        />
        {errors.age && (
          <span style={{ color: "red" }}>{errors.phone.message}</span>
        )}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HookForm2;
