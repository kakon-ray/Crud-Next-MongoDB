"use client"
import React from 'react';
import { HiOutlineTrash } from "react-icons/hi";

const RemoveBtn = () => {
    const removeTopic = () => {

    }
    return (
        <button onClick={removeTopic} className="delete_button">
        <HiOutlineTrash size={24} />
      </button>
    );
};

export default RemoveBtn;