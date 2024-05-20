"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";


const EditForm = ({id,title,description}) => {

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/product/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to update topic");
            }

           
            router.push("/");
            router.refresh();
            
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="card">
            <h2 className="text-center py-5 text-xl">Edit Topic</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                    onChange={(e) => setNewTitle(e.target.value)}
                    value={newTitle}
                    className="border border-slate-500 px-8 py-2"
                    type="text"
                    placeholder="Topic Title"
                />

                <input
                    onChange={(e) => setNewDescription(e.target.value)}
                    value={newDescription}
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

export default EditForm;