let gridItem = document.getElementsByClassName("grid-item");
let gridItemOverlay = document.getElementsByClassName('grid-item-overlay');

// TODO: I will implement the below at a later date with modal popups for extra info on each service
// for (let i = 0; i < gridItem.length; i++) {
//     gridItem[i].addEventListener('mouseover', function () {
//         gridItemOverlay[i].style.display = 'flex';
//     });

//     gridItem[i].addEventListener('mouseout', function () {
//         gridItemOverlay[i].style.display = 'none';
//     });
// }

let submitBtn = document.getElementById('submitBtn');
// Show results on submission here - redirect will take you/keep you at the Inquire section of the page to be able to view the results.
// Functionality will be in the JS

// add a dark theme option and do functionality in JS here

let db;
const request = indexedDB.open("MyTestDatabase");
request.onerror = (event) => {
  console.error("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = (event) => {
  db = event.target.result;
};
  