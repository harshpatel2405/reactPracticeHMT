import React from "react";
import { useForm } from "react-hook-form";

const HookForm1 = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Enter Name : </label>
        <input
          placeholder="Enter Your Name"
          type="text"
          {...register("uname")}
        />
        <br />
        <label>Enter Password : </label>
        <input
          placeholder="Enter Your Password"
          type="password"
          {...register("pwd")}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HookForm1;

/*
What is useForm and handleSubmit and register
Register -- React Hook Form -> Track this value and store it in name of uname
handlesubmit -- function -> validation rules 

Why there are ... in {register("name")}

why handleSubmit is taking a onsubmit function as an args


validations and error messages and toast (toastify)
*/
