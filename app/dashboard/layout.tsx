import {ReactNode} from "react";


const DashboardLayout = ({ children }: { children: ReactNode}) => {
    return (
        <div className="w-full min-h-screen bg-[#FAFAFA]">
            { children }
        </div>
    );
};

export default DashboardLayout;