import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks)
    return (
        <div className="col-span-1 bg-gray-200 border-2 rounded-2xl p-4">
            <h2 className="text-lg font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;