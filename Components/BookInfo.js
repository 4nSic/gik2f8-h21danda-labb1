'use strict'
export const BookInfo = (book) =>{

let html =`<div id="mainInfoDiv" class="max-w-sm rounded overflow-hidden shadow-lg">
<img class="w-full" src="${book.coverImage}" alt="${book.title} cover image">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">"${book.title}"</div>
  <p class="text-gray-700 text-base">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  </p>
</div>
<div class="px-6 pt-4 pb-2">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Author :${book.author}</span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Title${book.title}</span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ReleaseDate${book.releaseDate}</span>
</div>
</div>`

return html;


}