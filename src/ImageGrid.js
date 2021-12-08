import React, { useState } from "react";
import "./ImageGrid.css";
import Modal from "./Modal";
import { motion } from "framer-motion";
const ImageGrid = ({ docs }) => {
  const [selectedImg, setSelectedImg] = useState({
    selectedImg: "",
    template_id: "",
  });
  return (
    <div>
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <motion.div
              className="img-wrap"
              key={doc.id}
              layout
              whileHover={{ opacity: 1 }}
              s
              onClick={() =>
                setSelectedImg({ selectedImg: doc.url, template_id: doc.id })
              }
            >
              <motion.img
                src={doc.url}
                alt="uploaded pic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              />
            </motion.div>
          ))}
      </div>
      {selectedImg.selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
};

export default ImageGrid;
