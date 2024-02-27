/* eslint-disable react/prop-types */


const Logout = ( {onConfirm, onCancel }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded shadow-md">
        <h3 className="text-lg font-medium mb-3">Are you sure you want to log out?</h3>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={onConfirm}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
