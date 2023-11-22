const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const largeImage = document.getElementById('largeImage');
const caption = document.getElementById('caption');

//  image data 
const imageData = [
    { src: 'IMG/d1.jpg', alt: 'Image 1', caption: 'Animals in Dali' },
    { src: 'IMG/d2.jpg', alt: 'Image 2', caption: 'Tourists of Dali' },
    { src: 'IMG/d3.jpg', alt: 'Image 3', caption: 'Lakeview of Erhai' },
    { src: 'IMG/d4.jpg', alt: 'Image 4', caption: 'Sunrise in Yuloog Snow Mountain ' },
    { src: 'IMG/d5.jpg', alt: 'Image 5', caption: 'Scenery of Erhai Lake' },
    { src: 'IMG/d6.jpg', alt: 'Image 6', caption: 'Boating on Erhai Lake' },
    { src: 'IMG/d7.jpg', alt: 'Image 7', caption: 'Ancient Town in Dali beside Erhai lake' },
    { src: 'IMG/d8.jpg', alt: 'Image 8', caption: 'Tourism Boat on Erhai Lake ' },
    { src: 'IMG/d9.jpg', alt: 'Image 9', caption: 'Traditional Furniture in Dali' },
    { src: 'IMG/d10.jpg', alt: 'Image 10', caption: 'Farmers Working in Dali' },
    { src: 'IMG/d11.jpg', alt: 'Image 11', caption: 'Traditional architecture in Dali' },
    { src: 'IMG/d12.jpg', alt: 'Image 12', caption: 'Sunrise in Dali City' }
];

// add images to the gallery
imageData.forEach((imgData, index) => {
    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.setAttribute('data-index', index); // Custom data attribute to store index
    gallery.appendChild(img);
});

// click event
gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = event.target.getAttribute('data-index');
        showOverlay(index);
    }
});

// Show overlay with large image and caption
function showOverlay(index) {
    const imgData = imageData[index];
    largeImage.src = imgData.src;
    caption.textContent = imgData.caption;
    overlay.style.display = 'flex';

// Clicking on the large image hides the overlay
    largeImage.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}
