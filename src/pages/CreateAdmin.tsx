import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { AdminProps } from "./DashboardHome";
import axios from "axios";

export const CreateAdmin = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();

    const [adminData, setAdminData] = useState<AdminProps>({
        username: "",
        name: "",
        role: "ADMIN",
        password: "",
    });

    const createAdmin = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("http://localhost:5000/create-admin", {
                username: adminData.username,
                name: adminData.name,
                role: adminData.role,
                password: adminData.password,
            });
            navigate("/");
        } catch (error: any) {
            setError(
                error.response.data.error
                    ? error.response.data.error
                    : "Unknown error!"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='py-5'>
                <h1 className='text-center text-2xl mb-10'>Create admin</h1>

                {error && (
                    <pre className='w-max mx-auto mb-10 border border-red-400/50 rounded-lg p-2 bg-red-700/60'>
                        {error}
                    </pre>
                )}

                <form className='flex justify-center' onSubmit={createAdmin}>
                    <div className='flex flex-col gap-5'>
                        <label className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                            Admin's username:
                            <input
                                disabled={loading}
                                name='username'
                                type='text'
                                value={adminData.username}
                                onChange={(e) =>
                                    setAdminData((prev) => ({
                                        ...prev,
                                        username: e.target.value,
                                    }))
                                }
                                autoFocus
                                className='disabled:opacity-50 disabled:pointer-events-none border border-gray-300/30 rounded-lg px-3 py-2 outline-blue-500 focus:outline-2'
                                autoComplete='username'
                            />
                        </label>

                        <label className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                            Admin's name:
                            <input
                                disabled={loading}
                                name='name'
                                type='text'
                                value={adminData.name}
                                onChange={(e) =>
                                    setAdminData((prev) => ({
                                        ...prev,
                                        name: e.target.value,
                                    }))
                                }
                                className='disabled:opacity-50 disabled:pointer-events-none border border-gray-300/30 rounded-lg px-3 py-2 outline-blue-500 focus:outline-2'
                                autoComplete='name'
                            />
                        </label>

                        <label className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                            Admin's role:
                            <select
                                disabled={loading}
                                value={adminData.role}
                                name='role'
                                onChange={(e) =>
                                    setAdminData((prev) => ({
                                        ...prev,
                                        role: e.target.value,
                                    }))
                                }
                                className='disabled:opacity-50 disabled:pointer-events-none border border-gray-300/30 rounded-lg px-3 py-2 outline-blue-500 focus:outline-2 bg-secondary'>
                                <option value='ADMIN'>ADMIN</option>
                                <option value='SUPERADMIN'>SUPERADMIN</option>
                            </select>
                        </label>

                        <label className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                            Admin's password:
                            <input
                                disabled={loading}
                                name='password'
                                type='password'
                                value={adminData.password}
                                onChange={(e) =>
                                    setAdminData((prev) => ({
                                        ...prev,
                                        password: e.target.value,
                                    }))
                                }
                                className='disabled:opacity-50 disabled:pointer-events-none border border-gray-300/30 rounded-lg px-3 py-2 outline-blue-500 focus:outline-2'
                                autoComplete='new-password'
                            />
                        </label>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 items-center mt-5'>
                            <button
                                disabled={loading}
                                className='disabled:opacity-50 disabled:pointer-events-none filled-gray-btn'
                                onClick={() => navigate("/")}
                                type='button'>
                                Cancel
                            </button>
                            <button
                                className='filled-btn disabled:opacity-50 disabled:pointer-events-none'
                                disabled={loading}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
