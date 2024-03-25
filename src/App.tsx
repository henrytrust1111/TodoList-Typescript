import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import PopUp from "./components/PopUp";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [ok, setOk] = useState<boolean>(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  // const handleAdd = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (todo && todo != " ") {
  //     setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
  //     setTodo("");
  //   }
  // };
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedTodo = todo.trim();

    if (trimmedTodo) {
        setTodos([...todos, { id: Date.now(), todo: trimmedTodo, isDone: false }]);
        setTodo("");
    }
};


  // console.log(todos);

  const onDragEnd = (result: DropResult) => {
    // console.log(result);
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;
    let add,
      active = todos,
      complete = completedTodos;
    if (source.droppableId === "TodosList1") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "TodosList1") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          {ok ? <PopUp setOk={setOk} /> : null}
          <span className="heading">My Todos (created by HENRY)</span>

          <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />

          <TodoList
            todos={todos}
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        </div>
      </DragDropContext>
    </>
  );
};

export default App;
