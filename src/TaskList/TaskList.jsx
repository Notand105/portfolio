import React, { useReducer, createContext } from "react";
import TaskContainer from "./TaskContainer";
import { ACTIONS, PRIORITY, TaskClass } from "./Utils";
import Context from "./Context";
const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        //tasks: state.tasks.push(action.payload),
        tasks: [...state.tasks, action.payload]
      };
    case ACTIONS.DELETE_TASK:
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload.id )
      };
    case ACTIONS.TOGGLE_TASK:
        let negated  = [...state.tasks]
        negated[negated.indexOf(action.payload.task)].complete = action.payload.toggle
        return{
            tasks: [...negated] 
        }
    default:
        return state
  }
};

const TaskList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddTask = (task) => {
    dispatch({ type: ACTIONS.ADD_TASK, payload: task });
  };
  const DeleteTask = (task) => {
    dispatch({ type: ACTIONS.DELETE_TASK, payload: task });
  };
  const ToggleTask = (task) => {
    dispatch({ type: ACTIONS.TOGGLE_TASK, payload: {task:task, toggle: !task.complete} });
    console.log(state.tasks)
  };

  return( 
    <Context.Provider value={{
        state: state,
        Add: AddTask, 
        Delete: DeleteTask, 
        Toggle: ToggleTask
    }}  >
        <div>
            <TaskContainer />
        </div>
    </Context.Provider>
  );
};

export default TaskList;
