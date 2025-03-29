import { NavLink } from "react-router-dom"

const BlogDetails = ({ post }) => {
    
    return (
        <div className="card_div">
            <NavLink to={`/blog/${post.id}` } className="nav">
                <span className="card_title">{post.title}</span>
            </NavLink>
            <div className="title_files">
            <p className="title_details"> By <span className="author_name">{post.author}</span> on
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className="author_categery">{post.category}</span>
                </NavLink>
            </p>
            </div>
            <p className="posted_date">posted on {post.date}</p>
            <p className="posted_contant">{post.content}</p>
            <div className="tags">
                    {post.tags.map((tag, index) => (
                        
                        <NavLink to={`/tags/${tag.replaceAll(" ","-")}`}  key={index}>
                         <span  className="hash_spacing">{`#${tag}`}</span>
                        </NavLink>
                    ))
                    }
                </div>


        </div>
    );
};
export default BlogDetails