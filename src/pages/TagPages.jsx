import { useLocation, useNavigate } from "react-router-dom"
import Header from "../component/Header";
import Contant from "../component/Contant";
import Footer from "../component/Footer";

const TagPages =()=>{
    const naviation = useNavigate();
    const location= useLocation();
    const tag=location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div className="Category_page">
                <button onClick={()=> naviation(-1)}  className="blog_button">
                    Back
                </button>
                <h2 className="Category_heading">
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            </div>
            <Contant/>
            <Footer/>
        </div>
    )
}

export default TagPages;