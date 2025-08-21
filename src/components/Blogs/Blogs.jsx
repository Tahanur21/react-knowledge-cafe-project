import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
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
                        blog={blog}
                        handleAddToBookMark={handleAddToBookMark}
                        handleMarkAsRead={handleMarkAsRead}
                        ></Blog>)
                }
            </div>
        </div>
    );
};
Blogs.PropTypes = {
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}

export default Blogs;