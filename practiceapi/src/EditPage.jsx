import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "./DataContext";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { records, updateRecord } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const record = records.find((r) => r.id === id);
    if (record) reset(record);
  }, [id, records, reset]);

  const onSubmit = async (data) => {
    await updateRecord(id, data);
    navigate("/dashboard");
  };

  return (
<div className=" ">
      <div className="  flex items-center min-h-screen bg-[#FFDA30] justify-center">
      <div className="bg-white p-20 rounded-2xl w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Edit Submission
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
            <div>
              <input
                placeholder="Full Name"
                {...register("fullName", { required: "Name is required" })}
                className="w-full border px-4 py-2 rounded-xl"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName.message}</p>
              )}
            </div>

          
            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="w-full border px-4 py-2 rounded-xl"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <input
                placeholder="Role you are hiring for"
                {...register("role", { required: "Role is required" })}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>

           
            <div>
              <input
                type="number"
                placeholder="Phone Number"
                {...register("phone", { required: true })}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>

            
            <div>
              <input
                type="number"
                placeholder="Budget"
                {...register("budget", { required: true })}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>

            <div>
              <input
                type="number"
                placeholder="Number of hires"
                {...register("hires", { required: true })}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>
            <div>
              <input
                placeholder="Persona"
                {...register("persona", { required: true })}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>

            <div>
              <input
                placeholder="Additional information"
                {...register("additionalInfo")}
                className="w-full border px-4 py-2 rounded-xl"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-black text-white py-3 rounded-xl"
          >
            Update Record
          </button>
        </form>
      </div>
    </div>
</div>
  );
};

export default Edit;
