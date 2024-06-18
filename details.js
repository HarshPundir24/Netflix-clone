document.addEventListener('DOMContentLoaded', function() {
    const selectedContent = JSON.parse(localStorage.getItem('selectedContent'));
    if (selectedContent) {
        document.getElementById('details-title').textContent = selectedContent.title;
        document.getElementById('details-image').src = selectedContent.image;
        document.getElementById('details-description').textContent = 'Description of ' + selectedContent.title;
    } else {
        // Handle case where no content is selected
        document.getElementById('details-title').textContent = 'No Content Selected';
    }
});
