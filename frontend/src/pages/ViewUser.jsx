import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserView from "../components/UserView";
import { getUserById } from "../api/userApi";

const ViewUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(id).then((res) => setUser(res.data));
  }, [id]);

  if (!user) return null;

  return (
    <>
      <Navbar />
      <UserView user={user} />
    </>
  );
};

export default ViewUser;
