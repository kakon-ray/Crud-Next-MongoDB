import Image from "next/image";
import './globals.css'
import TopicList from '../component/TopicList'


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



export default async function Home() {

  const { product } = await getTopics();

  return (
    <>
    {product?.map((t) => (
       <TopicList key={t._id} id={t._id} title={t.title} description={t.description}/>
    ))}
    </>
  );
}
