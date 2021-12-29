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
    fetch("http://localhost:3001/api/v1/collections", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let dataObj = { data: data.items };
        setTodo(dataObj);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(true);
      });
  };
  return <div>{!loading && loadedFun(todo.data)}</div>;
};

export default Template;
