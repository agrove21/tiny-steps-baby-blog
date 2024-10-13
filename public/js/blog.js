document.querySelector("#new-blog-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const entry = form.entry.value;

    fetch("/api/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            entry,
        }),
    })
        .then(function (response) {
            if (response.ok) {
                document.location.reload();
            } else {
                return response.json();
            }
        })
        .then(function (data) {
            if (data) {
                showMessage(data.message, "error");
            }
        })
        .catch(function (error) {
            showMessage(error.message, "error");
        });
});