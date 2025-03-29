import { createContext, useState } from "react";
import { BaseURL } from "../BaseURL";
import { useNavigate } from "react-router-dom";

// step-1 context Provider
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading, setLoading] = useState(false);
    const[posts, setPost] = useState([]);
    const[page, setPage] = useState(1);
    const[totalpage, setTotalPage] = useState(null);
    const navigate = useNavigate();


    const blogPosts=async(page=1, tag=null , category)=>{
        setLoading(true);
        let url = `${BaseURL}?page=${page}`;
        if (tag){
            url += `&tag=${tag}`;
        }
        if (category){
            url += `&category=${category}`;
        }
        try{
            const result = await fetch(url);
            const data= await result.json();
            if (!data.posts || data.posts.length === 0)
                throw new Error("Something Went Wrong");
            console.log(data);
            setPage(data.page);
            setPost(data.posts);
            setTotalPage(data.totalPages);
        }
        catch(error){
            console.log("Error is occur during fetching the data",error);
            setPage(1);
            setPost([]);
            setTotalPage(null);
        }
        setLoading(false);
    };


    const pageChange=(page)=>{
        setPage(page);
        navigate({search: `?page=${page}`})
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPost,
        page,
        setPage,
        totalpage,
        setTotalPage,
        pageChange,
        blogPosts
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}