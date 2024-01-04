import React from "react";
import Styles from "../styles/Bookmark.module.css";
import { useSelector, useDispatch } from "react-redux";

function Bookmark() {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state) => state.bookmarks);
  console.log(bookmarks);

  return (
    <div className={Styles.Home}>
      <div className={Styles.Bookmarks}>
        {bookmarks !== null &&
          bookmarks !== undefined &&
          bookmarks.map((bookmark, index) => (
            <div className={Styles.Bookmark} key={index}>
              <span>{bookmark.content}</span>
              <p>~{bookmark.author}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Bookmark;
