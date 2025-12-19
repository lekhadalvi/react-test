import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "./DataContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { records, updateRecord } = useContext(DataContext);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const record = records.find(item => item.id === id);
    if (record) reset(record);
  }, [records, id, reset]);

  const onSubmit = async (data) => {
    await updateRecord(id, data);
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center min-h-screen bg-[#FFDA30] justify-center">
      <div className="bg-white p-10 rounded-2xl w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Edit Submission
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input 
            {...register("fullName")} 
            placeholder="Full Name" 
            className="border rounded p-2"
            type="text" />
            <input 
            type="email"
            {...register("email")} 
             placeholder="Email" 
              className="border rounded p-2"  />
            <input {...register("role")}
             placeholder="Role"
              className="border rounded p-2"   />
            <input 
            {...register("phone")} placeholder="Phone"
             className="border rounded p-2"
             type="number"   />
            <input {...register("budget")} 
            placeholder="Budget"
            type="number"  
             className="border rounded p-2" />
            <input {...register("hires")} pl
            aceholder="Hires"  
             className="border rounded p-2" />
            <input 
            {...register("persona")} placeholder="Persona"
             className="border rounded p-2"   />
            <input {...register("additionalInfo")}
             placeholder="Additional Info" 
              className="border rounded p-2"  />
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl">
            Update Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
