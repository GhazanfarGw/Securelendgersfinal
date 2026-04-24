import BlogCard from "./BlogCard"

const BlogGrid = ({ blogs }) => {

return (

<div className="grid md:grid-cols-4 gap-6">

{blogs.map((blog) => (
<BlogCard key={blog.slug} blog={blog} />
))}

</div>

)

}

export default BlogGrid