import axios from "axios";
import { useEffect, useState } from "react";

type adminProps = {
    id: number;
    username: string;
    role?: string;
};

export const Dashboard = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [admins, setAdmins] = useState([]);
    const [error, setError] = useState<string>("");

    const fetchAdmins = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("http://localhost:5000/admins");
            setAdmins(data.admins);
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

    useEffect(() => {
        fetchAdmins();
    }, []);

    if (loading) {
        return <>Loading...</>;
    } else if (admins.length === 0) {
        return error;
    }

    return (
        <>
            {admins.map((a: adminProps) => (
                <div key={a.id}>
                    <div>{a.username}</div>
                    <div>{a.role}</div>
                </div>
            ))}
        </>
    );
};
