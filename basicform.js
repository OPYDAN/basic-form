function handleSubmit(event) {
    event.preventDefault(); // Prevent actual form submission
    document.getElementById("form-heading").innerText = "Welcome";
    alert("You clicked this button");
}