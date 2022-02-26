import axios, { Axios } from "axios";
import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [newDescription, setNewDescription] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [todos, setTodos] = useState([]);

  const handleNewDescriptionChange = (e) => {
    setNewDescription(e.target.value);
  };

  const handleIsCompleteChange = (e) => {
    setIsComplete(e.target.checked);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/todos/", {
        description: newDescription,
        complete: isComplete,
      })
      .then(() => {
        axios.get("http://localhost:3000/todos/").then((res) => {
          setTodos(res.data);
        });
      });

    // console.log(newDescription);
    // console.log(isComplete);
  };

  // const handleDelete = (todosData) => {
  //   axios.delete(`http://localhost:3000/todos/${todosData._id}`).then(() => {
  //     axios.get("http://localhost:3000/todos/").then((res) => {
  //       setTodos(res.data);
  //     });
  //   });
  // };

  const handleDelete = (todosData) => {
    axios.delete(`http://localhost:3000/todos/${todosData._id}`).then(() => {
      axios.get("http://localhost:3000/todos").then((res) => {
        setTodos(res.data);
      });
    });
  };

  useEffect(() => {
    axios.get("http://localhost:3000/todos/").then((res) => {
      setTodos(res.data);
    });
  });

  return (
    <main>
      <h1>Todos List</h1>
      <section>
        <h2>Create a Todo</h2>
        <h3>Todos:</h3>

        <ul>
          {" "}
          {/*this ul has a ternary for striking through if todo is complete or not */}
          {todos.map((todos) => {
            return (
              <li>
                {todos.complete ? (
                  <strike>{todos.description}</strike>
                ) : (
                  todos.description
                )}
              </li>
            );
          })}
        </ul>

        <form onSubmit={handleSubmitForm}>
          Description:{" "}
          <input type="text" onChange={handleNewDescriptionChange} />
          <br />
          Is Complete:{" "}
          <input type="checkbox" onChange={handleIsCompleteChange} />
          <br />
          <input type="submit" value="Create To Do" />
        </form>
        <button
          onClick={(event) => {
            handleDelete(todos);
          }}
        >
          Delete
        </button>
      </section>
    </main>
  );
}

export default App;
