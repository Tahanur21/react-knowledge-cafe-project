import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="col-span-2 space-y-5">
            <div className="border-b-gray-400 space-y-4">
                {
                    blogs.map(blog => <Blog 
                        key={blog.id} 
                        blog={blog}>                            
                        </Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;