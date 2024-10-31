import blogs from "../../data/Eat";
import EatPost from "./EatPost";

const EatBlog = () => {
  console.log(blogs);
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      {blogs.map((blog) => (
        <EatPost
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

export default EatBlog;
