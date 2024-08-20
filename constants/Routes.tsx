import {Calendar, LayoutGrid, LibraryBig, LucideIcon, Sofa, Star} from "lucide-react";

export type SidebarRoutesType = {
    label: string;
    href: string;
    icon: LucideIcon;
};

export const routes: SidebarRoutesType[] = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
    { label: "Property", href: "/dashboard/properties", icon: Sofa },
    { label: "Room Availability", href: "/dashboard/room-availability", icon: Calendar },
    { label: "Booking Request", href: "/dashboard/booking-request", icon: LibraryBig },
    { label: "Reviews", href: "/dashboard/reviews", icon: Star }
]