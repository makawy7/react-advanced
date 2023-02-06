import { useState, useReducer } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  // console.log(state);
  if (action.type === "ADD_ITEM") {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOpen: true,
      modalContent: "Item added!",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "No value added!",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload),
      isModalOpen: true,
      modalContent: "Item removed!",
    };
  }
  throw new Error("No matching action!");
};
const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

function UseReducer() {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const submitHandler = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const removeHandler = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={submitHandler} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add
        </button>
      </form>
      {state.people.map(({ id, name }) => (
        <div key={id} className="item">
          <h4>{name}</h4>
          <button onClick={() => removeHandler(id)}> 
            remove
          </button>
        </div>
      ))}
    </>
  );
}

export default UseReducer;
