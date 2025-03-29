import { useLocation, useNavigate } from "react-router-dom"
import Header from "../component/Header";
import Footer from "../component/Footer";
import Contant from "../component/Contant";

const CategoryPages = ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    const category=location.pathname.split("/").at(-1);

    return (
        <div>
            <Header/>
            <div className="Category_page">
                <button onClick={()=>navigate(-1)} className="blog_button">Back</button>
                <h2 className="Category_heading"> Blogs Tagged <span>#{category}</span></h2>
            </div>
            <Contant/>
            <Footer/>
        </div>
    )
}

export default CategoryPages