import { Outlet } from "react-router-dom";
// import { Header } from "../components/header";
// import { Sidebar } from "../components/sidebar";

export const DashboardLayout = () => {
    return (
        <div className='flex justify-center flex-col'>
            {/* <Sidebar />
            <Header /> */}
            <main>
                <Outlet />
            </main>
        </div>
    );
};
