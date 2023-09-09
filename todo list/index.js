let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

let arr = [];

form.addEventListener('submit', (e) => {
    tbody.innerHTML = ``;
    e.preventDefault();
    let task = document.querySelector('#task');
    let priority = document.querySelector('#priority');
    let obj = {};
    obj.task = task.value;
    obj.priority = priority.value;

    arr.push(obj);
    task.value = '';
    priority.value = '';

    arr.forEach((ele) => {
        tbody.innerHTML += `
        <td> ${ele.task} </td>
        <td> ${ele.priority} </td>
        <td> </td>
        `;

    })

})