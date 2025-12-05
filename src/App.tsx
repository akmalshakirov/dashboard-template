import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { useAdmin } from "./hooks/adminContext";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/DashboardHome";
import { Login } from "./pages/login";

function App() {
    // const { isAdmin, isLogined } = useAdmin();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!isLogined || !isAdmin) {
    //         navigate("/login");
    //     }
    // }, [isAdmin, isLogined]);

    useEffect(() => {
        const isLogined = localStorage.getItem("isLogined");
        if (!isLogined) {
            navigate("/login");
        }
    }, []);

    return (
        <Routes>
            <Route path='/' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path='/login' element={<Login />} />
        </Routes>
    );
}

export default App;
