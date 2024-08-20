"use client";

import {useRouter} from "next/navigation";
import {routes} from "@/constants/Routes";
import SidebarItems from "@/app/dashboard/_components/SidebarItems";
import {LogOut, Settings} from "lucide-react";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";

const SidebarRoutes = () => {
    const router = useRouter();
    return (
        <div className="w-full h-full items-start flex flex-col gap-3 mt-10">
            {
                routes.map((route, i) => (
                    <SidebarItems key={i} route={route} onClick={() => router.push(route.href)} />
                ))
            }
            <div className="w-full items-start flex flex-col gap-3 mt-auto">
                <SidebarItems
                    route={{ label: "Settings", href: "/dashboard/settings", icon: Settings }}
                    onClick={() => router.push("/dashboard/settings")}
                />
                <Button
                    variant="ghost"
                    className="flex w-full justify-start items-center gap-2 text-sm pl-6 bg-white text-blue-950"
                >
                    <LogOut className="w-4 h-4 text-blue-950" />
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default SidebarRoutes;