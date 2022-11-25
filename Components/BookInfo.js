'use strict'
export const BookInfo = (book, left, top) =>{

let html =`
<div id="bookDetail" class="max-w-md w-full lg:max-w-80  lg:flex" style="position:absolute; top: ${top}px; left:${left}px; transform:translate(-50%,-50%);">
  <div class="h-50 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('${book.coverImage}')" "title="${book.title}">
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-lg mb-2">${book.title}</div>
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
`;
return html;
}

