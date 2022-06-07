const form = document.getElementById('form');

const fullName = document.getElementById('fullName');

const email = document.getElementById('email');



form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("Submit");
})