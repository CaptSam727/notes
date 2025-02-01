import { useState, useEffect } from "react";
import "../css/Note.css";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { v4 as uuid } from "uuid";

function Notes() {
  //states
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [noteToEdit, setNoteToEdit] = useState("");
  const [toggleButton, setToggleButton] = useState(false);

  // get text and store in state
  const textHandler = (event) => {
    setInputText(event.target.value);
  };

  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText
      }
    ]);
    //clear the textarea
    setInputText("");
  };

  //delete note function
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // edit the note
  const editNote = (id) => {
    const toEdit = notes.find((note) => {
      return note.id === id;
    });
    setInputText(toEdit.text);
    setNoteToEdit(id);
    setToggleButton(true);
  };

  const editHandler = () => {
    setNotes(
      notes.map((note) => {
        if (note.id === noteToEdit) {
          return { ...note, text: inputText };
        }
        return note;
      })
    );
    setToggleButton(false);
    setInputText("");
    setNoteToEdit(null);
  };

  //apply the save and get functions using useEffect
  //get the saved notes and add them to the array
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setNotes(data);
    }
  }, []);

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
      <CreateNote
        textHandler={textHandler}
        saveHandler={saveHandler}
        editHandler={editHandler}
        toggleButton={toggleButton}
        inputText={inputText}
      />
    </div>
  );
}

export default Notes;