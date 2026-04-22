import { useParams } from "react-router-dom"
import { blogs } from "../Blog/data/blogboxes"
import SEO from "../Blog/SeoPage/Seo"

const BlogPage = () => {

  const { slug } = useParams()

  const blog = blogs.find((b) => b.slug === slug)

  if (!blog) return <h1>Blog Not Found</h1>

  const Content = blog.content

  return (
    <>
      <div className="bg-gray-50 max-w-screen-2xl w-full md:px-10 px-5 pt-5 md:pt-8">

        <SEO
          title={blog.title}
          description={blog.description}
        />

        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">

          <div className="md:top-1/4 md:px-10 px-5 pt-5 md:pt-16 max-w-6xl mx-auto">
            <h1 className="text-xl max-w-3xl md:text-4xl text-[#fff] font-medium">
              {blog.title}
            </h1>

            <p className="text-sm mt-8 opacity-80">
              Date: {blog.date}
            </p>
          </div>

        </section>

        {/* Blog Content */}
          <Content />
      </div>
    </>
  )
}

export default BlogPage