import React from 'react';
import RemoveBtn from './RemoveBtn';
import './TopicList.css'
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';


const TopicList = ({title,description,id}) => {
    return (
        <div>
            <div
                className="topiclist_container"
            >
                <div>
                    <h2 className="font-bold text-2xl">{title}.</h2>
                    <div>{description}</div>
                </div>

                <div className="flex gap-2">
                    <RemoveBtn />

                    <Link href={`/editTopic/${id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TopicList;