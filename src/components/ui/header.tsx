import { useLocation } from "react-router-dom";

type HeaderProps = {
    title?: string;
};

export const Header = ({ title }: HeaderProps) => {
    const query = useLocation();
    if (!query) return;
    if (query.pathname.startsWith("/admin/")) {
        title = "Admin's Detail";
    } else {
        title = "Dashboard";
    }

    return (
        <header className='bg-secondary p-5 rounded-lg'>
            <div>
                <h1>{title}</h1>
            </div>
        </header>
    );
};
