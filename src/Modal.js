import React from "react";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
const Modal = ({ setSelectedImg, selectedImg }) => {
  const history = useHistory();
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg({
        selectedImg: "",
        template_id: "",
      });
    }
  };
  const editClickHandler = () => {
    history.push("/edittemplate", { selectedImg: selectedImg });
  };
  const editStyle = {
    marginLeft: "25%",
    marginRight: "25%",
    padding: "5px",
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div style={editStyle}>
        <button className="templatebutton" onClick={editClickHandler}>
          edit
        </button>
        <button className="collectionbutton">Download</button>
      </motion.div>
      <motion.img
        src={selectedImg.selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
