import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Contextdata } from "../context/DataContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const { adddata } = useContext(Contextdata);
  const navigate = useNavigate();

  const handlechange = async (formdata) => {
    try {
      const success = await adddata(formdata);

      if (success) {
        reset();
        navigate("/Thank");
      }
    } catch (error) {
      console.error(error);
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handlechange)}>

    
    <input
    {...register ("fullname",{required:"fullname"})}
    placeholder="name"
    type="text"/>
    {errors.fullname && (
        <p>
        {errors.fullname.message}
        </p>)}
    
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
