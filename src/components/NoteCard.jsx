import Modal from "./Modal";
import React, { useState } from "react";

function NoteCard({ note, deleteNote }) {
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      deleteNote(note.id);
    }
  };

  const [modalOn, setModalOn] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (date, title, description) => {
    let tempdata = [date, title, description];

    setTempdata((note) => [1, ...tempdata]);
    console.log(tempdata);

    return setModalOn(true);
  };

  return (
    <div className="mx-auto border border-gray-200 p-4 rounded-md">
      <div className=" flex items-center justify-center ">
        <h2 className="text-gray-400 text-xs">{note.date}</h2>
        <button className="font-extrabold ml-3 mb-2" onClick={handleDelete}>
          X
        </button>
      </div>
      <div
        className="cursor-pointer"
        onClick={() => getData(note.date, note.title, note.description)}
      >
        <h1 className="capitalize flex justify-center font-bold">
          {note.title}
        </h1>
        <p className="flex justify-center">{note.description}</p>
      </div>

      {modalOn === true ? (
        <Modal
          date={note[1]}
          title={note[2]}
          description={note[3]}
          setModalOn={setModalOn}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default NoteCard;