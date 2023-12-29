// Profile image change over time
document.addEventListener('DOMContentLoaded', function () {
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

    // Change URL based on scroll position
    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;
        var sections = [
            { id: 'home', offset: 0 },
            { id: 'introduction', offset: document.getElementById('home').offsetHeight },
            { id: 'skill', offset: document.getElementById('home').offsetHeight + document.getElementById('introduction').offsetHeight },
            { id: 'experience', offset: document.getElementById('home').offsetHeight + document.getElementById('introduction').offsetHeight + document.getElementById('skill').offsetHeight },
            { id: 'education', offset: document.getElementById('home').offsetHeight + document.getElementById('introduction').offsetHeight + document.getElementById('skill').offsetHeight + document.getElementById('experience').offsetHeight },
            { id: 'contact', offset: document.getElementById('home').offsetHeight + document.getElementById('introduction').offsetHeight + document.getElementById('skill').offsetHeight + document.getElementById('experience').offsetHeight + document.getElementById('education').offsetHeight }
        ]

        // Find the current section based on the scroll position
        var currentSection = sections.find(function (section, index) {
            var nextSection = sections[index + 1];
            return scrollPosition >= section.offset && (!nextSection || scrollPosition < nextSection.offset);
        });

        // If no current section is found, assume it's in the 'home' section
        if (!currentSection) {
            currentSection = sections[0];
        }

        // Update the URL with the current section's ID
        history.replaceState({}, '', '#' + currentSection.id);

        // Remove the 'navbox_active' class from all navboxes
        document.querySelectorAll('.navbox').forEach(function (navbox) {
            navbox.classList.remove('navbox_active');
        });

        // Add the 'navbox_active' class to the navbox corresponding to the current section
        var currentNavbox = document.querySelector('.navbox a[href="#' + currentSection.id + '"]').parentNode;
        if (currentNavbox) {
            currentNavbox.classList.add('navbox_active');
        }
    });

    window.scrollTo(0, 0);
});