import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getUsers, deleteUser, exportUsersCSV } from "../api/userApi";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const res = await getUsers(1, 10, search);
    setUsers(res.data.users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleExport = async () => {
    const res = await exportUsersCSV();
    const blob = new Blob([res.data]);
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
  };

  return (
    <>
      <Navbar />

      <div className="p-6">
        {/* Top actions */}
        <div className="flex justify-between mb-4">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border px-3 py-2 mr-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={fetchUsers}
              className="bg-red-700 text-white px-4 py-2"
            >
              Search
            </button>
          </div>

          <div>
            <button
              onClick={() => navigate("/add")}
              className="bg-red-700 text-white px-4 py-2 mr-2"
            >
              + Add User
            </button>
            <button
              onClick={handleExport}
              className="bg-red-700 text-white px-4 py-2"
            >
              Export To CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full border">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-2">ID</th>
              <th>FullName</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={u._id} className="border text-center">
                <td>{i + 1}</td>
                <td>{u.firstName}</td>
                <td>{u.email}</td>
                <td>{u.gender}</td>
                <td>
                  <span className="bg-red-700 text-white px-3 py-1 rounded">
                    {u.status}
                  </span>
                </td>
                <td>
                  <button
                    onClick={() => navigate(`/view/${u._id}`)}
                    className="text-green-600 mr-2"
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/edit/${u._id}`)}
                    className="text-blue-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(u._id)}
                    className="text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
