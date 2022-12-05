import {BookList} from "../Components/BookList.js";
import {getAll, getBook} from "../api/api.js";
import {BookDetail} from "../Components/BookDetail.js"

'use strict';
const yOffset = 165;
let bookList =[];

window.addEventListener('load', () => {
    getAll().then((apiBooks) => bookList = apiBooks);
    
});

window.addEventListener('mousemove',removeBookDetail);

document.getElementById("searchField").addEventListener("keyup", (e) => 
    renderBookList(
        bookList.filter(({title, author}) => {
            const searchTerm = e.target.value.toLowerCase();
            if(searchTerm){
            return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0}
            else{
                return [].length = 0;
            }
        })
    )
);

async function ListItemEventLiatner(e){  

    e.stopPropagation(); 
   
    e.type == "mouseenter" && renderBookInfo(await getBook(e.target.id), e.pageX, e.pageY +yOffset );

    e.type == "mouseleave" && removeBookDetail();

    if(e.type == "mousemove" && document.getElementById("bookDetail"))
    {   
        let div = document.getElementById('bookDetail');         
        let left = e.pageX;
        let top = e.pageY +yOffset;
        div.style.left =  left + 'px';
        div.style.top = top  + 'px';
    }
}

function removeBookDetail(){
    document.getElementById("bookDetail") && document.getElementById("bookDetail").remove();
}

function renderBookList(bookList){

    let existingElement = document.querySelector(".book-list");
    existingElement && existingElement.remove();

    if(bookList.length > 0)
    {
        const root = document.getElementById("root");
        root.insertAdjacentElement('beforeend', BookList(bookList));
        root.addEventListener("mouseover", removeBookDetail);
        existingElement = document.querySelector(".book-list");
       
        let liElements = existingElement.children
        for (let index = 0; index < liElements.length; index++) {
            liElements[index].addEventListener("mouseenter",ListItemEventLiatner);
            liElements[index].addEventListener("mouseleave",ListItemEventLiatner);
            liElements[index].addEventListener("mousemove", ListItemEventLiatner);     
        }
    }  
}

function renderBookInfo(book, left, top){
   
    const root = document.getElementById("root");
    
    removeBookDetail()

    root.insertAdjacentHTML('afterend', BookDetail(book, left, top));
    document.getElementById("bookDetail").addEventListener("mouseover",removeBookDetail);
}





