import BlogPost from "../Home/BlogPost";
import blogs from "../../data/Relax";

const RelaxBlog = () => {
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

export default RelaxBlog;
