import { useNotes } from "../Context/NotesContext";
import Message from "./Message";

export default function Notestatus() {
  // drived state:
  const notes = useNotes();
  const allNotes = notes.length;
  const completedNote = notes.filter((n) => n.Completed).length;
  const unCompletedNote = notes.filter((n) => !n.Completed).length;
  const noNotes = 'No Notes has already been added'
  if (!allNotes) return <Message icon="✉" text=" No Notes" />
  return (
    <div>
      <ul className="note-status">
        <li>
          All <span>{allNotes}</span>
        </li>
        <li>
          Completed <span>{completedNote}</span>
        </li>
        <li>
          open <span>{unCompletedNote}</span>
        </li>
      </ul>

    </div>
  );
}
