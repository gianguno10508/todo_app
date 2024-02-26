import React, { useState } from "react";
import Modal from "react-modal";
import { saveAs } from "file-saver"; 

Modal.setAppElement("#root");

function PopupComponent({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    // Kiểm tra xem đã có hình ảnh được chọn hay chưa
    if (!image) {
      console.log("No image selected!");
      return;
    }

    // Tạo một đối tượng FileReader để đọc file
    const reader = new FileReader();
    reader.onload = () => {
      // Lưu hình ảnh xuống hệ thống tệp của người dùng
      saveAs(reader.result, `${title}.jpg`);
    };
    reader.readAsDataURL(image);

    // Reset state
    setTitle("");
    setDescription("");
    setImage(null);
    setIsOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      {/* Nội dung của Component */}

      {/* Popup */}
      <Modal className="popup-modal" isOpen={true} onRequestClose={onClose}>
        {/* Nội dung của popup */}
        <h2>Title</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <h2>Description</h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <h2>Upload Image</h2>
        <input type="file" onChange={handleImageChange} />

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleCloseModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default PopupComponent;
