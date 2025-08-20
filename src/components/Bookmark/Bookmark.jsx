import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="text-center mt-4 bg-white p-6 rounded-xl">
            <h1 className="text-sm font-bold">{title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object,
}
export default Bookmark;