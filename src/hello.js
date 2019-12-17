 
const variable = " and varasasdd"
// let newElement = document.createElement('h2');
// newElement.val
// const title = document.querySelector('h1')

export const hello = word => console.log(word, variable);
export const helloToBrows = word => {
    const container = document.querySelector('h1');
    let newElement = document.createElement('h2');
    newElement.textContent = word
    container.parentNode.appendChild(newElement);
};