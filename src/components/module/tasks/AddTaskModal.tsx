import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export function AddTaskModal() {

    const form = useForm();

    const onSubmit = ( data ) => {
        console.log(data);
    }


  return (
    <Dialog>
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
    control={ form.control }
    name="dueDate"
    render={({ field }) => (
      <FormItem>
        <FormLabel >Due Date</FormLabel>
        <FormControl>
          <Input {...field} value={field.value || ""} />
        </FormControl>
      </FormItem>
    )}
  />

  {/* -----------Priority----------- */}
    <FormField
    control={ form.control }
    name="priority"
    render={({ field }) => (
      <FormItem>
        <FormLabel >Priority</FormLabel>
        <FormControl>
           <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
        </FormControl>
      </FormItem>
    )}
  />

        <DialogFooter>
          <Button type="submit">Save changes</Button>
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
