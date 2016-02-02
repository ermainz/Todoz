'use strict';

function addItem(newItem) {
  let newListItem = $('<li>').addClass('list-group-item').append(newItem);
  $('.item-list').prepend(newListItem);
}

$( document ).ready(function() {

    $('.add-item-button').on('click', function(ev) {
      ev.preventDefault();
      let newItem = $('.new-item-input').val();
      addItem(newItem);
    });

});
