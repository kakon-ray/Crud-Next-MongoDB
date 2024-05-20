import React from 'react';
import RemoveBtn from './RemoveBtn';
import './TopicList.css'
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';


const TopicList = () => {
    return (
        <div>
            <div
                className="topiclist_container"
            >
                <div>
                    <h2 className="font-bold text-2xl">Lorem ipsum dolor sit amet.</h2>
                    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, nisi.</div>
                </div>

                <div className="flex gap-2">
                    <RemoveBtn />

                    <Link href={`/editTopic/${2}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopicList;