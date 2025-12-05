import axios from "axios";
import { useEffect, useState } from "react";

type adminProps = {
    id: number;
    username: string;
};

export const Dashboard = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [admins, setAdmins] = useState([]);

    const fetchAdmins = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get("http://localhost:5000/admins");
            setAdmins(data.admins);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdmins();
    }, []);

    if (loading) {
        return <>Loading...</>;
    }

    return (
        <div>
            {admins.map((a: adminProps) => (
                <div key={a.id}>{a.username}</div>
            ))}
        </div>
    );
};
