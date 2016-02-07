'use strict';

function buildOkGlyphicon() {
  return $('<span>').addClass('glyphicon glyphicon-ok');
}

function buidlDoneButton() {
  let button = $('<button>').addClass('pull-right btn btn-xs btn-success hidden');
  button.append(buildOkGlyphicon());
  return button;
}

function addItem(newItem) {
  let newListItem = $('<li>').addClass('list-group-item item-list-item').append(newItem);
  newListItem.append(buidlDoneButton());
  $('.item-list').prepend(newListItem);
}

$( document ).ready(function() {

    $('.add-item-button').on('click', function(ev) {
      ev.preventDefault();
      let newItem = $('.new-item-input').val();
      addItem(newItem);
    });

    $('.item-list').on('mouseenter', '.item-list-item', function() {
      $(this).find('button').removeClass('hidden');
    });

    $('.item-list').on('mouseleave', '.item-list-item', function() {
      $(this).find('button').addClass('hidden');
    });

    // add seed items
    addItem("Shovel the snow");
    addItem("Read a book");
    addItem("Go to the store.");

});
