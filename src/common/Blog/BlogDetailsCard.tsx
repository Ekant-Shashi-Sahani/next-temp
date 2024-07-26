import { notFound } from "next/navigation";
import { IBlogDetails } from "../interface";
import Image from "next/image";
import { CiCalendarDate, CiFacebook } from "react-icons/ci";
import Tooltip from "../Tooltip/Tooltip";

const fetchBlog = async (Slug: string): Promise<IBlogDetails | null> => {
  try {
    const res = await fetch(
      `https://api.prestoenviro.com/api/presto/v1/blogs/slug/${Slug}`,
      {
        next: { revalidate: 60 }, 
      }
    );
    console.log("Fetch Response:", res);

    if (!res.ok) {
      console.error("Fetch Error:", res.statusText);
      return null;
    }

    const data = await res.json();
    console.log("Fetched Data:", data);
    return data;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
};

const BlogDetailsCard = async ({ params }: { params: { Slug: string } }) => {
  const blog = await fetchBlog(params.Slug);
  console.log("Blog Data:", blog);

  if (!blog) {
    notFound();
    return null;
  }

  const {
    Title,
    Author,
    BriefDescription,
    Image: img,
    ImageAltText,
    PostedDate,
    Description,
  } = blog;

  return (
    <div className=" mx-auto  bg-white shadow-lg rounded-lg">
      <div>
        <Image
          src={`https://assets.prestoenviro.com/blog/${img}`}
          alt={ImageAltText || "blog image"}
          className="rounded-t-lg object-contain  w-full h-auto"
          width={500}
          height={300} // Adjust the height as needed
        />
      </div>
      <div className="grid grid-cols-2 gap-5 px-3">
        {PostedDate ? (
          <div className="flex items-center py-4 space-x-2">
            <CiCalendarDate size={25} />{" "}
            <Tooltip text="Publication Date" position="top">
              <span>{PostedDate}</span>{" "}
            </Tooltip>
          </div>
        ) : null}

        <div className="flex justify-end items-center py-4">
          <Tooltip text="Share on Facebook" position="top">
            <CiFacebook size={25} />
          </Tooltip>
        </div>
      </div>
      <div className="px-4 mb-4">
        <h2 className="text-xl text-red-600">{Author}</h2>
        <br />
        <h5 className="text-md text-slate-900">{Title}</h5>
        <p>{BriefDescription}</p>
        <br />
        <div
          className="prose mt-4"
          dangerouslySetInnerHTML={{ __html: Description }}
        />
      </div>
    </div>
  );
};

export default BlogDetailsCard;
