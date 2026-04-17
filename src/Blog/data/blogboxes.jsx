import { slugify } from "../slugify";
import Blog01 from "./Blog1";

const rawBlogs = [
  {
    id: 1,
    url: "Crypto Payment Integration Website Payment Gateway",
    title: "How Businesses Can Integrate Crypto Payments Into Their Website Payment Gateway",
    category: "Blockchain",
    description: "Learn how businesses integrate crypto payments into modern website gateways.",
    image: "../Screenshot_3.png", // manually added
    date: "March 10, 2026",
    content: Blog01,

  },
  // {
  //   id: 2,
  //   url: "Future of Blockchain Payment Systems",
  //   title: "The Future of Blockchain Payment Systems: Trends and Predictions",
  //   category: "Blockchain",
  //   description: "Explore how blockchain payment infrastructure is evolving.",
  //   image: "/path/to/your/image2.jpg", // manually added
  //   date: "March 15, 2026",
  //   content: Blog02, 
  // }
]

export const blogs = rawBlogs.map((blog, index) => ({
  ...blog,
  id: index + 1,
  slug: slugify(blog.url)
}))