import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import '../src/Useform.css'
const SignupForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3001/users", formData);
      toast.success("Added successfully!");
      reset();
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email format"
              }
            })}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Password is required",
              maxLength: {
                value: 5,
                message: "Password cannot exceed 5 characters"
              }
            })}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}

          <button type="submit">Submit</button>
        </form>

        <ToastContainer />
      </div>
    </>
  );
};

export default SignupForm;
