let container = document.querySelector('.container');
let opacity = 0;
// createOneRow function to create a row of divs in a div

function createOneRow(column_num) {
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('row-container');

    for (let i = 0; i < column_num; i++) {
        let element = document.createElement('div');
        element.classList.add('element');

        rowContainer.appendChild(element);
    }

    return rowContainer;
}

// createMultiRow function to create a num of rows of divs

function createMultiRows(row_num, column_num) {
    for (let i = 0; i < row_num; i++) {
        let rowContainer = createOneRow(column_num);
        container.appendChild(rowContainer);
    }
}


createMultiRows(16, 16);



function changeColor(event) {
    if (!event.target.matches('.element')) {
        console.log('not an element');
        return;
    }

    let red = Math.round(Math.random() * 255) % 255;
    let green = Math.round(Math.random() * 255) % 255;
    let blue = Math.round(Math.random() * 255) % 255;
    event.target.style.backgroundColor = `rgb(${red} ${green} ${blue})`;

    if (opacity >= 1) {
        opacity = 0;
    }

    opacity += 0.1;
    Math.round(opacity * 10) / 10;
    event.target.style.opacity = opacity;
}

container.addEventListener("mouseover", changeColor);

let button = document.querySelector('button');

button.addEventListener('click', () => {
    let num = Number(prompt("How many number of squares do you want?"));
    container.remove();

    let body = document.querySelector('.center-canvas');
    container = document.createElement('div');
    body.appendChild(container);
    container.classList.add("container");
    container.addEventListener("mouseover", changeColor);

    createMultiRows(num, num);
})