import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import { useAdmin } from "./hooks/adminContext";
import { DashboardLayout } from "./layouts/DashboardLayout";
import { AdminDetail } from "./pages/AdminDetail";
import { CreateAdmin } from "./pages/CreateAdmin";
import { Dashboard } from "./pages/DashboardHome";
import { Login } from "./pages/login";

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
            <Route
                path='create-admin'
                element={
                    <DashboardLayout>
                        <CreateAdmin />
                    </DashboardLayout>
                }
            />
        </Routes>
    );
}

export default App;
