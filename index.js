
// document.querySelectorAll('.add-element').forEach(button => {
//     button.addEventListener('click', () => {
//         const type = button.dataset.type;//takes type of data to add to canvas
//         addElement(type);
//     });
// });

// const canvas = document.getElementById('canvas');
// let selectedElement = null;

// canvas.addEventListener('mousedown', e => {
//     if (e.target.classList.contains('element')) {
//         selectedElement = e.target;//target element
//     }
// });

// canvas.addEventListener('mousemove', e => {
//     if (selectedElement) {
//         const rect = canvas.getBoundingClientRect();
//         // getBoundingClientRect() get position of canvas position related to view port
//         selectedElement.style.left = `${e.clientX - rect.left - selectedElement.offsetWidth / 2}px`;//left=> move horizontally
//         selectedElement.style.top = `${e.clientY - rect.top - selectedElement.offsetHeight / 2}px`;//top=>move vertically
// //   calculation checks that the center of the element stays under the mouse 
//     }
// });

// canvas.addEventListener('mouseup', () => {
//     selectedElement = null;
// });
// //Adding element
// function addElement(type) {
//     const element = document.createElement('div');
//     element.classList.add('element');
//     element.setAttribute('contenteditable', 'true');// it means you can edit the content

//     switch (type) {
//         case 'text':
//             element.textContent = 'Text';
//             break;
//         case 'image':
//             element.innerHTML = '<img src="https://via.placeholder.com/100" alt="Image" />';
//             break;
//         case 'button':
//             element.innerHTML = '<button>Button</button>';
//             break;
//     }

//     canvas.appendChild(element);
//     element.style.left = '50px';
//     element.style.top = '50px';
// }

// document.getElementById('export').addEventListener('click', () => {
//     exportHTMLCSS();
// });

// function exportHTMLCSS() {
//     const elements = canvas.querySelectorAll('.element');
//     let htmlContent = '';
//     let cssContent = `<style>\n`;

//     elements.forEach((element, index) => {
//         const rect = element.getBoundingClientRect();
//         const canvasRect = canvas.getBoundingClientRect();
//         const left = rect.left - canvasRect.left;
//         const top = rect.top - canvasRect.top;
// //This  is part of a loop that goes through each element on the canvas and calculates its position relative to the canvas. 
//         switch (element.innerHTML) {
//             case 'Text':
//                 htmlContent += `<div id="element-${index}" class="element">Text</div>\n`;
//                 break;
//             case '<img src="https://via.placeholder.com/100" alt="Image">':
//                 htmlContent += `<div id="element-${index}" class="element"><img src="https://via.placeholder.com/100" alt="Image"></div>\n`;
//                 break;
//             case '<button>Button</button>':
//                 htmlContent += `<div id="element-${index}" class="element"><button>Button</button></div>\n`;
//                 break;
//         }

//         cssContent += `#element-${index} {\n`;
//         cssContent += `  position: absolute;\n`;
//         cssContent += `  left: ${left}px;\n`;
//         cssContent += `  top: ${top}px;\n`;
//         cssContent += `}\n`;
//     });

//     cssContent += `</style>\n`;

//     document.getElementById('output').value = htmlContent + cssContent;
// }

document.querySelectorAll('.add-element').forEach(button => {
    button.addEventListener('click', () => {
        const type = button.dataset.type;
        addElement(type);
    });
});

const canvas = document.getElementById('canvas');
let selectedElement = null;

canvas.addEventListener('mousedown', e => {
    if (e.target.classList.contains('element')) {
        selectedElement = e.target;
    }
});

canvas.addEventListener('mousemove', e => {
    if (selectedElement) {
        const rect = canvas.getBoundingClientRect();
        selectedElement.style.left = `${e.clientX - rect.left - selectedElement.offsetWidth / 2}px`;
        selectedElement.style.top = `${e.clientY - rect.top - selectedElement.offsetHeight / 2}px`;
    }
});

canvas.addEventListener('mouseup', () => {
    selectedElement = null;
});

function addElement(type) {
    const element = document.createElement('div');
    element.classList.add('element');
    element.setAttribute('contenteditable', 'true');

    switch (type) {
        case 'text':
            element.textContent = 'Text';
            break;
        case 'heading':
            element.innerHTML = `<h1>Heading</h1>`;
            break;
        case 'image':
            element.innerHTML = '<img src="https://via.placeholder.com/100" alt="Image" />';
            break;
        case 'button':
            element.innerHTML = '<button>Button</button>';
            break;
       
    }

    element.style.color = document.getElementById('textColor').value;
    canvas.appendChild(element);
    element.style.left = '50px';
    element.style.top = '50px';
 
}

document.getElementById('export').addEventListener('click', () => {
    exportHTMLCSS();
});

function exportHTMLCSS() {
    const elements = canvas.querySelectorAll('.element');
    let htmlContent = '';
    let cssContent = `<style>\n`;

    elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        const left = rect.left - canvasRect.left;
        const top = rect.top - canvasRect.top;

        htmlContent += `<div id="element-${index}" class="element">${element.innerHTML}</div>\n`;
        cssContent += `#element-${index} {\n`;
        cssContent += `  position: absolute;\n`;
        cssContent += `  left: ${left}px;\n`;
        cssContent += `  top: ${top}px;\n`;
        cssContent += `  color: ${element.style.color};\n`;
        cssContent += `}\n`;
    });

    cssContent += `</style>\n`;

    document.getElementById('output').value = htmlContent + cssContent;
}

function changeBackgroundColor() {
    const colors = ['red', 'blue', 'green', 'purple'];
    const currentColor = canvas.style.backgroundColor;
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    canvas.style.backgroundColor = colors[nextIndex];
}

// canvas.style.backgroundColor=document.getElementById('bg').value;
document.getElementById('bg').addEventListener('click',()=>{
    canvas.style.backgroundColor=document.getElementById('bg').value;

})