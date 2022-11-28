const url = 'https://gik2f8-labs.herokuapp.com/books';

export async function getAll(){
    const result = await fetch(url).then((result) => result.json());
    
    return result;
}

export async function getBook(bookId){
    const result = await fetch(url+`/${bookId}`).then((result) => result.json());

    return result;
}