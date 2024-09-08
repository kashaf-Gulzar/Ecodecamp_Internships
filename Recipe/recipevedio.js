
document.addEventListener('DOMContentLoaded', function () {
    const videoItems = document.querySelectorAll('.video-playlist li');
    const mainVideo = document.getElementById('mainVideo');
    
    videoItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove 'active' class from all items
            videoItems.forEach(el => el.classList.remove('active'));
            // Add 'active' class to the clicked item
            item.classList.add('active');
            // Change the src attribute of the iframe to the selected video
            mainVideo.src = item.getAttribute('data-video');
        });
    });
});
/*-----------------*/
