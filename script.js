
// // Get the buttons and the gallery container
// const threePerRowBtn = document.getElementById('three-per-row-btn');
// const onePerRowBtn = document.getElementById('one-per-row-btn');
// const gallery = document.getElementById('gallery');

// // Set the default view to three per row
// let perRow = 3;

// // Add click event listeners to the buttons
// threePerRowBtn.addEventListener('click', () => {
//   // Update the view to three per row
//   perRow = 3;
//   updateGallery();
// });

// onePerRowBtn.addEventListener('click', () => {
//   // Update the view to one per row
//   perRow = 1;
//   updateGallery();
// });

// // Function to update the gallery view based on the perRow value
// function updateGallery() {
//   // Remove any existing Bootstrap classes from the gallery
//   gallery.classList.remove('row-cols-1', 'row-cols-md-2', 'row-cols-md-3', 'row-cols-md-4', 'row-cols-md-5', 'row-cols-lg-6');

//   // Add the appropriate Bootstrap classes based on the perRow value
//   switch (perRow) {
//     case 1:
//       gallery.classList.add('row-cols-1');
//       break;
//     case 2:
//       gallery.classList.add('row-cols-md-2');
//       break;
//     case 3:
//       gallery.classList.add('row-cols-md-3');
//       break;
//     case 4:
//       gallery.classList.add('row-cols-md-4');
//       break;
//     case 5:
//       gallery.classList.add('row-cols-md-5');
//       break;
//     case 6:
//       gallery.classList.add('row-cols-lg-6');
//       break;
//     default:
//       gallery.classList.add('row-cols-md-3');
//       break;
//   }
// }

