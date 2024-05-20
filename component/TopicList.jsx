import React from 'react';
import RemoveBtn from './RemoveBtn';
import './TopicList.css'
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';


const getTopics = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/product", {
        cache: "no-store",
      });
  
      if (!res.ok) {
        throw new Error("Failed to fetch topics");
      }
  
      return res.json();
    } catch (error) {
      console.log("Error loading topics: ", error);
    }
  };

  

const TopicList = async () => {



    const { product } = await getTopics();

    return (<>
      {product.map((item) => (
        <div  key={item._id}>
            <div
                className="topiclist_container"
            >
                <div>
                    <h2 className="font-bold text-2xl">{item.title}.</h2>
                    <div>{item.description}</div>
                </div>

                <div className="flex gap-2">
                    <RemoveBtn />

                    <Link href={`/editTopic/${item._id}`}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        </div>
))}
    </>
        
    );
};

export default TopicList;