import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import cardImg from "../../assets/images/HealthInsight.png";
import toast from "react-hot-toast";

const HealthInsights = ({ activeCategory, searchTerm, limit }) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBlogs = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/blogs");
            const result = await res.json();

            if (result.code === 200) {
                setBlogs(result.data);
                console.log("Fetched blogs:", result.data);
            } else {
                toast.error("Failed to fetch blogs");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const filteredByCategory =
        activeCategory && activeCategory !== "All"
            ? blogs.filter(blog => blog.category?.name === activeCategory)
            : blogs;

    const filteredBlogs = filteredByCategory.filter(blog => {
        const heading = blog.heading?.toLowerCase() || "";
        const paragraph = blog.mainParagraph?.toLowerCase() || "";
        const search = (searchTerm || "").toLowerCase();

        return heading.includes(search) || paragraph.includes(search);
    });


    return (
        <div className="relative mt-10 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 flex-1">
                {loading ? (
                    <p>Loading...</p>
                ) : filteredBlogs.length === 0 ? (
                    <p className="text-black text-lg font-[500] ">
                        No blogs available
                    </p>
                ) : (
                    filteredBlogs.slice(0, limit ?? filteredBlogs.length).map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white p-4 rounded-[12px] bg-no-repeat bg-bottom-left bg-[url('/src/assets/images/HealthInsight-card-bg.png')] shadow-lg drop-shadow-[0_4px_8px_rgba(221, 124, 254, 0.4)]"
                        >
                            <img
                                src={blog.coverImage || cardImg}
                                alt={blog.title}
                                className="w-full h-[240px] object-cover rounded-md mb-4"
                            />
                            <div className="flex justify-between">
                                <h3 className="text-[20px] font-[600] text-[#1A1D1F]">
                                    {blog.heading}
                                </h3>
                            </div>
                            <div
                                className="text-[14px] mt-4 text-[#454C52] line-clamp-4"
                                dangerouslySetInnerHTML={{ __html: blog.metaDescription }}
                            ></div>
                            <div className="flex justify-end mt-4">
                                <Link to={`/blogs/${blog._id}`}>
                                    <button className="bg-primary-500 cursor-pointer text-white px-6 py-3 rounded-full hover:bg-primary-700 transition">
                                        Read more
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default HealthInsights;
