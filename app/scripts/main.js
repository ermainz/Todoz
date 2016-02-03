'use strict';

function buildOkGlyphicon() {
  return $('<span>').addClass('glyphicon').addClass('glyphicon-ok');
}

function buidlDoneButton() {
  let button = $('<button>').addClass('pull-right').addClass('btn').addClass('btn-xs').addClass('btn-success');
  button.append(buildOkGlyphicon());
  return button;
}

function addItem(newItem) {
  let newListItem = $('<li>').addClass('list-group-item').append(newItem);
  newListItem.append(buidlDoneButton());
  $('.item-list').prepend(newListItem);
}

$( document ).ready(function() {

    $('.add-item-button').on('click', function(ev) {
      ev.preventDefault();
      let newItem = $('.new-item-input').val();
      addItem(newItem);
    });

});
