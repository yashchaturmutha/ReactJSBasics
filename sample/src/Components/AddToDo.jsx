import React,{useState} from "react";

const AddToDo = ({ onAdd }) => {

    const[addToDo,setAddToDo]=useState({
        title:'',
        desc:''
      });


    const submit=(e)=>{
        e.preventDefault();

        if(!addToDo.title || !addToDo.desc)
        alert("Please fill required fields");

        else
        {
        onAdd(addToDo);
        setAddToDo({title:'',desc:''})
        }
    }

    return (
        <form className="container" onSubmit={submit}>
            <div className="mb-3">
                <label for="title" className="form-label">
                    Title
                </label>
                <input
                    value={addToDo.title}
                    type="text"
                    className="form-control"
                    id="title"
                    onChange={(e) => setAddToDo({ ...addToDo, title: e.target.value })}
                />
            </div>

            <div className="mb-3">
                <label for="desc" className="form-label">
                    Description
                </label>
                <input
                    value={addToDo.desc}
                    type="text"
                    className="form-control"
                    id="desc"
                    onChange={(e) => setAddToDo({ ...addToDo, desc: e.target.value })}
                />
            </div>

            <button type="submit" className="btn btn-success">
                Add
            </button>
        </form>
    );
};

export default AddToDo;
