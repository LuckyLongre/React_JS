export const Loader = ({ msg }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Movie Explorer</h1>

        <div className="flex justify-center items-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <span className="ml-4">{msg ?? ""}</span>
        </div>
      </div>
    </div>
  );
};
