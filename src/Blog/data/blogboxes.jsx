import { slugify } from "../slugify";
import Blog01 from "./Blog1";
import Blog02 from "./Blog2";


const rawBlogs = [
  {
    id: 1,
    url: "Crypto Payment Integration Website Payment Gateway",
    title: "How Businesses Can Integrate Crypto Payments Into Their Website Payment Gateway",
    category: "Blockchain",
    description: "Learn how businesses integrate crypto payments into modern website gateways.",
    image: "../Screenshot_3.png", // manually added
    date: "April 19, 2026",
    content: Blog01,

  },
{
  id: 2,
  url: "crypto-liquidity-explained",
  title: "Understanding Liquidity in Cryptocurrencies: Challenges and Modern Solutions",
  category: "Liquidity",
  description: "Learn how liquidity impacts cryptocurrency markets, key challenges like volatility and fragmentation,",
  image: "../liqucdity.jpg",
  date: "April 24, 2026",
  content: Blog02,
}
]

export const blogs = rawBlogs.map((blog, index) => ({
  ...blog,
  id: index + 1,
  slug: slugify(blog.url)
}))