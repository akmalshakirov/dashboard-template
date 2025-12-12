import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/modal/Modal";

export type AdminProps = {
    id?: number;
    username?: string;
    role?: string;
    name?: string;
    password?: string;
};

export const Dashboard = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [admins, setAdmins] = useState([]);
    const [error, setError] = useState<string>("");
    const [modal, setModal] = useState<boolean>(false);
    const navigate = useNavigate();

    // const fetchAdmins = async () => {
    //     setLoading(true);
    //     try {
    //         const { data } = await axios.get("http://localhost:5000/admins");
    //         setAdmins(data.admins);
    //     } catch (error: any) {
    //         if (error.response.status === 404) {
    //             setAdmins([]);
    //         }
    //         setError(
    //             error.response.data.error
    //                 ? error.response.data.error
    //                 : "Unknown error!"
    //         );
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // mongodb+srv://akmal:2M2uwroWGRhcM0lO@backend.lzgppvh.mongodb.net/?appName=backend

    // useEffect(() => {
    //     fetchAdmins();
    // }, []);

    const deleteAdmin = async (admin: AdminProps) => {
        const confr = confirm(
            `Do you really want to delete this admin named "${admin.id}" ?`
        );
        try {
            if (confr.valueOf()) {
                await axios.delete(
                    `http://localhost:5000/delete-admin/${admin.id}`
                );
                // fetchAdmins();
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (loading) {
        return <>Loading...</>;
    }
    // else if (admins.length === 0) {
    //     return <pre>{error}</pre>;
    // }

    return (
        <>
            <Modal visible={modal}>Hello</Modal>
            <div className='flex items-center justify-between mb-5'>
                <h1 className='text-2xl font-bold'>Admins</h1>
                <button
                    className='filled-gray-btn'
                    onClick={() => navigate("/create-admin")}>
                    Create admin
                </button>
            </div>
            <table className='rounded-lg min-w-full overflow-x-scroll overflow-auto'>
                <thead className='bg-white/20'>
                    <tr>
                        <th className='px-4 py-3 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-300 text-center'>
                            №
                        </th>

                        {[
                            { col: "Username" },
                            { col: "Name" },
                            { col: "Role" },
                            { col: "Action" },
                        ].map((col, index) => (
                            <td
                                key={Math.random() * 10}
                                className={`px-4 py-3 text-center text-gray-200 ${
                                    index === 3 && "text-end"
                                }`}>
                                {col.col}
                            </td>
                        ))}
                    </tr>
                </thead>

                <tbody className='divide-y divide-gray-400'>
                    {admins.map((a: AdminProps, index) => (
                        <tr
                            key={a.id}
                            className='hover:bg-gray-50 dark:hover:bg-secondary duration-150'>
                            <td className='px-4 py-3 text-center text-gray-200'>
                                {index + 1}
                            </td>
                            <td className='px-4 py-3 text-center text-gray-200'>
                                {a.username}
                            </td>
                            <td className='px-4 py-3 text-center text-gray-200'>
                                {a.name}
                            </td>
                            <td className='px-4 py-3 text-center text-gray-200'>
                                {a.role}
                            </td>
                            <td className='px-4 py-3 text-center text-gray-200 flex items-center justify-end gap-3'>
                                <button
                                    className='border border-gray-400/30 rounded-lg p-2 hover:bg-[#333] hover:border-gray-400/50 transition cursor-pointer active:translate-y-1 duration-100'
                                    onClick={() => navigate(`/admin/${a.id}`)}>
                                    Edit
                                </button>
                                <button
                                    className='border border-gray-400/30 rounded-lg p-2 hover:bg-[red]/20 hover:border-red-500/40 transition cursor-pointer active:translate-y-1 duration-100'
                                    onClick={() => deleteAdmin(a)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
