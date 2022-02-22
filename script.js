
window.addEventListener("load", () => {
    const form = document.querySelector("#task-form");
    const input = document.querySelector("#new-task");
    const tasks = document.querySelector("#tasks");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        var task = input.value;

        if (!task) {
            alert("Please add a task");
            return;
        }
        
        const taskelement = document.createElement("div");
        taskelement.classList.add("task");

        const elementcontent = document.createElement("div");
        elementcontent.classList.add("content");

        taskelement.appendChild(elementcontent);

        const inputask = document.createElement("input");
        inputask.classList.add("task-text");
        inputask.type = "text";
        inputask.value =task;
        inputask.setAttribute("readonly", "readonly");

        elementcontent.appendChild(inputask);

        const taskbuttons = document.createElement("div");
        taskbuttons.classList.add("buttons");

        const check = document.createElement("button");
        check.classList.add("check");
        check.innerHTML = "Check";
        
        const edit = document.createElement("button");
        edit.classList.add("pen");
        edit.innerHTML = "Edit";
        const dlt = document.createElement("button");
        dlt.classList.add("trash");
        dlt.innerHTML = "Delete";

        taskbuttons.appendChild(check);
        taskbuttons.appendChild(edit);
        taskbuttons.appendChild(dlt);

        taskelement.appendChild(taskbuttons);

        tasks.appendChild(taskelement);

        input.value = "";

        edit.addEventListener("click", () => {
            if (edit.innerText.toLowerCase() == "edit"){
                inputask.removeAttribute("readonly");
                inputask.focus();
                edit.innerText = "Save";
            } else {
                inputask.setAttribute("readonly", "readonly");
                edit.innerText = "Edit";
            }
        });

        dlt.addEventListener("click", () =>{
            tasks.removeChild(taskelement);
        });
        
        check.addEventListener("click", () =>{
            tasks.removeChild(taskelement);
            const done = document.querySelector("#don");
            const donelement = document.createElement("div");
            donelement.classList.add("done");
            const donecontent = document.createElement("div");
            donecontent.classList.add("done-content");
            donelement.appendChild(donecontent);
            inputask.classList.add("done-text");
            donecontent.appendChild(inputask);
            const donebuttons = document.createElement("div");
            donebuttons.classList.add("done-buttons");
            const donelogo = document.createElement("text");
            donelogo.classList.add("checked");
            donelogo.innerHTML = "Done!";
            const dlt = document.createElement("button");
            dlt.classList.add("trash");
            dlt.innerHTML = "Delete";
            donebuttons.appendChild(donelogo);
            donebuttons.appendChild(dlt);
            donelement.appendChild(donebuttons);
            done.appendChild(donelement);
            dlt.addEventListener("click", () =>{
                done.removeChild(donelement);
            });
        });
    })
})