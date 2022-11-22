
import React from "react";


function NoteCard({ note, deleteNote, id, allStatesApp }) {

  const { modalOn, setModalOn, setNoteModal } = allStatesApp

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your note?")) {
      deleteNote(note.id);
    }
  };

  note.id = id


  

  return (
    <>
      <div
        onClick={() => { 
          setNoteModal(note)
          setModalOn(!modalOn) }}
        className="cursor-pointer border border-gray-200 p-0 rounded-md"
      >
        <div className=" flex justify-end">
          <div className=" pt-1 w-9 h-8" onClick={(e) => e.stopPropagation()}>
            <button
              className=" text-xs grid justify-center content-center font-extrabold w-0 h-8 bg-white text-gray-700 rounded-md p-4 transition duration-500 ease select-none hover:bg-black hover:text-white focus:outline-none focus:shadow-outlin"
              onClick={handleDelete}
            >
              X
            </button>
          </div>
        </div>
        <div className=" p-4 pt-0">
          <h2 className="text-gray-400 text-xs">Created on: {note.date}</h2>
          { note.updateDate && <h2 className="text-gray-400 text-xs">Modificated on: {note.updateDate}</h2> }          
          <h1 className="capitalize flex justify-center font-bold">
            {note.title}
          </h1>
          <p className="flex justify-center">{note.description}</p>
        </div>
        </div>

    </>
  );
}

export default NoteCard;
