import {ReactNode} from "react";
import Sidebar from "@/app/dashboard/_components/Sidebar";


const DashboardLayout = ({ children }: { children: ReactNode}) => {
    return (
        <main className="w-full flex min-h-screen bg-[#FAFAFA]">
            <Sidebar />
            <div className="ml-64 flex w-full 2xl:w-[1440px] p-5 md:p-10">
                { children }
            </div>
        </main>
    );
};

export default DashboardLayout;