import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {

  return (
    <Link to={`/${blog.slug}`}>

      <div className="bg-white transition duration-300 overflow-hidden group">
        <div>
          <img
          src={blog.image}
          className="w-full h-48 object-cover group-hover:scale-105 transition"
          alt="images"/>
        </div>

        <div className="p-5">

          <p className="text-xs tracking-wider text-indigo-600 mb-2">
            {blog.category}
          </p>

          <h3 className="text-sm font-bold text-[#1A2B6B] mb-2 group-hover:text-indigo-600 transition">
            {blog.title}
          </h3>

          <p className="text-gray-600 text-xs">
            {blog.description}
          </p>

          <div className="mt-4 text-xs text-gray-400">
            8 min read
          </div>

        </div>

      </div>

    </Link>
  );

};

export default BlogCard;