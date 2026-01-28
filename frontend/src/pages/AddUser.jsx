import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createUser } from "../api/userApi";

const AddUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    gender: "",
    status: "",
    location: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(form);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto p-6"
      >
        <h2 className="text-center text-xl mb-6">Register Your Details</h2>

        <div className="grid grid-cols-2 gap-4">
          <input name="firstName" placeholder="First Name" className="border p-2" onChange={handleChange} />
          <input name="lastName" placeholder="Last Name" className="border p-2" onChange={handleChange} />
          <input name="email" placeholder="Email" className="border p-2" onChange={handleChange} />
          <input name="mobile" placeholder="Mobile" className="border p-2" onChange={handleChange} />
          <select name="gender" className="border p-2" onChange={handleChange}>
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select name="status" className="border p-2" onChange={handleChange}>
            <option>Select Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <input name="location" placeholder="Location" className="border p-2 col-span-2" onChange={handleChange} />
        </div>

        <button className="w-full bg-red-700 text-white py-2 mt-4">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddUser;
