import BlogPost from "./BlogPost";
import blogs from "../../data/blogs";

const Blog = () => {
  console.log(blogs);
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      {blogs.map((blog) => (
        <BlogPost
          key={blog.id}
          id={blog.id}
          image={blog.image}
          title={blog.title}
          subtitle={blog.subtitle}
          author={blog.author}
          date={blog.date}
          readTime={blog.readTime}
        />
      ))}
    </div>
  );
};

export default Blog;
