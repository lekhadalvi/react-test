import axios from 'axios';
import React, { useState } from 'react';

const PatchUsers = () => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const URL = "http://localhost:5000/users";

  const handlePatch = async () => {
    if (!userId) {
      alert("Please enter a valid ID");
      return;
    }

    try {
      const response = await axios.patch(`${URL}/${userId}`, {
        ...(userName && { name: userName }),
        ...(userEmail && { email: userEmail }),
      });

      alert("Updated: " + JSON.stringify(response.data));

      // Clear inputs
      setUserId("");
      setUserName("");
      setUserEmail("");
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-80">
      <input
        type="number"
        value={userId}
        placeholder="Enter your ID"
        onChange={(e) => setUserId(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        value={userName}
        placeholder="Enter your name"
        onChange={(e) => setUserName(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="email"
        value={userEmail}
        placeholder="Enter your email"
        onChange={(e) => setUserEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={handlePatch}
        className="bg-blue-500 p-2 text-white rounded"
      >
        Update User
      </button>
    </div>
  );
};

export default PatchUsers;
