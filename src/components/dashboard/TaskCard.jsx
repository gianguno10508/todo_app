import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TrashIcon from "./icons/TrashIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faComment,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

function formatDate(dateString) {
  const dateObj = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return dateObj.toLocaleDateString("en-US", options);
}

function TaskCard({ task, deleteTask, updateTask, updateTaskTest, color, bg }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="opacity-30 bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative"
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
      >
        <div className="img"></div>
        <div className="content-col">
          <div className="title-col">
            <a href="#">{task.title}</a>
          </div>
          <div className="content">
            <div className="date">
              <FontAwesomeIcon icon={faClock} />
              {formatDate(task.date)}
            </div>
            <div className="comment">
              <FontAwesomeIcon icon={faComment} />1
            </div>
          </div>
        </div>
        {/* <textarea
          className={`h-[90%]
          w-full resize-none border-none rounded bg-transparent ${color} focus:outline-none`}
          value={task.content}
          autoFocus
          placeholder="Task content here"
          // onBlur={toggleEditMode}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter" && e.shiftKey) {
          //     toggleEditMode();
          //   }
          // }}
          // onChange={(e) => updateTask(task.id, e.target.value)}
        /> */}
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative task"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p
        className={`my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap ${color}`}
      >
        {task.content}
      </p>

      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id);
          }}
          className={`stroke-gray-500
          hover:bg-columnBackgroundColor absolute right-4 top-1/2 -translate-y-1/2 bg-columnBackgroundColor p-2 rounded opacity-60 hover:opacity-100 ${color}`}
        >
          <TrashIcon />
        </button>
      )}
    </div>
  );
}

export default TaskCard;
