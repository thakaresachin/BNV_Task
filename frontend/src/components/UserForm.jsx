const UserForm = ({ form, setForm, onSubmit, buttonText }) => {
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto p-6">
      <h2 className="text-center text-xl mb-6">Register Your Details</h2>

      <div className="grid grid-cols-2 gap-4">
        <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className="border p-2" />
        <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className="border p-2" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="border p-2" />
        <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" className="border p-2" />

        <select name="gender" value={form.gender} onChange={handleChange} className="border p-2">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange} className="border p-2">
          <option value="">Select Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 col-span-2" />
      </div>

      <button className="w-full bg-red-700 text-white py-2 mt-4">
        {buttonText}
      </button>
    </form>
  );
};

export default UserForm;
