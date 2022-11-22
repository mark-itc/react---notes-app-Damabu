import { useState } from "react";
import DateComponent from "./DateComponent";

function NoteForm({ allStatesApp }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { notes, setNotes } = allStatesApp

  const handleSubmit = (e) => {
    e.preventDefault();

    const { children:date } = DateComponent().props

    const data = {
      date,
      title,
      description,
    };

    const newNote =[...notes, data]
    
    setNotes(newNote)

    setTitle("");
    setDescription("")

  };



  const onKey = (e) => {
    
    const textarea = document.querySelector("textarea")
    textarea.style.height = "70px";
    
    let scrollHeight = e.target.scrollHeight;
    textarea.style.height = `${scrollHeight}px`;

    
  };

  

  return (
    <div className="max-w-md mx-auto my-5 border border-gray-200 rounded-md">
      <form className="relativeform-note flex-col" onSubmit={handleSubmit}>
        <input
          className=" border border-gray-200 rounded-md m-5 px-4 py-2 flex items-center justify-center w-96 mx-auto"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          
          className="height: `${scrollHeight}px` border border-gray-200 rounded-md m-5 px-4 py-2 resize-none overflow-hidden flex items-center justify-center w-96 mx-auto"
          value={description}
          placeholder="Description"
          onKeyDown={(e) => onKey(e)}
          onChange={(e) => {
            setDescription(e.target.value)}}
        ></textarea>
        <button
          type="submit"
          className=" disabled:hover:bg-red-500  flex items-center justify-center font-bold mx-auto w-96 my-10 border border-gray-200 bg-gray-200 text-gray-700 rounded-md py-2 transition duration-500 ease select-none hover:bg-black hover:text-white focus:outline-none focus:shadow-outline"
          onClick={() => {
            setTitle(title);
            setDescription(description);
          }}
          disabled={ description.length >= 1 ? false : true }
          style={{  }}
          alt="mammals"
        >
          Add
        </button>
       
      </form>
    </div>
  );
}

export default NoteForm;
