export function GeneralErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">An Error Occurred</h1>
        <p className="text-lg text-gray-700">
          We encountered an unexpected error. Please try again later.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          If the problem persists, please contact support.
        </p>

        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}