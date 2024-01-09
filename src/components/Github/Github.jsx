// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export default function Github() {
  const data = useLoaderData();
  const createdAt = (new Date(data.created_at)).toDateString();
  const updatedAt = (new Date(data.updated_at)).toDateString();

  return (
    <div className="py-16 w-full bg-gray-700">
      <div className="mx-auto max-w-7xl flex justify-between">
        <img src={data.avatar_url} className="rounded-full" alt='Git Picture' width={300} />
        <div className="">
          <p className="text-white text-right text-3xl font-bold mb-2">Hi {data.name}!</p>
          <p className="text-white text-right text-xl">Your Public Repos are {data.public_repos}</p>
          <p className="text-white text-right">Account is created at {createdAt}</p>
          <p className="text-white text-right">Last update {updatedAt}</p>
        </div>
      </div>
    </div>
  );
}

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/Jawad79Ahmad');
  return response.json();
}
