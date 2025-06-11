"use client";
import useSWR from "swr";

export default function Newspage() {
const fetcher = (...args) => fetch(...args).then(res => res.json())
const {
    data: posts,
    error,
    isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    if (isLoading) {
      return(
        <div>
          <p>Loading..</p>
        </div>
      )
    }

    
    if (error) {
      return(
        <div>
          <p>Gagal Menggambil Data</p>
        </div>
      )
    }




  return (
    <div className="flex flex-col gap-3">
        {posts.map((post,index)=>(
        <div className="border-2 border-slate-200 p-4 rounded-lg" key={index}>
            <p>{post.title}</p>
        </div>

        ))}
    </div>
  );
  
}
