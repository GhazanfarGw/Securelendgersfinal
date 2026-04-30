import { slugify } from "../slugify";
import Blog01 from "./Blog1";
import Blog02 from "./Blog2";
import Blog03 from "./Blog3";
import Blog04 from "./Blog4";


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
},

{
  id: 3,
  url: "liquidity-providers-custody-solutions",
  title: "The Complete Guide to Cryptocurrency Asset Protection",
  category: "Protection",
  description: "Learn how Crypto liquidity providers, market makers & investors: protect digital assets with offshore trusts,",
  image: "../asset protection.jpeg",
  date: "April 29, 2026",
  content: Blog03,
},

{
  id: 4,
  url: "crypto-market-makers-liquidity-providers-usa-canada-2026",
  title: "Top Crypto Market Makers & Liquidity Providers: The Complete 2026 Guide",
  category: "Market Makers",
  description: "Crypto markets in 2026 are no longer driven by hype alone. They are shaped by liquidity, execution quality,",
  image: "../marketmakers.jpeg",
  date: "April 30, 2026",
  content: Blog04,
}
]

export const blogs = rawBlogs.map((blog, index) => ({
  ...blog,
  id: index + 1,
  slug: slugify(blog.url)
}))
