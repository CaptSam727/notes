import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import EditIcon from "@mui/icons-material/Edit";

function Note({ id, text, deleteNote, editNote }) {
  return (
    <div className="note">
      <div className="note__body">{text}</div>
      <div className="note__footer" style={{ justifyContent: "flex-end" }}>
        <EditIcon
          className="note__edit"
          onClick={() => editNote(id)}
          aria-hidden="true"
        />
        <DeleteForeverOutlinedIcon
          className="note__delete"
          onClick={() => deleteNote(id)}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default Note;