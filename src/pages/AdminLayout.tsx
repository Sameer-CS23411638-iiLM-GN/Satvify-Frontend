import type { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import "./AdminLayout.css";

type Props = {
    children: ReactNode;
};

function AdminLayout({ children }: Props) {
    return (
        <div className="admin-layout">
            <AdminSidebar />

            <div className="admin-content">
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;