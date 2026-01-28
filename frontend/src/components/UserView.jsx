const UserView = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto p-6 border mt-6">
      <h2 className="text-center text-xl mb-4">User Details</h2>

      <p><b>Name:</b> {user.firstName} {user.lastName}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Mobile:</b> {user.mobile}</p>
      <p><b>Gender:</b> {user.gender}</p>
      <p><b>Status:</b> {user.status}</p>
      <p><b>Location:</b> {user.location}</p>
    </div>
  );
};

export default UserView;
