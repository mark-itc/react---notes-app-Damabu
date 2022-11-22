import { useState } from "react";
import DateComponent from "./DateComponent";

const Modal = ({  updateDate, close, note, allStatesApp}) => {


  const{ title, description, id, date } = note
  const { notes, setNotes } = allStatesApp

  console.log(id);

  const [ titleEdit , setTitleEdit ] = useState(title)
  const [ descriptionEdit, setDescriptionEdit ] = useState(description)
  
  const updateNote = () => {

    const { children:dateUpdate } = DateComponent().props

    const noteUpdate = {
      date,
      updateDate : dateUpdate,
      title : titleEdit,
      description : descriptionEdit
    }

    notes[id] = noteUpdate

    setNotes(notes)

    
  }
  
  const { modalOn, setModalOn } = allStatesApp
  return (
    <div
    className="flex h-screen justify-center items-center fixed inset-0 z-50 border border-gray-200 rounded-md"
  >
    <div 
    className="p-0 opacity- flex-col justify-center mx-auto border border-gray-200 bg-white rounded-md"
    onClick={(e) => e.stopPropagation()}
    >
    <div className="pt-0 flex justify-end">
      <div className=" pt-1 w-9 h-8" onClick={(e) => e.stopPropagation()}>
        <button
          className="grid justify-center content-center font-extrabold w-0 h-8 bg-white text-gray-700 rounded-md px-4 transition duration-500 ease select-none hover:bg-black hover:text-white focus:outline-none focus:shadow-outlin"
          onClick={() => setModalOn(!modalOn)}
        >
          X
        </button>
      </div>
    </div>
    <div className=" p-4 pt-1">
      <h2 className="text-gray-400 text-xs">{date}</h2>
      <h2 className="text-gray-400 text-xs">{updateDate}</h2>


      {/* <h1 className="capitalize flex justify-center font-bold">
        {title}
      </h1> */}
      <input className="capitalize flex justify-center font-bold" type="text" value={titleEdit} onChange={(e) => { setTitleEdit(e.target.value) }}/>
      <textarea className="flex justify-center font-bold" value={descriptionEdit} onChange={(e) => { setDescriptionEdit(e.target.value) }}></textarea>
      <div onClick={() => setModalOn(!modalOn)}>
      <button className="flex justify-center mx-auto font-bold" onClick={updateNote}>Update</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Modal;