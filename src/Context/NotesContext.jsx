import { createContext, useContext, useReducer } from "react";





const NoteContext = createContext(null);
const NotesDispatchContext = createContext(null);

function reducer(notes, actions) {
    switch (actions.type) {
        case "addNewNote": {
            return [...notes, actions.payload]
        };
        case "deleteNote": {
            return notes.filter(s => s.id !== actions.payload)
        };

        case "complated": {
            return notes.map((note) => note.id === actions.payload ? { ...note, Completed: !note.Completed } : note)

        };
        default: throw new Error("Unknow error")
    }
}


export function NoteProvider({ children }) {
    JSON.parse(localStorage.getItem("data"))
    const [notes, dispatch] = useReducer(reducer, [] = JSON.parse(localStorage.getItem("data")) || []);
    localStorage.setItem("data", JSON.stringify(notes))

    return (<NoteContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
            {children}
        </NotesDispatchContext.Provider>
    </NoteContext.Provider>)
}

export function useNotes() {
    return useContext(NoteContext)
}

export function useNotesDispatch() {
    return useContext(NotesDispatchContext)
}