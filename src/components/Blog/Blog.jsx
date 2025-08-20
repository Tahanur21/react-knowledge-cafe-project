import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookMark}) => {
    // console.log(blog)
    const {author,author_img,cover,posted_date,reading_time,title,hashtags} = blog
    return (
    <div className="space-y-5 mb-12">
            <img className="w-full rounded-2xl" src={cover} alt="" />
        <div className="flex justify-between">
            <div className="flex items-center gap-4">
                <img className="w-14" src={author_img} alt="" />
                <div className="space-y-1">
                 <p className="text-xl font-bold">{author}</p>
                 <p className="text-xs text-[#2c2c2c]">{posted_date}</p>                 
                </div>
            </div>
            <div className="flex items-center gap-2">
                <p>{reading_time} min read</p>
                <button onClick={()=>{
                    handleAddToBookMark(blog)
                }} className="text-xl text-gray-500"><CiBookmark></CiBookmark></button>
            </div>
        </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="space-x-4 text-sm text-gray-500">
                {
                    hashtags.map((hash,idx) => <span key={idx}>#{hash}</span>)
                }
            </p>
            <hr/>
    </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
}

export default Blog;