// Profile image change over time
document.addEventListener('DOMContentLoaded', function () {
    // //Array of image sources
    // var imgSources = ["ramin_cpe_openhouse.jpg", "ramin_cpe_openhouse_2.jpg"];

    // //Get the image element
    // var img = document.getElementById("self_image");

    // //Set an index to keep track of the current image
    // var currentImg = 0;

    // //Function to change the image
    // function changeImg() {
    //     img.style.clipPath = 'polygon(0 0, 0 100%, 100% 100%, 100% 0)';
    //     setTimeout(function () {
    //         img.src = "./resource/image/" + imgSources[currentImg];
    //         img.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'; // Reset the left property after changing the image
    //         currentImg = (currentImg + 1) % imgSources.length;
    //     }, 500); // Adjust the timeout to match the transition duration
    // }

    // //Set an interval to change the image every 10 seconds
    // var intervaldId = setInterval(changeImg, 2000);
    var carouselImages = document.getElementById("self_images");
    var imageWidth = document.querySelector(".self_image").clientWidth;
    var currentImageIndex = 0;

    function changeImg() {
        carouselImages.style.transition = "transform 0.4s ease-in-out";
        carouselImages.style.transform = `translateX(${-currentImageIndex * imageWidth}px)`;
        currentImageIndex = (currentImageIndex + 1) % carouselImages.children.length;

        if (currentImageIndex === 0) {
            setTimeout(() => {
                carouselImages.style.transition = "none";
                carouselImages.style.transform = 'translateX(0)';
            }, 500); // Adjust the timeout to match the transition duration
        }
    }
    // Change image every 3 seconds
    var intervalId = setInterval(changeImg, 3000);
});

