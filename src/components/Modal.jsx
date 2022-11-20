const Modal = ({ date, title, description, close }) => {

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
          onClick={close}
        >
          X
        </button>
      </div>
    </div>
    <div className=" p-4 pt-1">
      <h2 className="text-gray-400 text-xs">{date.props.children}</h2>

      <h1 className="capitalize flex justify-center font-bold">
        {title}
      </h1>
      <p className="flex justify-center">{description}</p>
    </div>
    </div>
    </div>
  );
};

export default Modal;