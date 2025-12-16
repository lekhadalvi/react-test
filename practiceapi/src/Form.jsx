import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Contextdata } from "./DataContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors},

  } = useForm();

  const { adddata } = useContext(Contextdata);
  const navigate = useNavigate();

  const handlechange = async (formdata) => {
    try {
      const success = await adddata(formdata);

      if (success) {
        reset();
        navigate("/thank");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(handlechange)} >
    <div className="flex flex-col gap-4">
         <div>
         <input
        {...register("fullname", {
          required: "Full name is required",
        })}
        placeholder="Name"
        type="text"
      />

      {errors.fullname && (
        <p style={{ color: "red" }}>
          {errors.fullname.message}
        </p>
      )}
     </div>
<div>
    <input 
{...register("email",{
    required:"email required",

})}
placeholder="email"
type="email"
 
    />
    {errors.email &&(
    <p>
        {errors.email.message}
    </p>
)}
</div>
      <button type="submit" >
      submit
      </button>        
    </div>
    </form>
  );
};

export default Form;
