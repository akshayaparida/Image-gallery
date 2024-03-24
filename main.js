const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg",

];

/* Declaring the alternative text for each image file */
const altTexts = [
  "Closeup of a blue human eye",
  "Another image description",
  "Yet another image description",
  
];

/* Looping through images */
for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  const filename = imageFilenames[i];
  newImage.setAttribute('src', 'images/' + filename);
  newImage.setAttribute('alt', altTexts[i]);
  thumbBar.appendChild(newImage);
  
  // Adding click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    displayedImage.setAttribute('src', 'images/' + filename);
    displayedImage.setAttribute('alt', altTexts[i]);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
