let gridItem = document.getElementsByClassName("grid-item");
let gridItemOverlay = document.getElementsByClassName('grid-item-overlay');

for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', function () {
        gridItemOverlay[i].style.display = 'flex';
    });

    gridItem[i].addEventListener('mouseout', function () {
        gridItemOverlay[i].style.display = 'none';
    });
}