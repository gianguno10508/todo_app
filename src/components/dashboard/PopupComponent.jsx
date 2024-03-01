import React, { useState } from "react";
import Modal from "react-modal";
import { saveAs } from "file-saver";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faCalendarDays,
  faPaperclip,
  faBarsStaggered,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

Modal.setAppElement("#root");

function PopupComponent({ onClose, onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleCloseModal = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, image, selectedDate });
    // Kiểm tra xem đã có hình ảnh được chọn hay chưa
    if (!image) {
      console.log("No image selected!");
    }

    // Tạo một đối tượng FileReader để đọc file
    // const reader = new FileReader();
    // reader.onload = () => {
    //   // Lưu hình ảnh xuống hệ thống tệp của người dùng
    //   saveAs(reader.result, `${title}.jpg`);
    // };
    // reader.readAsDataURL(image);

    // Reset state
    setTitle("");
    setDescription("");
    setImage(null);
    setSelectedDate("");
    handleCloseModal();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <Modal
      className="popup-modal"
      isOpen={true}
      onRequestClose={onClose}
      style={{
        overlay: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          width: "600px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          borderRadius: "0",
          border: "none",
        },
      }}
    >
      <div className="flex relative flex-col text-left p-8 bg-white rounded-lg">
        <button
          className="absolute top-0 right-0 m-4 text-xl cursor-pointer"
          onClick={handleCloseModal}
        >
          X
        </button>

        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="title" className="text-l mb-6 text-left">
            <FontAwesomeIcon icon={faCreditCard} />
            <span className="pl-2 font-bold">Title</span>
            <input
              className="border rounded py-2 px-3 mb-6 w-full bg-ededed mt-2"
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="date" className="text-l mb-6 text-left">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span className="pl-2 font-bold">Select Date</span>
            <input
              className="border rounded py-2 px-3 mb-6 w-full bg-ededed mt-2"
              type="date"
              id="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
          </label>

          <label htmlFor="image" className="text-l mb-6 text-left">
            <FontAwesomeIcon icon={faPaperclip} />
            <span className="pl-2 font-bold">Upload Image</span>
            <input
              className="mb-6 w-full mt-2"
              type="file"
              id="image"
              onChange={handleImageChange}
            />
          </label>

          <label htmlFor="description" className="text-l mb-6 text-left">
            <FontAwesomeIcon icon={faBarsStaggered} />
            <span className="pl-2 font-bold">Description</span>
            <textarea
              className="border rounded py-2 px-3 mb-6 w-full bg-ededed mt-2"
              value={description}
              placeholder="Add a more detailed description…"
              rows="5"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label htmlFor="comment" className="flex items-center justify-between text-l mb-6 text-left">
            <div className="bg-black w-8 h-8 rounded-full"></div>
            <input
              className="border rounded-full py-2 w-11/12 px-3 bg-ededed mt-2"
              type="text"
              id="title"
              placeholder="Write a comment"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default PopupComponent;
