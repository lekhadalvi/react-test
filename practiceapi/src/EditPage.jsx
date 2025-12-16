import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { Contextdata } from "./DataContext";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, fetchdata, updateDataById } = useContext(Contextdata);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // ✅ FETCH DATA IF NOT PRESENT
  useEffect(() => {
    if (data.length === 0) {
      fetchdata();
    }
  }, []);

  // ✅ PREFILL AFTER DATA LOADS
  useEffect(() => {
    const record = data.find((item) => item.id === id);
    if (record) {
      setValue("fullname", record.fullname);
      setValue("email", record.email);
    }
  }, [data, id, setValue]);

  const onSubmit = async (formdata) => {
    await updateDataById(id, formdata);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input {...register("fullname", { required: "Name required" })} />
      {errors.fullname && <p className="text-red-500">{errors.fullname.message}</p>}

      <input {...register("email", { required: "Email required" })} />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <button type="submit">Update</button>
    </form>
  );
};

export default EditPage;
