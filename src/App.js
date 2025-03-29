
import { useContext, useEffect } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './pages/Home';
import BlogPages from './pages/BlogPages';
import TagPages from './pages/TagPages';
import CategoryPages from './pages/CategoryPages';

function App() {
  const { blogPosts } = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();


  useEffect(() => {
    const page = searchParams.get("page") ?? 1;
    

    if (location.pathname.includes("tag")) {
      const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");
      blogPosts(Number(page), tag);
    }
    else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-", " ");
      blogPosts(Number(page), null, category);
    }
    else {
      blogPosts(Number(page));
    }
  }, [location.pathname, location.search]);


  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:blogId' element={<BlogPages />} />
        <Route path='/tags/:tag' element={<TagPages />} />
        <Route path='/categories/:category' element={<CategoryPages />} />
      </Routes>

      
    </div>
  )
}

export default App;
