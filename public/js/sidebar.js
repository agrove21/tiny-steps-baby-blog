document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('sidebar-mobile').classList.add('hidden');
});

document.getElementById('open-btn').addEventListener('click', function () {
    document.getElementById('sidebar-mobile').classList.remove('hidden');
});
