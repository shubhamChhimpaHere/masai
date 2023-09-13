// Create constructor functions for Book and Author to represent books and authors.
// The Author constructor should take name, birthYear, and nationality as arguments.
// The Book constructor should take title, author (an Author object), genre, and price as arguments.


let show = document.getElementById('show');

function Book(title, auther, genre, price) {
    this.title = title;
    this.auther = auther;
    this.price = price;
    this.genre = genre
}

function Author(name, birthyear, nationality) {
    this.name = name;
    this.birthyear = birthyear;
    this.nationality = nationality;
}


Book.prototype.getBookInfo = function() {
    console.log(this.title)
    console.log(this.auther.name)
    console.log(this.genre)
    console.log(this.price)
}



// let auther1  = new Author('shubham', 2000, 'India');
// let book1 = new Book('my book', auther1, 'anything', 150)


let form = document.querySelector('form');
let arr = [];

form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    let book = document.getElementById('book');
    let author = document.getElementById('author');
    let authordob = document.getElementById('authordob');
    let nationality = document.getElementById('nationality');
    let price = document.getElementById('price');
    let genre = document.getElementById('genre');


    let authorname = new Author(author.value, authordob.value, nationality.value);
    let bookname = new Book(book.value, authorname, genre.value, price.value)

    
    arr.push(bookname)
    // console.log(arr)

   form.reset();
   show.innerText = 'Show';
  

})

show.addEventListener('click', shows);



function shows() {

    let bottomSection = document.querySelector('.bottom-section');

    if(show.innerText == 'Show') {

        
        bottomSection.innerHTML = ``;
    
        arr.forEach((ele) => {
            bottomSection.innerHTML += `
            <div class="sections">
            <div>${ele.title}  <span class="fontlight">${ele.genre}</span> </div>
            <div>${ele.auther.name}  <span class="fontlight">  ${ele.auther.nationality}  ${ele.auther.birthyear}</span></div>
            <div>${ele.price}</div>
           </div>
            `;
        })

        show.innerText = 'Hide';
    } 
    else {
        bottomSection.innerHTML = ``;
        show.innerText = 'Show';
    }



}






// Implement methods in the Book prototype:
// getBookInfo - to print the book's title, author's name, genre, and price.
// Create an online bookstore by creating instances of Book and Author objects.
// Display the book details for each book in the bookstore.

