"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import '../../addTopic/addTopic.css'
const page = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const router = useRouter();
  
    const handleSubmit = async (e) => {
    };


    return (
        <div className="card">
            <h2 className="text-center py-5 text-xl">Edit Topic</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Topic Title"
                />

                <input
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Topic Description"
                />

                <button
                    type="submit"
                    className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default page;