import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "../pages/BlogDetails";

const Contant =() =>{
    const {posts,loading} = useContext(AppContext);
    console.log(posts);
return(
   
    <div className="contant_div">
        {
            loading ? (<Spinner/>) : (posts.length===0 ? 
                (
                    <div> <p>Page Not Found</p> </div>
                    )
                :
                (posts.map((posts)=>(
                <BlogDetails key={posts.id} post={posts}/>
            ) ))
            )
        }
        
    </div>
)
}

export default Contant