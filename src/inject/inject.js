/*************************************************
 *  JavaScript that gets injected
 *************************************************/


/*************************************************
 *  Event: Card is clicked
 *************************************************/
$('.list-card-details').click( function() {
    setTimeout(function() {
        // Hide items
        hideCheckedItems();

        // Add toggle button
        addCheckedToggle();
    }, 1000);
});



/*************************************************
 *  Event: Card is refreshed
 *************************************************/
$(document).ready(function() {
    if( $('.js-checklist-list').length ) {
        setTimeout(function() {
            // Hide items
            hideCheckedItems();

            // Add toggle button
            addCheckedToggle();
        }, 1000);
    }
});



/*************************************************
 *  Event: Button is clicked
 *************************************************/
// $(document).ready(function() {
    $(document).on('click', '.js-tt-toggle-checked', function() {
        console.log('toggle checked items');
    });
// });



/*************************************************
 *  Helper Functions
 *************************************************/
// Hide checked items
function hideCheckedItems() {
    $('.js-hide-checked-items').each( function() {
        this.click();
    });
};

// Add a button for toggling checked items
function addCheckedToggle() {
    $('.window-module.other-actions .u-clearfix').append('<a class="button-link js-tt-toggle-checked" title="Toggle the finished checklist items."><span class="icon-sm icon-subscribe"></span> Hide Checked</a>');
}
