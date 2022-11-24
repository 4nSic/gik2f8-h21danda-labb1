import {BookList} from "../Components/BookList.js";
import {getAll, getBook} from "../api/api.js";
import {BookInfo} from "../Components/BookInfo.js"

'use strict';
/* Vad ska vi göra här? */
let bookList =[];
window.addEventListener('load', () => {
    getAll().then((apiBooks) => bookList = apiBooks);
});

/*const searchInput = document.children[0].children[1].children[1].children[1];*/
const searchField = document.getElementById("searchField");
/*searchField.addEventListener("keyup", (e) => searchBokks(e.target.value));*/
searchField.addEventListener("keyup", (e) => 
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

export async function  ListItemEventLiatner(e){  
   
    e.type == "mouseenter" && renderBookInfo(await getBook(e.target.id));

    e.type == "mouseleave" && document.getElementById("bookDetail") && document.getElementById("bookDetail").remove();
}

function infoDivEventListner(e){
    let div = document.getElementById('bookDetail');
    if(div)
    {
        let left = e.pageX;
        let top = e.pageY +150;
        div.style.left =  left + 'px';
        div.style.top = top  + 'px';
    }
}


/*function searchBokks(searchTerm)*/
    /*
        Loppa igenom bookList
        Gämför titel med söktermen
        Om söktermen finns någonstans i titlen lägg till elementet i en ny lista (filterdList)
        Returnerar filterdList eller anropar renderBoookList
    */
    /*    
        if(searchTerm){
            let filterdList = bookList.filter(
            ({title, author}) =>(
                title.toLowerCase().indexOf(searchTerm.toLowerCase()) >=0  ||
                author.toLowerCase().indexOf(searchTerm.toLowerCase()) >=0)
            );
    
            renderBookList(filterdList);
            /*for (let index = 0; index < bookList.length; index++) {
                const title = bookList[index].title.toLowerCase();
                const author = bookList[index].author.toLowerCase();
                if (title.indexOf(searchTerm.toLowerCase()) >= 0 || author.indexOf(searchTerm.toLowerCase()) >=0) 
                {            
                    filterdList.push(bookList[index]);
                }
            }*/
    /*    }
    }
*/
function renderBookList(bookList){

    let existingElement = document.querySelector(".book-list");
    const root = document.getElementById("root");
    
    existingElement && existingElement.remove();

    if(bookList.length > 0)
    {
        root.insertAdjacentElement('beforeend', BookList(bookList));
        existingElement = document.querySelector(".book-list");
        existingElement.addEventListener("mousemove", infoDivEventListner);
       
        let liElements = existingElement.children
        for (let index = 0; index < liElements.length; index++) {
            liElements[index].addEventListener("mouseenter",ListItemEventLiatner);
            liElements[index].addEventListener("mouseleave",ListItemEventLiatner);
            
        }
    }  
}

export function renderBookInfo(book){

    let existingElement = document.getElementById("bookDetail");
    const root = document.getElementById("root");
    
    existingElement && existingElement.remove();

    root.insertAdjacentHTML('afterend', BookInfo(book));


}




