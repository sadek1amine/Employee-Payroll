export default function Auth() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Login</h1>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Email"
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Password"
        type="password"
      />

      <button className="bg-black text-white w-full p-2">
        Login
      </button>
    </div>
  );
}