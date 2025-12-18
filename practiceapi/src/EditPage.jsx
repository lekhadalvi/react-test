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
    const record = records.find((r) => r.id === id);
    if (record) reset(record);
  }, [id, records, reset]);

  const onSubmit = async (data) => {
    await updateRecord(id, data);
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Edit Record</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("fullName")} />
        <br /><br />
        <input {...register("email")} />
        <br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
