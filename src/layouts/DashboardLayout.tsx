import type React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/ui/footer";
import { Header } from "../components/ui/header";
import { Sidebar } from "../components/ui/sidebar";

type Props = {
    children?: React.ReactNode;
};

export const DashboardLayout = ({ children }: Props) => {
    return (
        <div className='min-h-screen flex bg-neutral-950'>
            <Sidebar />
            <div className='flex flex-col w-full p-3'>
                <Header />
                <main className='p-5 rounded-lg mt-3 bg-secondary mb-3'>
                    {children ? children : <Outlet />}
                </main>
                <Footer />
            </div>
        </div>
    );
};
