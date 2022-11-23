'use strict'
export const BookInfo = (book) =>{

let htmlOne =`
<div id="mainInfoDiv" class="  max-w-md rounded overflow-hidden shadow-lg absolute inset-0  z-10" bg-lime-500>
<img class="w-30" src="${book.coverImage}" alt="${book.title} cover image">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">"${book.title}"</div>
  <p class="text-gray-700 text-base">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
  </p>
</div>
<div class="px-6 pt-4 pb-2">
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Author :${book.author}</span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Title: ${book.title}</span>
  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Release date: ${book.releaseDate}</span>
</div>
</div>`

let htmlTwo =`
<div id="mainInfoDiv" class="max-w-md w-full lg:max-w-80  lg:flex" style=" position:absolute; top: 0px  ; left: 0px; transform:translate(-50%,-50%);">
  <div class="h-50 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('${book.coverImage}')" "title="${book.title}">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">${book.title}</div>
      <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
    </div>
    <div class="flex items-center">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">Author: ${book.author}</p>
        <p class="text-gray-600">Release date: ${book.releaseDate}</p>
      </div>
    </div>
  </div>
</div>
`

return htmlTwo;


}

