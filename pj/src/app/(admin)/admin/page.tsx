"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { IoIosLogOut } from "react-icons/io";

export default function Page() {
    const router = useRouter()
  const logoutAdmin = () => {
    const confirmed = window.confirm("Bạn có chắc chắn muốn đăng xuất?");
    if (confirmed) {
      router.push('/login')
    }
  };

  return (
    <div>
      Admin
      <IoIosLogOut onClick={logoutAdmin} style={{ cursor: 'pointer', fontSize: '24px', color: 'red' }} />
    </div>
  );
}
