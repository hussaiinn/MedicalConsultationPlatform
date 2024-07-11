'use client'
import React, { useState, useEffect } from "react";
import Sidebar from "@components/sidebar";
import AdminCard from "@components/adminCard";

const AdminUser = () => {
  const [patientData, setPatientData] = useState([]);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    const patData = async () => {
      const res = await fetch("/api/admin/patientdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
        console.log(data);
      setPatientData(data);
        // console.log(patientData);
    };
    patData();
  }, [flag]);

  const toDeleteUser = (id) => {
    // alert(id);
    console.log(id);
    const deleteData = async () => {
      const res = await fetch("/api/admin/docverifyUpdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          action: "delete",
        }),
      });
      if (res.ok) {
        alert("Deleted successfully");
        setFlag(!flag);
      }
    };
    deleteData();
  };

  return (
    // <div>AdminUser</div>
    <div className="flex m-0 h-full w-full">
      <Sidebar />
      <AdminCard callingTable={'Patient'} pagename={'Patient'} docs={patientData} toDelete={toDeleteUser} />
    </div>
  );
};

export default AdminUser;
