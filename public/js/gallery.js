    function previewImage() {
    const file = document.getElementById('upload').files[0];
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

document.getElementById('upload').addEventListener('change', previewImage);