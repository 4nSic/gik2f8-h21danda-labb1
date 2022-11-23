import {BookList} from "../Components/BookList.js";
import {getAll} from "../api/api.js";
import {BookInfo} from "../Components/BookInfo.js"
//import {BookInfo} from "../Components/BookInfo";
'use strict';
/* Vad ska vi göra här? */
let bookList =[];
window.addEventListener('load', () => {
    getAll().then((apiBooks) => bookList = apiBooks) 
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

export function ListItemEventLiatner(e){
    renderBookInfo(e.target.innerHTML);
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

    bookList.length > 0 && root.insertAdjacentElement('beforeend', BookList(bookList));

    /*if (existingElement) {
        existingElement.remove();
    }*/
        
    /*if (bookList.length > 0) {   
        const root = document.getElementById("root");
        root.insertAdjacentElement('beforeend', BookList(bookList));                    
    }*/
    
}

export function renderBookInfo(book){
    let info = book.split('-'); 
    const title = info[1].toLowerCase().trim();  
    const author = info[0].toLowerCase().trim();
    let targetIndex;
    for (let index = 0; index < bookList.length; index++) {
        if ((bookList[index].author.toLowerCase() === author) && (bookList[index].title.toLowerCase() === title) ){
            targetIndex = index;
            break;  
        }
    }

    let existingElement = document.getElementById("mainInfoDiv");
    const root = document.getElementById("root");
    
    existingElement && existingElement.remove();
    root.insertAdjacentHTML('afterend', BookInfo(bookList[targetIndex]));

}




