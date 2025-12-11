import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { useNavigate } from "react-router-dom";

const FormPage = () => {
  const { addRecord } = useContext(DataContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await addRecord(data);
    reset();
    navigate("/thankyou");
  };

  return (
    <div className="bg-[#FFDA30] min-h-screen flex items-center justify-center">
 <div className="container p-6 text-center">
   <div className="p-4">
<h1 className="text-2xl font-bold mb-4">
  Hire Talents from India Without Compromise
</h1>
<p>
  India isn’t just about cost savings anymore. It’s where top talents
  power the world’s top tech companies.
</p>
   </div>

   <form
onSubmit={handleSubmit(onSubmit)}
className="gap-4 flex flex-col items-center justify-center mt-6"
   >
<div className="grid w-full grid-cols-2 gap-4 ">
 
  <div>
    <input
 {...register("fullName", { required: "Full Name is required" })}
 placeholder="Full Name"
 className="w-full p-2 rounded-lg  bg-white"
    />
    {errors.fullName && (
 <p className="text-red-500 text-sm">{errors.fullName.message}</p>
    )}
  </div>
  <div>
    <input
 {...register("phone", {
   required: "Phone is required",
   pattern: { value: /^[0-9]{10}$/, message: "Phone must be 10 digits" },
 })}
 placeholder="Phone Number"
 className="w-full p-2 rounded-lg  bg-white"
    />
    {errors.phone && (
 <p className="text-red-500 text-sm">{errors.phone.message}</p>
    )}
  </div>

  
  <div>
    <input
 {...register("email", {
   required: "Email is required",
   pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Enter a valid email" },
 })}
 placeholder="Email"
 className="w-full p-2 rounded-lg  bg-white"
    />
    {errors.email && (
 <p className="text-red-500 text-sm">{errors.email.message}</p>
    )}
  </div>

 
  <div>
    <input
 {...register("role", { required: "Role is required" })}
 placeholder="Role"
 className="w-full p-2 rounded-lg  bg-white"
    />
    {errors.role && (
 <p className="text-red-500 text-sm">{errors.role.message}</p>
    )}
  </div>


  <div>
    <input
 type="number"
 {...register("budget", { required: "Budget is required" })}
 placeholder="Budget"
 className="w-full p-2 rounded-lg  bg-white"
    />
    {errors.budget && (
 <p className="text-red-500 text-sm">{errors.budget.message}</p>
    )}
  </div>

  <div>
    <input
 {...register("talents", { required: "Talents are required" })}
 placeholder="Talents"
 className="w-full p-2 rounded-lg  bg-white"
    />
    {errors.talents && (
 <p className="text-red-500 text-sm">{errors.talents.message}</p>
    )}
  </div>

  <div>
    <input
 {...register("persona", { required: "Persona is required" })}
 placeholder="Persona"
 className="w-full p-2 rounded-lg  bg-white"
    />
    {errors.persona && (
 <p className="text-red-500 text-sm">{errors.persona.message}</p>
    )}
  </div>    
  <div>
    <input
 {...register("additionalInfo")}
 placeholder="Additional Info (Optional)"
 className="w-full p-2 rounded-lg  bg-white"
    />
  </div>
</div>

<button
  type="submit"
  className="text-black p-3 mt-3 w-2/5 bg-white rounded-lg hover:bg-gray-100"
>
  Submit
</button>
   </form>
 </div>
    </div>
  );
};

export default FormPage;
