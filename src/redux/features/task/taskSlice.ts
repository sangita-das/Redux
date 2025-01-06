import { createSlice } from "@reduxjs/toolkit";
import { ITask } from './../../../types';
import { RootState } from "@/redux/store";


interface InitialState {
    tasks: ITask[];
    filter: "all" | "high" | "medium" | "low";
}
const initialState: InitialState = {
    tasks : [
        {
        id: "aegrhtuki765",
        title: "Initialize frontend",
        description: "Create Home page, and routing",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "High",
    },
        {
        id: "23456ty7dfgh765",
        title: "Init gitHib repo",
        description: "Create GitHub Repo, and update code",
        dueDate: "2025-11",
        isCompleted: false,
        priority: "Medium",
    },
    
    ],
    filter: "all",
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
});

export const selectTasks = (state: RootState) => {
    return state.todo.tasks;
}
export const selectFilter =(state: RootState) => {
    return state.todo.filter;
}


export default taskSlice.reducer;