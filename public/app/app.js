const trs = document.querySelectorAll("tbody tr");
const form = document.querySelector(".taskForm");
const submitBtn = document.querySelector(".submit_btn_todo");

[...trs].forEach((tr) => {
  tr.addEventListener("click", (e) => {
    if (tr.id === e.target.dataset.id) {
      form.action = `/updateTask`;
      submitBtn.textContent = "Update";
      [...tr.children].forEach((td) => {
        if (td.className === "taskName") {
          form[0].value = td.textContent.trim();
        }
        if (td.className === "priority") {
          form[1].selectedIndex =
            td.textContent.trim() === "high"
              ? 1
              : td.textContent.trim() === "medium"
              ? 2
              : td.textContent.trim() === "low"
              ? 3
              : 0;
        }
        if (td.className === "date") {
          form[2].value = new Date(td.textContent).toISOString().slice(0, 10);
        }
        form[3].value = tr.id;
      });
    }
  });
});
