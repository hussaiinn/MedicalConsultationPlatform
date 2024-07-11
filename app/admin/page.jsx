'use client'
import React from "react";
import styles from "@styles/adminLogin.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const userID = 'docCare5253@gmail.com';
  const passwrd = '123123123';
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("User ID:", userId);
    console.log("Password:", password);
    if(userId === userID &&  password === passwrd){
        // alert('logged in');
        router.push('/admin/doc_care_admin')
    }
    else{
        alert('Invalid Login Credentials');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.h22}>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="userId" className={styles.labell}>
            User ID
          </label>
          <input
            className={styles.inputField}
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password" className={styles.labell}>
            Password
          </label>
          <input
            className={styles.inputField}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
