import axios from "axios";
import { useEffect, useState, type FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

type AdminProps = {
    id?: string;
    username: string;
    name: string;
    role: string;
    password: string;
};

export const AdminDetail = () => {
    const { id } = useParams();
    const [adminData, setAdminData] = useState<AdminProps>({
        id: id,
        username: "loading",
        name: "loading",
        role: "loading",
        password: "loading",
    });
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [updating, setUpdating] = useState<boolean>(false);
    const navigate = useNavigate();

    const getAdmin = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000/admin/${id}`
            );

            setAdminData({
                name: data.admin.name,
                role: data.admin.role,
                username: data.admin.username,
                password: data.admin.password,
            });
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

    const updateAdmin = async (e: FormEvent) => {
        e.preventDefault();
        setUpdating(true);
        try {
            await axios.put(`http://localhost:5000/admin/${id}`, {
                username: adminData.username,
                name: adminData.name,
                role: adminData.role,
                password: adminData.password,
            });
            navigate("/");
        } catch (error) {
            console.log(error);
        } finally {
            setUpdating(false);
        }
    };

    useEffect(() => {
        getAdmin();
    }, []);

    if (loading) {
        return (
            <div className='h-[420px] flex items-center justify-center gap-2'>
                <h2 className='text-2xl'>Loading</h2>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='animate-spin'>
                    <path d='M21 12a9 9 0 1 1-6.219-8.56' />
                </svg>
            </div>
        );
    }

    return (
        <div className='py-5'>
            {error.length > 0 ? (
                <div className='text-center'>
                    <p className='mb-5 text-red-400 text-lg'>{error}</p>

                    <Link to={"/"} className='btn block w-max mx-auto'>
                        Go back
                    </Link>
                </div>
            ) : (
                <>
                    <h1 className='text-center text-2xl mb-10'>
                        Edit admin's information
                    </h1>
                    <form
                        className='flex justify-center'
                        onSubmit={updateAdmin}>
                        <div className='flex flex-col gap-5'>
                            <label className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                                Admin's username:
                                <input
                                    disabled={updating}
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
                                    disabled={updating}
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
                                    disabled={updating}
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
                                    <option value='SUPERADMIN'>
                                        SUPERADMIN
                                    </option>
                                </select>
                            </label>

                            <label className='grid grid-cols-1 sm:grid-cols-2 items-center'>
                                Admin's password:
                                <input
                                    disabled={updating}
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
                                    disabled={updating}
                                    className='disabled:opacity-50 disabled:pointer-events-none filled-gray-btn'
                                    onClick={() => navigate("/")}>
                                    Cancel
                                </button>
                                <button
                                    className='filled-btn disabled:opacity-50 disabled:pointer-events-none'
                                    disabled={updating}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </>
            )}
        </div>
    );
};
