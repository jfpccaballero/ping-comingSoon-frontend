let input = document.querySelector("input");
let form = document.querySelector("form");
let elem = document.createElement("div");
elem.className = "error";
elem.style.display = "none";
form.appendChild(elem);

input.oninvalid = (e) => {
    e.preventDefault();
    if(input.value === "") {
        elem.style.display = "block";
        elem.textContent = "Please provide a valid email";
        input.classList.add("invalid");
    } else {
        if (!e.target.validity.valid) {
            elem.style.display = "block";
            elem.textContent = "Looks like this is not an email";
            input.classList.add("invalid");
        }
    }
}

input.onclick = () => {
    if (elem.style.display === "block") {
        input.classList.remove("invalid");
        elem.style.display = "none";
    }
}