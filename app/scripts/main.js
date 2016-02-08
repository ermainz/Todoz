'use strict';

function buildOkGlyphicon() {
  return $('<span>').addClass('glyphicon glyphicon-ok');
}

function buidlDoneButton() {
  let button = $('<button>').addClass('pull-right btn btn-xs btn-success hidden item-done-button');
  button.append(buildOkGlyphicon());
  return button;
}

function addItem(newItem) {
  let newListItem = $('<li>').addClass('list-group-item item-list-item').append(newItem);
  newListItem.append(buidlDoneButton());
  $('.item-list').prepend(newListItem);
}

let popoverOptions = {
  container: 'body',
  content: 'Please provide a value',
  placement: 'left'
};

$( document ).ready(function() {

    $('.add-item-button').on('click', function(ev) {
      ev.preventDefault();
      let newItem = $('.new-item-input').val();
      if (newItem === '') {
        $('.new-item-input').popover(popoverOptions);
        $('.new-item-input').popover('show');
        setTimeout(function() {
          $('.new-item-input').popover('destroy');
        }, 3000);
      } else {
        addItem(newItem);
        $('.new-item-input').val('');
      }
    });

    $('.item-list').on('mouseenter', '.item-list-item', function() {
      $(this).find('button').removeClass('hidden');
    });

    $('.item-list').on('mouseleave', '.item-list-item', function() {
      $(this).find('button').addClass('hidden');
    });

    $('.item-list').on('click', '.item-done-button', function() {
      $(this).closest('.item-list-item').remove();
    });

    // add seed items
    addItem("Shovel the snow");
    addItem("Read a book");
    addItem("Go to the store.");

});
