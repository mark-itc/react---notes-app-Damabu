import Modal from "./Modal";
import React, { useState } from "react";
import Overlay from "./Overlay";

function NoteCard({ note, deleteNote }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      deleteNote(note.id);
    }
  };

  const { title, description, date } = note;

  const [modalOn, setModalOn] = useState(false);

  const openModal = () => {
    setModalOn(true);
  };

  const closeModal = () => {
    setModalOn(false);
  };

  return (
    <>
      <div
        onClick={openModal}
        className="cursor-pointer border border-gray-200 p-0 rounded-md"
      >
        <div className=" flex justify-end">
          <div className=" pt-1 w-9 h-8" onClick={(e) => e.stopPropagation()}>
            <button
              className="grid justify-center content-center font-extrabold w-0 h-8 bg-white text-gray-700 rounded-md px-4 transition duration-500 ease select-none hover:bg-black hover:text-white focus:outline-none focus:shadow-outlin"
              onClick={handleDelete}
            >
              X
            </button>
          </div>
        </div>
        <div className=" p-4 pt-0">
          <h2 className="text-gray-400 text-xs">{note.date}</h2>

          <h1 className="capitalize flex justify-center font-bold">
            {note.title}
          </h1>
          <p className="flex justify-center">{note.description}</p>
        </div>
        </div>

        {modalOn && (
          <Overlay close={closeModal}>
            <Modal
              date={date}
              title={title}
              description={description}
              close={closeModal}
            />
          </Overlay>
        )}
    </>
  );
}

export default NoteCard;
