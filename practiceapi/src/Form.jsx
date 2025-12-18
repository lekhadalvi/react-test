import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const { addRecord } = useContext(DataContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await addRecord(data);
    reset();
    navigate("/thank");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Submit Form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fullName", { required: true })} placeholder="Name" />
        <br /><br />
        <input {...register("email", { required: true })} placeholder="Email" />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
