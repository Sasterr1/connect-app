import { IconKey, IconUser } from "@tabler/icons-react";

export default function Users() {
  return (
    <div id="container" className="flex h-dvh bg-white">
      <section id="navigasi" className="border-r-2 p-4">
        <h1 className="text-3xl text-center text-black">Connnect</h1>
        <div>
          <button className="mt-4 flex flex-col gap 2 text-black">
            <IconUser/>Users
            </button>
          <button className="text-black">
            <IconKey/>Hak Akses
            </button>
          <button>Logout</button>
        </div>
      </section>
      <section id="content">
        <input placeholder="Cari Users" />
        <div id="list-users"></div>
      </section>
      <section>

      </section>
    </div>
  );
}
