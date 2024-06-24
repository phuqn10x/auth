import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    try {
      setLoading(true);
      setError(null);
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });
      // if (!res.ok) throw new Error("something went wrong");
      const data = await res.json();
      if (data.error) throw data;
      localStorage.setItem("token", data.token);
      setError("");
    } catch (err) {
      setError(err.message);

      if (err.error) {
        setError(err.error);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <h2>Login world ?</h2>
      <form onSubmit={handleSubmit}>
        {/* <p>{loading} testing</p> */}
        <input
          disabled={loading}
          type="text"
          placeholder="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={loading}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={loading} type="submit">
          Login
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
