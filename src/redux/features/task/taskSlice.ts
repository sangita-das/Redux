import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { ITask } from './../../../types';
import { RootState } from "@/redux/store";
import { deleteUser } from "../user/userSlice";



interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
    tasks : [
        {
            id: "UdZI6Y4xYmjJqpBAHvoix",
            title: "Machine Learning",
            description: "Learn basics of machine learning in 30 days",
            isCompleted: false,
            priority: "high",
            assignedTo: null,
            dueDate: "2024-12-31T18:00:00.000Z",
        },
    ],
    filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority" | "assignedTo"> ;


const createTask = (taskData: DraftTask): ITask => {
  return  {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo ? taskData.assignedTo : null,
    dueDate: new Date(taskData.dueDate).toISOString(),
  };
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask : (state, action : PayloadAction <DraftTask>) =>{
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteState: (state, action : PayloadAction <string>) => {
            console.log(action)
            state.tasks.forEach((task) => task.id === action.payload 
            ?
             (task.isCompleted = !task.isCompleted)  : task 
            )
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            // console.log(action) 
           state.tasks =  state.tasks.filter((task) => task.id !== action.payload);
        },
        updateFilter: (state, action: PayloadAction< "all" | "low" | "medium" | "high" >) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase( deleteUser, (state, action) => {
            state.tasks.forEach(task => task.assignedTo === action.payload ? (task.assignedTo = null) : task)
        })
    },
});

export const selectTasks = (state: RootState) => {
    const filter = state.todo.filter;

    if(filter === "low" ) {
        return state.todo.tasks.filter(task => task.priority === "low");
    } 
    else if (filter === "medium" ) {
       return state.todo.tasks.filter(task => task.priority === "medium") 
    }
    else if (filter === "high" ) {
       return state.todo.tasks.filter(task => task.priority === "high") 
    }
    else{
        return state.todo.tasks;
    }
    
}
export const selectFilter =(state: RootState) => {
    return state.todo.filter;
}

export const { addTask, toggleCompleteState, deleteTask, updateFilter } = taskSlice.actions;


export default taskSlice.reducer;