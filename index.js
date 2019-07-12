function editShoppingList() {
    // Watch for a new item to be submitted
    // Stop the default action of trying to submit info to the server.
    // Get the name of the item to be added to the list and append the html to the shopping-list <ul>.
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const itemName = $(this).find('#shopping-list-entry').val();
        $('.shopping-list').append(`<li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    });

    // Watch for a delete button to be clicked.
    // Use event delegation
    //      (So actually watch for any clicks in the shopping-list <ul> and then check if the click was on the
    //      delete button. If we don't use event delegation, we'll only be able to delete the original items and
    //      not the new ones that we add.)
    // Remove the <li> that the button lives in.
    $('.shopping-list').on('click', 'button.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });

    // Watch for a check button to be clicked.
    // Use event delegation again.
    // Toggle the item text between strike-through and regular by toggling the shopping-item__checked class on the shopping-item <span>.
    $('.shopping-list').on('click', 'button.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

$(editShoppingList);