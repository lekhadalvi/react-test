import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Contextdata } from "./DataContext";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { adddata } = useContext(Contextdata);
  const navigate = useNavigate();

  const handlechange = async (formdata) => {
    const success = await adddata(formdata);
    if (success) {
      reset();
      navigate("/thank");
    }
  };

  return (
    <div className="bg-[#FFDA30] min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Hire Talents from India Without Compromise
          </h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            India isn’t just about cost savings anymore. It’s where top talents
            power the world’s leading tech companies.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(handlechange)}
         
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Full Name */}
            <div>
              <input
                {...register("fullName", { required: "Full Name is required" })}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Phone must be 10 digits",
                  },
                })}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@]+@[^@]+\.[^@]+$/,
                    message: "Enter a valid email",
                  },
                })}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Role */}
            <div>
              <input
                {...register("role", { required: "Role is required" })}
                placeholder="Role"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.role.message}
                </p>
              )}
            </div>

            {/* Budget */}
            <div>
              <input
                type="number"
                {...register("budget", { required: "Budget is required" })}
                placeholder="Budget"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
              {errors.budget && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.budget.message}
                </p>
              )}
            </div>

            {/* Talents */}
            <div>
              <input
                {...register("talents", { required: "Talents are required" })}
                placeholder="Talents Needed"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
              {errors.talents && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.talents.message}
                </p>
              )}
            </div>

            {/* Persona */}
            <div>
              <input
                {...register("persona", { required: "Persona is required" })}
                placeholder="Persona"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
              {errors.persona && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.persona.message}
                </p>
              )}
            </div>

            {/* Additional Info */}
            <div>
              <input
                {...register("additionalInfo")}
                placeholder="Additional Info (Optional)"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-[#FFDA30] outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full md:w-1/3 bg-[#FFDA30] hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
