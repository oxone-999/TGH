import React from "react";
import Styles from "../styles/Bookmark.module.css";
// import { useSelector } from "react-redux";

function Bookmark() {
  // const bookmarks = useSelector((state) => state.bookmarks);
  const [bookmarks_local, setBookmarks_local] = React.useState([]);

  React.useEffect(() => {
    const getBookmarks = () => {
      const bookmark = JSON.parse(localStorage.getItem("bookmark"));
      setBookmarks_local(bookmark);
      console.log("bookmark",bookmark);
    };
    getBookmarks();
  }, []);

  return (
    <div className={Styles.Home}>
      <div className={Styles.Bookmarks}>
        {bookmarks_local !== null &&
          bookmarks_local !== undefined &&
          bookmarks_local.map((bookmark) => (
            <div className={Styles.Bookmark} key={bookmark._id}>
              <span>{bookmark.content}</span>
              <p>~{bookmark.author}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Bookmark;
