import './App.css';
import { useState, useEffect } from 'react';
import Todo from './components/Todo';

function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);

  const newToDo = e => {
    e.preventDefault()
    setTodos(arr => [...arr, todo])
    setCounter(counter + 1)
  }

  const clickHandler = (newValue) => {
    if (newValue) {
      setCounter(counter + 1)
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="App">
      <div>{counter}</div>
      <form action="" onSubmit={newToDo}>
        <input type="text" id="newTodo" name="newTodo" value={todo} onChange={e => setTodo(e.target.value)} placeholder="Neues TODO" />
        <input type="submit" value="+" />
      </form>
      <div className="todos">
        {todos && todos.map((elt, i) =>
          <Todo
            key={i}
            todo={elt}
            onClick={clickHandler}
          />)
        }
      </div>
    </div>
  );
}

export default App;
