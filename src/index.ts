import {v4 as uuidV4} from "uuid"

// console.log(uuidV4())

type Tasktype = {
  id: string ,
  title : string ,
  completed: boolean ,
  createdAt: Date
}


const list = document.querySelector<HTMLUListElement>('#list');
const input = document.querySelector<HTMLInputElement>('#new-task-title');
const form = document.querySelector<HTMLFormElement>('#new-task-form');



form?.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const newTask : Tasktype= {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

addListItem(newTask );
})


function addListItem(task : Tasktype) {
  const li = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox'; 
  label.append(checkbox,task.title)
  li.append(label)
  list?.appendChild(li);
  

}

