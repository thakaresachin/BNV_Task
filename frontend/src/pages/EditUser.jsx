import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";
import { getUserById, updateUser } from "../api/userApi";

const EditUser = () => {
  const { id } = useParams();
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

  useEffect(() => {
    getUserById(id).then((res) => setForm(res.data));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(id, form);
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <UserForm
        form={form}
        setForm={setForm}
        onSubmit={handleSubmit}
        buttonText="Update"
      />
    </>
  );
};

export default EditUser;
