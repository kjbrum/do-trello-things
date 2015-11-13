/*************************************************
 *  JavaScript that gets injected
 *************************************************/



/*************************************************
 *  Event: Card is clicked
 *************************************************/
$('.list-card-details').click( function() {
    // If autohide checked
    setTimeout(function() {
        // Autohide items
        toggleCheckedItems('hide');
        addCheckedToggle('show');
    }, 1000);
});



/*************************************************
 *  Event: Card is refreshed
 *************************************************/
$(document).ready(function() {
    // If autohide checked
    if( $('.js-checklist-list').length ) {
        setTimeout(function() {
            // Autohide items
            toggleCheckedItems('hide');
            addCheckedToggle('show');
        }, 1000);
    }
});



/*************************************************
 *  Event: Button is clicked
 *************************************************/
$(document).on('click', '.js-tt-toggle-checked', function() {
    var action = $(this).data('action');
    toggleCheckedItems(action);
});



/*************************************************
 *  Helper Functions
 *************************************************/
// Toggle checked items
function toggleCheckedItems(action) {
    $('.js-'+action+'-checked-items').each( function() {
        this.click();
    });

    if( $('.js-tt-toggle-checked').length ) {
        var text = $('.js-tt-toggle-checked').html();
        if( action == 'show' ) {
            $('.js-tt-toggle-checked').data('action', 'hide').html(text.replace('Show', 'Hide'));
        } else {
            $('.js-tt-toggle-checked').data('action', 'show').html(text.replace('Hide', 'Show'));
        }
    }
};

// Add a button for toggling checked items
function addCheckedToggle(action) {
    $('.window-module.other-actions .u-clearfix').append('<a class="button-link js-tt-toggle-checked" title="Toggle the finished checklist items." data-action="'+action+'"><span class="icon-sm icon-subscribe"></span> '+toTitleCase(action)+' Checked</a>');
}

// Convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
