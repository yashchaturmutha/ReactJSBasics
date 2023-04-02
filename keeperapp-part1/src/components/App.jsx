import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function deleteNote(id)
  {
    setNotes(prevNote => {
      return(
        prevNote.filter((foundnote,index)=>{
          return(
            index!==id
          )
        })
      )
    });
  }

    function addnote(note)
    {
       console.log(note);
       
       setNotes(prevNote => {
        return[...prevNote,note];
      });
    }
  return (
    <div>
      <Header />
      <CreateArea addfunc={addnote}/>

     { notes.map((foundnote,index)=> 
     <Note key={index}id={index} onchecked={deleteNote}title={foundnote.title} content={foundnote.content} /> )  }
      <Footer />
    </div>
  );
}

export default App;
