function showMessage( message, type ) {
    const alert = document.createElement("p");
    alert.textContent = message;
    alert.setAttribute("class", `${type === "error" ? "bg-red-500" : "bg-green-500"} text-white p-3 text-center`);
    document.querySelector(".messages").appendChild(alert);
    setTimeout(() => {
        alert.remove();
    }, 3000);
}
