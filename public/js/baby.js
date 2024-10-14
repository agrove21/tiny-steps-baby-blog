document.querySelector(".save-baby-info").addEventListener("submit", function (event) {
    event.preventDefault();
    const form = event.target;
    const babyName = form.babyName.value;
    const babyBirthday = form.babyBirthday.value;

    fetch("/api/babies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            babyName,
            babyBirthday,
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