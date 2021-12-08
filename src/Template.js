import React, { useState, useEffect } from "react";
import "./ImageGrid.css";
import ImageGrid from "./ImageGrid";
//Fetch API
const loadedFun = (tmp) => {
  return <ImageGrid docs={tmp} />;
};
const Template = () => {
  const [todo, setTodo] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };
  return <div>{!loading && loadedFun(todo.data.memes)}</div>;
};

export default Template;
