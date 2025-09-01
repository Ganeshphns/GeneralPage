
import { Button } from "../../components/ui/button";
import { AlignJustify, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function UserHeader({ setOpen }) {
  const navigate = useNavigate();

  function handleLogout() {
   // dispatch(logoutUser());
   

    navigate('/auth/login');
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
            <h1 className="text-2xl font-extrabold pl-5">6G Smart City Dashboard</h1>

      <div className="flex flex-1  justify-end">
        <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md bg-black px-4 py-2 text-sm  font-medium text-white shadow"
        >
          <LogOut />
          LogOut
        </Button>
      </div>
    </header>
  );
}
