    function previewImage() {
    const file = document.getElementById('file-upload').files[0];
    const preview = document.getElementById('imagePreview');
    const link = document.getElementById('imageLink');
    const reader = new FileReader();
    const lightGalleryDiv = document.getElementById('lightgallery');

    reader.addEventListener('load', function() {
        // Display the uploaded image
        preview.src = reader.result;
    link.href = reader.result; // Link image to lightbox
    preview.style.display = 'block';
    lightGalleryDiv.style.display = 'block';

    // Reinitialize LightGallery (without a license key)
    lightGallery(lightGalleryDiv, {
        plugins: [lgZoom],
    speed: 500,
                });
            });

    if (file) {
        reader.readAsDataURL(file);
            }
        }

document.getElementById('file-upload').addEventListener('change', previewImage);

document.querySelector('.upload').addEventListener('click', async function(event) {
    console.log("testing upload");
    const file = document.getElementById('file-upload').files[0];
    
    if (!file) {
        showMessage('Please select an image to upload', 'error');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await fetch('/api/users/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const data = await response.json();
            showMessage(data.message, 'error');
            return;
        }

        const data = await response.json();
        showMessage('Image uploaded successfully', 'success');
        document.getElementById('file-upload').value = '';
        document.getElementById('imagePreview').style.display = 'none';
    } catch (err) {
        showMessage('Failed to upload image', 'error');
    }
});
