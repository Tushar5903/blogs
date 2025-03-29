import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Footer =() =>{
    const{page,totalpage,pageChange} = useContext(AppContext);
    function nextHandler(){
        pageChange(page+1);
    }
    function previousHandler(){
        pageChange(page-1);
    }

    return(
        <div className="footer_div">
        <div className="footer_buttons">
            { page> 1 &&
            <button className="buttons" onClick={previousHandler}>Previous</button>
}
{ page < totalpage &&
            <button className="buttons" onClick={nextHandler}>Next</button>
}
        </div>
            <p className="page_number">Page {page} of {totalpage}</p>
            </div>
    )
}

export default Footer;