//selectors

const app = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneCounter = document.querySelector("#doneCounter");
const listCounter = document.querySelector("#listCounter");
const taskLists = document.querySelector("#taskLists");

//functions

document.addEventListener("DOMContentLoaded", () => {
  let createElementUi = (text) => {
    let list = document.createElement("div");
    list.classList.add("tasks");

    list.innerHTML = `
  <div id="list" class="border-2  mb-2 flex justify-around gap-1 border-black py-2 px-3">
  <div class="flex gap-1    items-center justify-center">
      <input   class="appearance-none taskCheck checked:bg-[url('../images/check-solid.svg')]  bg-no-repeat bg-center border-2 border-black w-5 h-5" type="checkbox">
      <div class=" task">
        <input class='px-2 py-1 check input-to-edit' value='${text}' disabled>
      </div>
  </div>

   <div class='flex gap-1'>
       <button class="border-2 task-edit-btn border-black p-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
            </svg>
            
        </button >
       <button class="border-2 task-del-btn border-black p-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
        
    </button>
   </div>
</div>
  `;

    let taskEditBtn = list.querySelector(".task-edit-btn");
    let taskDelBtn = list.querySelector(".task-del-btn");
    let task = list.querySelector(".task");
    let inputToEdit = list.querySelector(".input-to-edit");
    let taskCheck = list.querySelectorAll(".taskCheck");

    let doneNum = () => {
      doneCounter.innerText =
        document.querySelectorAll(`[type='checkbox']:checked`).length + "/";
    };

    taskCheck.forEach((el) => {
      el.addEventListener("change", () => {
        if (el.checked === true) {
          list.querySelector(".check").classList.add("line-through");
          doneNum();
        } else {
          list.querySelector(".check").classList.remove("line-through");
          doneNum();
        }
      });
    });

    let doneNumber = 0;

    let taskCount = () => {
      listCounter.innerText = document.querySelectorAll(".tasks").length + 1;
    };

    taskDelBtn.addEventListener("click", () => {
      if (confirm("Are you sure to delete?")) {
        list.remove();
        listCounter.innerText -= 1;
        doneNum();
      }
    });

    taskEditBtn.addEventListener("click", () => {
      inputToEdit.classList.add(
        "border-2",
        "border-black",
        "px-3",
        "border-box"
      );
      inputToEdit.toggleAttribute("disabled");
    });

    inputToEdit.addEventListener("blur", () => {
      inputToEdit.value.trim() &&
        inputToEdit.classList.remove("border-2", "border-black", "border-box");
      inputToEdit.toggleAttribute("disabled");
    });

    taskCount();

    textInput.value = null;

    return list;
  };

  // handlers
  let btnHandler = () => {
    if (textInput.value.trim()) {
      taskLists.append(createElementUi(textInput.value));
    }
  };

  //listener

  addBtn.addEventListener("click", btnHandler);
  textInput.addEventListener('keyup',(event)=>{
    if (event.key === 'Enter') {
      btnHandler()
    }
  })
});
