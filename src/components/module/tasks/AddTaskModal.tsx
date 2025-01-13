import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel,  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogDescription } from "@radix-ui/react-dialog"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { addTask } from "@/redux/features/task/taskSlice"
import { ITask } from "@/types"
import { selectUsers } from "@/redux/features/user/userSlice"
import { useState } from "react"



export function AddTaskModal() {
  const [open, setOpen] = useState(false)
  const users = useAppSelector(selectUsers);

    const form = useForm();

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FieldValues> = ( data ) => {
        console.log(data);
        dispatch(addTask(data as ITask))
        setOpen(false);
        form.reset();
    }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button >Add Task</Button>
      </DialogTrigger>
      <DialogDescription className="sr-only">Fill up this form to add task.</DialogDescription>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        
        </DialogHeader>
        <Form {...form}>
  
  <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
    {/* ------title form------ */}
    <FormField
    control={ form.control }
    name="title"
    render={({ field }) => (
      <FormItem>
        <FormLabel >Title</FormLabel>
        <FormControl>
          <Input {...field} value={field.value || ""} />
        </FormControl>
      </FormItem>
    )}
  />

  {/* ----------Description from---------- */}

      <FormField
    control={ form.control }
    name="Description"
    render={({ field }) => (
      <FormItem>
        <FormLabel>Description</FormLabel>
        <FormControl>
          <Textarea {...field} value={field.value || ""} />
        </FormControl>
      </FormItem>
    )}
  />
  {/* ---------Due Date form ------------ */}
     <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        " pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            
            </FormItem>
          )}
        />

     

  {/* -----------Priority----------- */}
  

     <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your priority to set" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
    
            </FormItem>
          )}
        />

        {/* ------------------------------------ */}
         <FormField
          control={form.control}
          name="assignedTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Assign To</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your priority to set" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                        users.map ((user) => (
                          <SelectItem key={user.id} value={user.id}>{user.name}</SelectItem>
                        ))
                      }
                </SelectContent>
              </Select>
    
            </FormItem>
          )}
        />

        <DialogFooter>
          <Button  className="mt-5" type="submit">Save changes</Button>
        </DialogFooter>
         </form>
            </Form>
      </DialogContent>
    </Dialog>
  )
}



/* 
<div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
*/
