import React from "react";
import Styles from "../styles/Home.module.css";
import axios from "axios";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const API_URL = import.meta.env.VITE_API_URL;

function Home() {
  const dispatch = useDispatch();
  const [quote, setQuote] = React.useState("");

  const response = async () => {
    const res = await axios.get(`${API_URL}/random`);
    setQuote(res.data);
    console.log("res", res.data);
    return res.data;
  };

  const handleQuote = () => {
    response();
  };

  React.useEffect(() => {
    const getQuote = async () => {
      try {
        const res = await response();
        console.log("res", res);
      } catch (err) {
        console.log(err);
      }
    };
    getQuote();
  }, []);

  return (
    <div className={Styles.home}>
      <div className={Styles.quoteContainer}>
        <div className={Styles.quote}>
          <p>{quote.content}</p>
        </div>
        <div className={Styles.author}>
          <p>~ {quote.author}</p>
        </div>
        <div>
          <BookmarksIcon
            style={{ color: "white" }}
            onClick={() => {
              // dispatch({ type: "ADD_BOOKMARK", payload: quote });
              toast.success("Quote added to bookmarks");

              const existingDataString = localStorage.getItem("bookmark");
              let existingData = existingDataString
                ? JSON.parse(existingDataString)
                : [];

              if (!Array.isArray(existingData)) {
                existingData = [];
              }

              existingData.push({
                _id: quote._id,
                content: quote.content,
                author: quote.author,
              });

              console.log("existingData", existingData);
              localStorage.setItem("bookmark", JSON.stringify(existingData));
            }}
          />
        </div>
      </div>
      <div className={Styles.button}>
        <button onClick={handleQuote}>Next Quote</button>
      </div>
    </div>
  );
}

export default Home;
