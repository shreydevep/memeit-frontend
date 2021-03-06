import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import { saveAs } from "file-saver";
const EditTemplate = () => {
  const location = useLocation();
  const selectedImg = location.state.selectedImg;
  let [inputState, setInputState] = useState({
    text0: "",
    text1: "",
    url: selectedImg.selectedImg,
    template_id: selectedImg.template_id,
  });
  const containerStyle = {
    padding: "25px",
    margin: "auto",
    width: "70%",
    height: "100%",
    minHeight: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
  };
  const containerImgStyle = {
    display: "block",
    maxWidth: "60%",
    maxHeight: "80%",
    margin: "60px auto",
    boxShadow: "3px 5px 7px rgba(0, 0, 0, 0.5)",
    border: "3px solid white",
  };
  const downloadClickHandler = () => {
    saveAs(inputState.url,`${inputState.template_id}.jpg`)
  };
  const handlerCreateMeme = (e) => {
    e.preventDefault();
    let secureURL;
    let imgURL;
    let file;
    let finalImgURL = "";
    if (inputState.url && (inputState.text0 || inputState.text1)) {
      console.log(inputState);
      let url = `https://api.imgflip.com/caption_image?template_id=${inputState.template_id}&username=niwib&password=niwib@1234&text0=${inputState.text0}&text1=${inputState.text1}`;
      fetch(url, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          setInputState({
            ...inputState,
            url: data.data.url,
          });
          return data;
          /** DB Store Edited Image */
          // get secure url from our server
        })
        .then((data) => {
          imgURL = data.data.url;
        })
        .then((res) => {
          fetch("http://localhost:3001/api/v1/s3Url", {
            method: "GET",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((res) => {
              secureURL = res.secureURL;
              finalImgURL = secureURL.split("?")[0];
            });
          // console.log(secureURL);
          /** Collection End Point render */
        })
        .then(() => {
          fetch(imgURL)
            .then((res) => {
              return res.blob();
            })
            .then((blob) => {
              // console.log(blob);
              file = new File([blob], "test.jpg", { type: "image/jpeg" });
            })
            .then(() => {
              // console.log(file);
            })
            .then(() => {
              fetch(secureURL, {
                method: "PUT",
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                body: file,
              }).then(() => {
                let userObj = {
                  name: "test",
                  tags: ["sfsdgdle.com", "asgrsd"],
                  path: finalImgURL,
                };
                let userStr = JSON.stringify(userObj);
                // console.log("pata karna hai");
                fetch("http://localhost:3001/api/v1/collections", {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },

                  body: userStr,
                });
              });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setInputState({
        text0: "",
        text1: "",
        url: selectedImg.selectedImg,
        template_id: selectedImg.template_id,
      });
    } else {
      console.error("Error while Posting");
    }
  };
  const handleChange = (e) => {
    let temp = inputState;
    temp[e.target.name] = e.target.value;
    setInputState({
      ...temp,
    });
  };
  return (
    <div style={containerStyle}>
      <Container style={{ display: "flex" }}>
        <Form inline>
          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Input
              id="text0"
              name="text0"
              placeholder="Top Text"
              type="text"
              autoComplete="off"
              onChange={handleChange}
              value={inputState.text0}
            />
          </FormGroup>

          <img
            src={inputState.url}
            style={containerImgStyle}
            alt="enlarged pic"
          />

          <FormGroup className="mb-2 me-sm-2 mb-sm-0">
            <Input
              id="text1"
              name="text1"
              placeholder="Bottom Text"
              type="text"
              autoComplete="off"
              onChange={handleChange}
              value={inputState.text1}
            />
          </FormGroup>
          <Button
            style={{
              margin: "20px",
              background: "linear-gradient(to right, orange, tomato)",
            }}
            onClick={handlerCreateMeme}
          >
            Submit
          </Button>
          <Button
            style={{
              margin: "20px",
              background: "linear-gradient(to right, orange, tomato)",
            }}
            onClick={downloadClickHandler}
          >
            Download
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EditTemplate;
