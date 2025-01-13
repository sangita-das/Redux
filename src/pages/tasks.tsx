import { AddTaskModal } from "@/components/module/tasks/AddTaskModal";
import TaskCard from "@/components/module/tasks/TaskCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook"



export default function Tasks() {

  const disPatch = useAppDispatch ();
    const tasks = useAppSelector(selectTasks);
    // const filter = useAppSelector(selectFilter);

    console.log(tasks);
    // console.log(filter);

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-end items-center gap-5">
        <h1 className="mr-auto ">Tasks</h1>
       <Tabs defaultValue= "all">
            <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger
           onClick={() => disPatch(updateFilter("all"))} 
           value="all">
            All
          </TabsTrigger>
          <TabsTrigger 
          onClick={() => disPatch(updateFilter("low"))}
          value="low">Low</TabsTrigger>
          <TabsTrigger 
          onClick={() => disPatch(updateFilter("medium"))}
          value="medium">Medium</TabsTrigger>
          <TabsTrigger 
          onClick={() => disPatch(updateFilter("high"))}
          value="high">High</TabsTrigger>
          </TabsList>
       </Tabs>

        <AddTaskModal/>
      </div>
      <div className="space-y-5 mt-5">
        {
            tasks.map((task) => (
            <TaskCard task={task} key={task.id} />
        ))
        }
      </div>
    </div>
  )
}
