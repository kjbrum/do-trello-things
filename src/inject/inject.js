/*************************************************
 *  JavaScript that gets injected
 *************************************************/


/*************************************************
 *  Autohide Stuff
 *************************************************/
// Autohide items when a card is refreshed
$('.list-card-details').click( function() {
    setTimeout(function() {
        hideCheckedItems();
    }, 1000);
});

// Autohide items when a card is clicked
$(document).ready(function() {
    if( $('.js-checklist-list').length ) {
        setTimeout(function() {
            hideCheckedItems();
        }, 1000);
    }
});

/*************************************************
 *  Helper Functions
 *************************************************/
// Hide checked items
function hideCheckedItems() {
    $('.js-hide-checked-items').each( function() {
        this.click();
    });
};
