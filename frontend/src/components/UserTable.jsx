import { useNavigate } from "react-router-dom";

const UserTable = ({ users, onDelete }) => {
  const navigate = useNavigate();

  return (
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
            <td>{u.firstName} {u.lastName}</td>
            <td>{u.email}</td>
            <td>{u.gender}</td>
            <td>
              <span className="bg-red-700 text-white px-3 py-1 rounded">
                {u.status}
              </span>
            </td>
            <td className="space-x-2">
              <button
                onClick={() => navigate(`/view/${u._id}`)}
                className="text-green-600"
              >
                View
              </button>
              <button
                onClick={() => navigate(`/edit/${u._id}`)}
                className="text-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(u._id)}
                className="text-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
