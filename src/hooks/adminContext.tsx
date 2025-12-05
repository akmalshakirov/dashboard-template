// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useState,
//     type ReactNode,
// } from "react";

// type AdminState = {
//     isLogined: boolean;
//     isAdmin: boolean;
//     login: (admin?: boolean) => void;
//     logout: () => void;
//     setAdmin: (v: boolean) => void;
// };

// const AdminContext = createContext<AdminState | undefined>(undefined);

// export const AdminProvider: React.FC<{ children: ReactNode }> = ({
//     children,
// }) => {
//     const [isLogined, setIsLogined] = useState<boolean>(() => {
//         if (typeof window === "undefined") return false;
//         return localStorage.getItem("isLogined") === "true";
//     });
//     const [isAdmin, setIsAdmin] = useState<boolean>(() => {
//         if (typeof window === "undefined") return false;
//         return localStorage.getItem("isAdmin") === "true";
//     });

//     useEffect(() => {
//         if (typeof window === "undefined") return;
//         localStorage.setItem("isLogined", String(isLogined));
//         localStorage.setItem("isAdmin", String(isAdmin));
//     }, [isLogined, isAdmin]);

//     const login = (admin = false) => {
//         setIsLogined(true);
//         setIsAdmin(admin);
//     };

//     const logout = () => {
//         setIsAdmin(false);
//         setIsLogined(false);
//     };

//     return (
//         <AdminContext.Provider
//             value={{ isAdmin, isLogined, login, logout, setAdmin: setIsAdmin }}>
//             {children}
//         </AdminContext.Provider>
//     );
// };

// export const useAdmin = (): AdminState => {
//     const ctx = useContext(AdminContext);
//     if (!ctx) throw new Error("useAdmin must be used inside AdminProvider");
//     return ctx;
// };
