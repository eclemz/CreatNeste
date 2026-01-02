// import { groq } from "next-sanity";
export const blogPostQuery = `
  *[_type == "blogPost"] | order(date desc) {
    _id,
    title,
    slug,
    author,
    date,
    externalUrl,
    category,
    content,
    "coverImage": coverImage.asset->url,
    categories[]->{
      _id,
      title,
      slug,
      bgColor,
      borderColor,
      textColor
    }
  }
`;

export const categoryBySlugQuery = `
  *[_type == "category" && slug.current == $slug][0]{
    title,
    description,
    seo {
      metaTitle,
      metaDescription,
      ogImage
    }
`;

export const allCategoriesQuery = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    bgColor,
    borderColor,
    textColor
  }
`;
export const latestBlogPostQuery = `
  *[_type == "blogPost"] | order(date desc)[0] {
    _id,
    title,
    date,
    author,
    externalUrl,
    content,
    "coverImage": coverImage.asset->url,
    categories[]->{
      title
    }
  }
`;
