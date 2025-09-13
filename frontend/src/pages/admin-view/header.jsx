
import { Button } from "../../components/ui/button";
import { AlignJustify, LogOut,UserCog } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { logoutUser, resetTokenandCredentials } from "../../store/auth-slice";
import { useDispatch } from "react-redux";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
const user = {
    userName:'ganesh'
  }

export default function AdminHeader({ setOpen }) {
  const navigate = useNavigate();
   const dispatch = useDispatch()

  async function handleLogout() {
      await  dispatch(logoutUser());
      dispatch(resetTokenandCredentials());   // 🔑 clear immediately
    navigate("/auth/login", { replace: true });
     
     
  
      navigate('/auth/login');
    }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-background border-b">
      <Button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <AlignJustify />
        <span className="sr-only">Toggle Menu</span>
      </Button>
      <h1 className="text-2xl font-extrabold pl-5"><strong>Subscription 
Management System</strong></h1>
      <div className="flex flex-1  justify-end">
                    <div className="relative z-50 justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="bg-black w-10 h-10 rounded-full">
              <AvatarFallback className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-extrabold">
                {user?.userName[0].toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="right"
            className=" z-50 w-56 bg-white rounded-md shadow-md space-y-1 py-2"
          >
            <DropdownMenuLabel className="text-sm text-muted-foreground px-2 pb-1">
              Logged in as{" "}
              <span className="font-medium text-black">{user?.userName}</span>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={() => navigate("/shop/account")}
              className="flex items-center gap-2 px-2 py-2"
            >
              <UserCog className="h-4 w-4" />
              <span>Account</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem
              onClick={handleLogout}
              className="flex items-center gap-2 px-2 py-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

        {/* <Button
          onClick={handleLogout}
          className="inline-flex gap-2 items-center rounded-md bg-black px-4 py-2 text-sm  font-medium text-white shadow"
        >
          <LogOut />
          LogOut
        </Button> */}
      </div>
    </header>
  );
}
