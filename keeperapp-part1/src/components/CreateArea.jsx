import React ,{useState}from "react";

function CreateArea(props) {

    const [notes, setNotes] = useState({
        title:"",
        content:""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setNotes(prevNote => {
          return{
              ...prevNote,
              [name]:value
          }
        });
      }

      function submitNote(event)
      {
        props.addfunc(notes);

        setNotes({
          title:"",
          content:""
        });
        event.preventDefault();
      }
      
  return (
    <div>
      <form>
        <input value={notes.title}onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={notes.content}onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
