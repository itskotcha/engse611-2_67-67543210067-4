document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");
    todoItem.innerHTML = `
            <span><strong>${name}</strong> (${email}) - ${phone} | ${subject} <br> ${message}</span>
            <button class="delete">ลบ</button>`;

    todoItem
      .querySelector(".delete")
      .addEventListener("click", function () {todoItem.remove();});

    todoList.appendChild(todoItem);

    this.reset();
  });
