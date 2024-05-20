import Link from 'next/link';
import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="text-white font-bold" href={"/"}>
                GTCoding.
            </Link>
            <Link className="button p-2" href={"/addTopic"}>
                Add Topic
            </Link>
        </nav>
    );
};

export default Navbar;