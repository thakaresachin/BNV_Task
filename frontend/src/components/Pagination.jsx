const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-end mt-4">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 border mx-1 ${
            currentPage === i + 1
              ? "bg-red-700 text-white"
              : "bg-white"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
