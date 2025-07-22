document.getElementById('fileInput').addEventListener('change', function () {
    const fileName = this.files.length > 0 ? this.files[0].name : 'none';
    document.getElementById('fileName').textContent = 'Selected file: ' + fileName;
});

async function submitForm(action) {
    const fileInput = document.getElementById('fileInput');
    const shift = document.getElementById('shiftValue').value;

    if (!fileInput.files.length) {
        alert("Please upload a file.");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);
    formData.append("shift", shift);

    const response = await fetch(`/${action}`, {
        method: "POST",
        body: formData
    });

    const result = await response.text();
    document.getElementById('output').textContent = result;
}
