import React, { useState } from "react";
import axios from "axios";
const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserForm = ({ getAllFiles }) => {
  const [name, setName] = useState("");
  const [resume, setResume] = useState("");

  const formData = new FormData();

  const resetForm = () => {
    setName("");
    setResume();
  };

  const handleSubmit = async () => {
    if (name.trim().length === 0) {
      alert("name can not be empty");
      return;
    }
    formData.append("name", name);
    formData.append("resume", resume);

    const data = await axios.post(`${REACT_APP_BACKEND_URL}/user`, formData);
    if (data?.data) {
      resetForm();
      getAllFiles();
    }
  };
  return (
    <div className="App">
      <div className="formContainer">
        <label htmlFor="">User Name</label>
        <input
          value={name}
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">User resume</label>
        <input
          // value={resume}
          type="file"
          name=""
          id=""
          onChange={(e) => setResume(e.target.files[0])}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default UserForm;
