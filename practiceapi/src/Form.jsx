import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "./DataContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addRecord } = useContext(DataContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
          await addRecord(data);
    reset();
    navigate("/thank");
    } catch (error) {
      console.error(error);
      
    }
  };

  return (
    <div className=" bg-[#FFDA30] min-h-screen  flex items-center justify-center">
      <div className=" p-8 ">
   
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">
            Hire Talents from India Without Compromise
          </h1>
          <p className="text-gray-600">
            India isn’t just about cost savings anymore. It’s where top talents
            power the world’s top tech companies.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          
        >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
           <div className="">
            <input
              placeholder="Full Name"
              {...register("fullName", { required: "Name is required" })}
              className="w-full border px-5 py-2 rounded-xl bg-white"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>

        
          <div className="">
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full border px-3 py-2 rounded-xl bg-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

        
          <div className="">
            <input
              placeholder="Role you are hiring for"
              {...register("role", { required: "Role is required" })}
              className="w-full border px-3 py-2 rounded-xl bg-white"
            />
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>

        
          <div className="">
            <input
              type="number"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="w-full border px-3 py-2 rounded-xl bg-white"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

        
          <div className="">
            <input
              type="number"
              placeholder="Budget "
              {...register("budget", {
                required: "Budget is required",
                min: { value: 1, message: "Budget must be greater than 0" },
              })}
              className="w-full border px-3 py-2 rounded-xl bg-white"
            />
            {errors.budget && (
              <p className="text-red-500 text-sm">{errors.budget.message}</p>
            )}
          </div>

        
          <div className="">
            <input
              type="number"
              placeholder="Number of hires"
              {...register("hires", {
                required: "Number of hires is required",
               
              })}
              className="w-full border px-3 py-2 rounded-xl bg-white"
            />
            {errors.hires && (
              <p className="text-red-500 text-sm">{errors.hires.message}</p>
            )}
          </div>

         
          <div className="">
            <input
              placeholder="Your persona (Founder, HR, CTO, etc.)"
              {...register("persona", { required: "Persona is required" })}
              className="w-full border px-3 py-2 rounded-xl bg-white"
            />
            {errors.persona && (
              <p className="text-red-500 text-sm">{errors.persona.message}</p>
            )}
          </div>

          <div className="">
            <input
              placeholder="Additional information (optional)"
              {...register("additionalInfo")}
              className="w-full border px-3 py-2 rounded-xl bg-white "
            />
          </div>
         </div>
 <div className=" p-6 ml-20">
            <button
              type="submit"
              className="w-[80%] bg-white text-black py-3 rounded-3xl transition"
            >
              Submit
            </button>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Form;
