import PropTypes from "prop-types";


const Blog = ({blog}) => {
    console.log(blog)
    const {author,author_img,cover,posted_date,reading_time,title} = blog
    return (
        <div>
            <img src={cover} alt="" />
            <div>
                <div>
                <img src={author_img} alt="" />
                <p>{author}</p>
                <p>{title}</p>
            </div>
            <div>
                <p>{posted_date}</p>
            </div>
            </div>
        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;