import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addHire } from "../api/hireApi";

const AddHire = () => {
  const queryClient = useQueryClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const mutation = useMutation({
    mutationFn: addHire,
    onSuccess: () => {
      queryClient.invalidateQueries(["hires"]);
      setName("");
      setEmail("");
      setRole("");
    },
  });

  const handleSubmit = () => {
    mutation.mutate({
      fullName: name,
      email,
      role,
    });
  };

  return (
    <div>
      <h2>Add Hire</h2>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <br />

      <button onClick={handleSubmit} disabled={mutation.isLoading}>
        {mutation.isLoading ? "Adding..." : "Add Hire"}
      </button>
    </div>
  );
};

export default AddHire;
