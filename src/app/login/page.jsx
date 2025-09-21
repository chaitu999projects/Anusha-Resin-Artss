"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) window.location.href = "/";
    else {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="bg-white mt-[170px] p-6 shadow rounded w-80 space-y-4"
    >
      <h1 className="text-lg font-medium">Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 border rounded" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded" />
      <button className="w-full bg-gray-800 text-white py-2 rounded">Login</button>
    </form>
  );
}
