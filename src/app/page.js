"use client";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function Home() {
  const router = useRouter();
  const [data,setData] = useState({
    username:"",
    password:""
  }); 

  console.log (data);
  function handleSubmit() {
    router.push("/users")
  }

  return (
    <main className="flex justify-center items-center h-[100vh]">
      <div className="flex flex-col gap-3 p-8 border-2 border-slate-300 rounded-b-xl w-[420px]">
        <p className="text-2xl font-bold text-center">Connect With Us</p>
        <Input placeholder="Masukkan Email"
        onChange={(e) =>
          setData((currentData) => ({
            ...currentData,
            username: e.target.value,
          }))
        }  
        />
        <Input placeholder="Masukkan Password"
        onChange={(e) =>
          setData((currentData) => ({
            ...currentData,
            password: e.target.value,
          }))
        }
        />
        <Button onClick={(handleSubmit)}>Sign in</Button>
      </div>      
    </main>
  )
}
