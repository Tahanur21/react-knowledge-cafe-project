import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,mark}) => {
    // const {reading_time} = mark
    return (
        <div className="col-span-1 ">
            <div className="bg-gray-200 border-2 rounded-2xl p-4 mb-4">
                <h1>Reading Time : {mark}</h1>
            </div>
            <div className="bg-gray-200 border-2 rounded-2xl p-4">
            <h2 className="text-lg font-bold">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}
                    mark={mark}></Bookmark>)
            }
        </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    mark: PropTypes.number,
}

export default Bookmarks;