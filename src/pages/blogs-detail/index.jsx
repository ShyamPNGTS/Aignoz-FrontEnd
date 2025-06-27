import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import cardImg from "../../assets/images/HealthInsight.png"
import HealthInsights from '../../components/health-insights';
import { formatDistanceToNow } from 'date-fns';

const doctors = [
  {
    id: 1,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 2,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 3,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 4,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 5,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 6,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 7,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 8,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
  {
    id: 9,
    name: "5 Daily Habits for a Healthier Life",
    description: "Start small with daily habits that support your physical and mental well-being. From staying hydrated to getting enough sleep, simple choices can lead to long-term health benefits. ",
    image: cardImg,
  },
];

const BlogDetail = () => {

  const [headings, setHeadings] = useState([]);
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBlog = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/blogs");
      const result = await res.json();

      if (result.code === 200) {
        const matchedBlog = result.data.find((b) => b._id === id || b.id === parseInt(id));
        setBlog(matchedBlog);
        if (!matchedBlog) {
          toast.error("Blog not found");
        }
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
    fetchBlog();
  }, [id]);

  useEffect(() => {
    if (blog?.mainParagraph) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(blog.mainParagraph, 'text/html');
      const h1Elements = doc.querySelectorAll('h1');

      const headingTexts = Array.from(h1Elements)
        .map(h => h.textContent.trim())
        .filter(text => text.length > 0);
      setHeadings(headingTexts);
      console.log("Headings are : ", headings)
    }
  }, [blog]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!blog) return <div className="p-6">Blog not found</div>;

  return (
    <>
      {/* Hero Section */}
      <section style={{
    backgroundImage: `url(${blog.blogImages[0]})`
  }} className="relative bg-cover bg-center h-[50vh] md:min-h-[90vh] w-full">
        <div className="absolute w-max gap-2 sm:gap-4 md:gap-14 flex -right-45 md:-right-68 bottom-2 md:bottom-3 transform -translate-x-1/2 px-4">
          <p className="text-[#FAFAFA] font-[500] text-[12px] sm:text-md md:text-[19px] max-w-2xl mx-auto">
            Published on: {new Date(blog.publishedDate).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <p className="text-[#FAFAFA] font-[500] text-[12px] sm:text-md md:text-xl max-w-2xl mx-auto">
            By: {blog.author}
          </p>
          <p className="text-[#FAFAFA] font-[500] text-[12px] sm:text-md md:text-xl max-w-2xl mx-auto">
            {formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })}
          </p>
        </div>
      </section>

      {/* Detail Page Section */}
      <section className='section'>
        <button className="px-6 py-2 mt-10 rounded-full border border-primary-500 text-black font-[400] capitalize">
          {blog.category.name}
        </button>

        <h1 className='text-primary-500 font-[500] text-[38px] mt-10 '>{blog.heading}</h1>

        <p className='text-[17px] mt-5 text-[#383F45]'>Adopting small, healthy habits every day can have a significant impact on your overall well-being. Whether it’s improving your physical health or boosting your mental clarity, the choices you make every day set the tone for a healthier lifestyle.</p>

        <ul className='text-[17px] font-[400] mt-4 flex flex-col gap-2 list-disc list-inside'>
          {headings.map((heading, idx) => (
            <li key={idx} className='text-[17px] text-[#383F45] font-[400]'>
              {heading}
            </li>
          ))}
        </ul>

        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: blog.mainParagraph }}
        ></div>

        <style>
          {`
          .blog-content h1 {
            font-size: 34px;
            color: #262626;
           
            font-weight: 500;
          }
            
          .blog-content h1:first-of-type {
            margin-top: 3rem; 
          }

          .blog-content p {
            font-size: 17px;
            color: #383F45;
            margin-top: 0.75rem;
            font-weight: 400;
          }
        `}
        </style>
      </section>

      {/* Health Insights Section  */}
      <section className='section'>
        <div className='xl:w-[60%] text-center mx-auto mt-6'>
          <h1 className='font-[600] text-[36px]'>Explore Our Health Insights</h1>
          <p className='text-[18px] mt-2 text-[#383F45] '>Get expert advice, tips, and the latest health trends to empower your well-being.</p>
        </div>
        <HealthInsights limit={3} />
      </section>
    </>
  )
}

export default BlogDetail


