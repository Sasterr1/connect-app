import UserCard from "@/components/ui/users-card";
import { IconLogout, IconLogout2, IconUser, IconUsersGroup, IconUsersPlus,IconPlus } from "@tabler/icons-react";
import { Icon } from "lucide-react";
import { usersData } from "../../../mock/userdata";
import AccessTable from "../../../mock/roledata";
import Link from "next/link";

export default function Users() {
  return (


    <section id="container" className="flex h-screen justify-center">

      <section id="navigation" className="bg-white w-[15%] border-r border-gray-300 p-4 ">
        <h1 className="text-[30px] mb-5  font-sans  font-bold text-center">Connect</h1>
        <div className="nav-buttons flex flex-col items-center gap-4 p-2 w-full mb-2 font-bold text-[18px]">
<Link href="../users">
 <button className="rounded-[10px] flex items-center gap-2 py-2 px-3 text-black  cursor-pointer">
    <IconUser /> Users
  </button>
</Link>
          <button className="rounded-[10px] flex items-center gap-2 py-2 px-3 bg-black text-white border border-gray-300 w-[90%] cursor-pointer">
            <IconUsersPlus /> Hak Akses
          </button>
          <button className=" flex items-center gap-2 py-2 px-3  w-[90%] ">
            <IconLogout2 /> Logout
          </button>
        </div>
      </section>

 
      <section id="content" className="bg-white w-[85%] p-5">
        
       <AccessTable />
      </section>
      <button className="absolute bottom-10 right-6 bg-gray-300 hover:bg-gray-100 text-xl w-15 h-10 rounded flex items-center justify-center ">
        <IconPlus />
      </button>
    </section>

    

  );
}
