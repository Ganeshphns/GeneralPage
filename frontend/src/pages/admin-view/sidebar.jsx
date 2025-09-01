import {
  UserStar,
  LayoutDashboard,
  BusFront,
  Disc,BatteryLow,Zap,TriangleAlert,Settings
} from "lucide-react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../../components/ui/sheet";

// Sidebar menu items
export const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    id: "mobility",
    label: "mobility",
    path: "/admin/mobility",
    icon: <BusFront size={20} />,
  },
  {
    id: "enery",
    label: "energy",
    path: "/admin/energy",
    icon: <BatteryLow size={20} />,
  },
  {
    id: "connectivity",
    label: "connectivity",
    path: "/admin/connectivity",
    icon: <Zap size={20} />,
    
  },
  {
    id: "heatmaps",
    label: "heatmaps",
    path: "/admin/heatmaps",
    icon: <Disc size={20} />,
    
  },
  {
    id: "alertreports",
    label: "alertreports",
    path: "/admin/alertreports",
    icon: <TriangleAlert size={20} />,
    
  },
  {
    id: "settings",
    label: "settings",
    path: "/admin/settings",
    icon: <Settings size={20} />,
    
  },
  
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();

  return (
    <nav className="mt-8 flex flex-col gap-2 ">
      {adminSidebarMenuItems.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            navigate(item.path);
            if (setOpen) setOpen(false); // close sheet on mobile
          }}
          className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground "
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
}

export default function AdminSideBar({ open, setOpen }) {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64 bg-white ">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b pb-2 flex items-center gap-2">
              <UserStar size={28} />
              
              <SheetTitle className="text-2xl font-extrabold">
                Admin Panel
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 flex-col border-r bg-background p-6">
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex cursor-pointer items-center gap-2 mb-6"
        >
          <UserStar size={28} />
          <h1 className="text-xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </Fragment>
  );
}
