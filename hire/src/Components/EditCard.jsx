import { useForm } from "react-hook-form";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const EditCard = ({ item, close }) => {
  const { updateRecord, removeRecord } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
 fullName: item.fullName,
 phone: item.phone,
 email: item.email,
 role: item.role,
 budget: item.budget,
 talents: item.talents,
 persona: item.persona,
    },
  });

  const onSubmit = async (data) => {
    try {
 await updateRecord(item.id, data);
 close(); 
    } catch (err) {
 alert("Failed to update entry!");
    }
  };

  return (
    <div className=" p-6 h-auto">
 <h2 className="text-xl font-bold mb-4">Edit Submission</h2>

 <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">


   <div>
<label className="font-medium block">Full Name</label>
<input
  {...register("fullName", { required: "Full Name is required" })}
  className="border p-2 rounded w-full"
/>
{errors.fullName && (
  <p className="text-red-500 text-sm">{errors.fullName.message}</p>
)}
   </div>

   <div>
<label className="font-medium block">Phone</label>
<input
  {...register("phone", {
    required: "Phone is required",
    pattern: {
 value: /^[0-9]{10}$/,
 message: "Phone must be exactly 10 digits",
    },
  })}
  className="border p-2 rounded w-full"
/>
{errors.phone && (
  <p className="text-red-500 text-sm">{errors.phone.message}</p>
)}
   </div>

   <div>
<label className="font-medium block">Email</label>
<input
  {...register("email", {
    required: "Email is required",
    pattern: {
 value: /^[^@]+@[^@]+\.[^@]+$/,
 message: "Enter a valid email",
    },
  })}
  className="border p-2 rounded w-full"
/>
{errors.email && (
  <p className="text-red-500 text-sm">{errors.email.message}</p>
)}
   </div>

 
   <div>
<label className="font-medium block">Role</label>
<input
  {...register("role", { required: "Role is required" })}
  className="border p-2 rounded w-full"
/>
{errors.role && (
  <p className="text-red-500 text-sm">{errors.role.message}</p>
)}
   </div>

 
   <div>
<label className="font-medium block">Budget</label>
<input
  type="number"
  {...register("budget", { required: "Budget is required" })}
  className="border p-2 rounded w-full"
/>
{errors.budget && (
  <p className="text-red-500 text-sm">{errors.budget.message}</p>
)}
   </div>

  
   <div>
<label className="font-medium block">Talents</label>
<input
  {...register("talents", { required: "Talents required" })}
  className="border p-2 rounded w-full"
/>
{errors.talents && (
  <p className="text-red-500 text-sm">{errors.talents.message}</p>
)}
   </div>

    
   <div  >
<label className="font-medium block">Persona</label>
<input
  {...register("persona", { required: "Persona required" })}
  className="border p-2 rounded w-full"
/>
{errors.persona && (
  <p className="text-red-500 text-sm">{errors.persona.message}</p>
)}
   </div>

 
   <div className="flex gap-2 mt-3">
<button
  type="submit"
  className="bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-900"
>
  Save Changes
</button>

   <button
onClick={close}
type="button"
className="mt-2 bg-gray-300 px-4 py-2 rounded w-full hover:bg-gray-400"
   >
Cancel
   </button>
   </div>


 </form>
    </div>
  );
};

export default EditCard;
