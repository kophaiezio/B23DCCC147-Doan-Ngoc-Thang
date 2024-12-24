"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!username || !email || !password) {
      alert('Please fill out all fields');
      return;
    }
  
    try {
      const res = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      
  
      const data = await res.text();
  
      if (res.ok) {
        if (data === "User registered") {
          router.push("/log-in"); // Chuyển đến trang đăng nhập
        } else {
          alert(data); // Hiển thị lỗi từ backend
        }
      } else {
        alert(`Error: ${data}`);
      }
    } catch (error) {
      console.error("Error submitting register form:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div>
      <h1>Tạo tài khoản</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Tạo tài khoản</button>
      </form>
      <p>
        Đã có tài khoản? <a href="/log-in">Đăng nhập</a>
      </p>
    </div>
  );
}
