document.addEventListener('DOMContentLoaded', function () {
    const umbrella = document.getElementById('umbrella');
    const logoPreview = document.getElementById('logo-preview');
    const colorSwatches = document.querySelectorAll('.color-btn');
    const logoUpload = document.getElementById('logo-upload');
    const uploadButton = document.querySelector('.upload-button');
    const fileNameSpan = document.querySelector('.file-name');
    const uploadIcon = document.getElementById('upload-icon');

    colorSwatches.forEach(btn => {
        btn.addEventListener('click', function () {
            const color = this.getAttribute('data-color');
            umbrella.src = `${color}-umbrella.png`;
            document.body.style.backgroundColor = `Light${color}`;
        });
    });

    logoUpload.addEventListener('change', function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        if (file) {
            reader.onload = function (e) {
                logoPreview.src = e.target.result;
                fileNameSpan.textContent = file.name;
                uploadButton.classList.add('uploaded');
                uploadIcon.src = 'loader_icon.svg'; 
            };
            reader.readAsDataURL(file);
        } else {
            logoPreview.src = '';
            fileNameSpan.textContent = 'No file chosen';
            uploadButton.classList.remove('uploaded');
            uploadIcon.src = 'upload_icon.svg'; 
        }
    });
});
