import { useState } from "react"
import { blogs } from "../Blog/data/blogboxes"
import BlogGrid from "./BlogGrid"
import SearchBar from "./SearchBar"

const Home = () => {

const [search, setSearch] = useState("")

const filteredBlogs = blogs.filter((blog) =>
blog.title.toLowerCase().includes(search.toLowerCase())
)

return (

<div className="bg-gray-50 lg:max-w-6xl xl:max-w-7xl mx-auto justify-center w-full md:px-10 px-5 pt-20 md:pt-20 py-20">

    <div className="md:top-1/4 pt-5 md:pt-16">

        <h1 className="text-xl md:text-4xl items-center duration-300 text-[#1A2B6B] font-medium mb-5">
            Lastest Crypto Blogs
        </h1>

        <SearchBar setSearch={setSearch} />

        <div className="mt-8">
            <BlogGrid blogs={filteredBlogs} />

        </div>
    </div>
</div>

)

}

export default Home