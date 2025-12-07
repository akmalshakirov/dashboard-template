import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { useAdmin } from "./hooks/adminContext";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { Dashboard } from "./pages/DashboardHome";
import { Login } from "./pages/login";
import { AdminDetail } from "./pages/AdminDetail";

function App() {
    // const { isAdmin, isLogined } = useAdmin();
    const navigate = useNavigate();
    const isLogined = localStorage.getItem("isLogined") == "true";
    useEffect(() => {
        if (!isLogined) {
            navigate("/login", { replace: true });
        }
    }, [isLogined]);

    // useEffect(() => {
    //     if (!isLogined || !isAdmin) {
    //         navigate("/login");
    //     }
    // }, [isAdmin, isLogined]);

    return (
        <Routes>
            <Route path='/' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route
                path='*'
                element={
                    <DashboardLayout>
                        <Dashboard />
                    </DashboardLayout>
                }
            />
            <Route
                path='admin/:id'
                element={
                    <DashboardLayout>
                        <AdminDetail />
                    </DashboardLayout>
                }
            />
        </Routes>
    );
}

export default App;
