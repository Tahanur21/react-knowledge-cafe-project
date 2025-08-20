import PropTypes from "prop-types";


const Blog = ({blog}) => {
    console.log(blog)
    const {author,author_img,cover,posted_date,reading_time,title} = blog
    return (
    <div className="">
            <img className="w-[780px] rounded-2xl" src={cover} alt="" />
        <div className="flex justify-between">
            <div className="flex gap-4">
                <img className="w-14" src={author_img} alt="" />
                <div>
                 <p>{author}</p>
                 <p>{posted_date}</p>
                </div>
            </div>
            <div>
                <p>{reading_time} min read</p>
            </div>
        </div>
    </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;