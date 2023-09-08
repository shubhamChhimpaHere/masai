// fill in javascript code here

let form = document.querySelector('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.querySelector('#name').value;
    let id = document.querySelector('#employeeID').value;
    let department = document.querySelector('#department').value;
    let exp = document.querySelector('#exp').value;
    let email = document.querySelector('#email').value;
    let mbl = document.querySelector('#mbl').value;



    let role = 'Fresher';
    roles(exp);
    function roles(exp) {
        if (exp >= 5) {
            role = 'Senior';
        }
        else if (exp >= 2) {
            role = 'Junior';
        }

    }

    let data = [name, id, department, exp, email, mbl, role];

    let row = document.createElement('tr');
    let tbody = document.querySelector('tbody');


    data.forEach((ele) => {
        let td = document.createElement('td');
        td.innerText = ele;
        row.appendChild(td);
    })

    let delbtn = document.createElement('button');
    delbtn.innerText = 'delete';


    delbtn.addEventListener('click', () => {
        tbody.removeChild(row);
        color();
    })


    let deltd = document.createElement('td');
    deltd.appendChild(delbtn);


    row.appendChild(deltd);


    tbody.appendChild(row);

    color()
})

function color() {
    let flag = false;


    let row = document.querySelectorAll('tbody > tr');

    row.forEach((ele) => {
        if (flag) {
            ele.setAttribute('class', 'white')

        }
        else {
            ele.setAttribute('class', 'skyblue')

        }
        flag = !flag;

    })
}

