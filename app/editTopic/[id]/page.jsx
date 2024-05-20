import EditForm from "@/component/EditForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/product/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function page({ params }) {
  const { id } = params;
  const { product } = await getTopicById(id);
  const { title, description } = product;

  return <EditForm id={id} title={title} description={description} />;
}