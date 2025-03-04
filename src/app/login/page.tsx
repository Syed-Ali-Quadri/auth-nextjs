"use client";

import mongoose from "mongoose";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { Toast } from "react-hot-toast";

export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const onLogin = async () => {

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            {/* <hr className="w-full mb-4" /> */}
            <label htmlFor="email" className="w-full max-w-xs mb-2">Email</label>
            <input 
                className="p-2 border text-white border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full max-w-xs"
                id="email"
                type="email"
                placeholder="Email"
                value={user.email}
                autoComplete="off"
                onChange={(e) => setUser({ ...user, email: e.target.value})}
            />
            <label htmlFor="password" className="w-full max-w-xs mb-2">Password</label>
            <input 
                className="p-2 border text-white border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black w-full max-w-xs"
                id="password"
                type="password"
                placeholder="Password"
                value={user.password}
                autoComplete="off"
                onChange={(e) => setUser({ ...user, password: e.target.value})}

            />
            <button className="p-2 bg-blue-500 text-white rounded-lg w-full max-w-xs mt-4">Login</button>
            <p className="mt-4">Don't have an account? <Link href="/signup" className="text-blue-500">Signup</Link></p>
        </div>
    )
};