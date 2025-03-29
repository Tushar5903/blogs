import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../component/Header";
import BlogDetails from "./BlogDetails";
import Spinner from "../component/Spinner";

const BlogPages = () => {
    const [blog, setBlogs] = useState(null);
    const [relatedblog, setrelatedBlogs] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const { loading, setLoading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    async function blogpages() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log("Fetched Data:", data); // Debug API response

            setBlogs(data.blog );
            setrelatedBlogs(data.relatedBlogs); // This relatedBlogs is the api link call
        } catch (error) {
            console.log("There is an error in the blog pages", error);
            setBlogs(null);
            setrelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        if (blogId) {
            blogpages();
        }
    }, [location.pathname]);

    return (
        <div>
            <Header />
            <div className="Category_page">
                <button onClick={() => navigate(-1)} className="blog_button">Back</button>
            </div>
            <div>
                {loading ? (
                    <Spinner />
                ) : blog ? (
                    <div className="Blog_pages_first">
                        <BlogDetails post={blog} />
                        <h2 className="Blog_pages_middle_heading">Related Blogs</h2>
                        {
                            relatedblog.map((post) => (
                                <div key={post.id}>
                                    <BlogDetails post={post} />
                                </div>
                            )
                        ) }
                    </div>
                ) : (
                    <p>No Blog Found</p>
                )}
            </div>
        </div>
    );
};

export default BlogPages;
