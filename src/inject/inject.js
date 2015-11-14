/*************************************************
 *  JavaScript that gets injected
 *************************************************/



/*************************************************
 *  Event: Card is clicked
 *************************************************/

$('.list-card-details').click( function() {
    setTimeout(function() {
        // If autohide checked
        toggleCheckedItems('hide');

        // If add "toggle checked" button
        addCheckedToggle('show');

        // If add "copy checklist" button
        // addCopyChecklistButton();

        // If add "check/uncheck all" button
        // addCheckUncheckButton();
    }, 1000);
});



/*************************************************
 *  Event: Card is refreshed
 *************************************************/

$(document).ready(function() {
    if( $('.js-checklist-list').length ) {
        setTimeout(function() {
            // If autohide checked
            toggleCheckedItems('hide');

            // If add "toggle checked" button
            addCheckedToggle('show');

            // If add "copy checklist" button
            // addCopyChecklistButton();

            // If add "check/uncheck all" button
            // addCheckUncheckButton();
        }, 1000);
    }
});



/*************************************************
 *  Event: A button is clicked
 *************************************************/

// If add "toggle checked" button
$(document).on('click', '.js-tt-toggle-checked', function() {
    var action = $(this).data('action');
    toggleCheckedItems(action);
});

// If add "copy checklist" button
$(document).on('click', '.window-module-title-icon', function() {
    copyChecklistItems($(this));
});

// $(document).on('click', '.js-tt-toggle-checkuncheck', function() {
//     toggleCheckUncheckItems($(this));
// });



/*************************************************
 *  Helper Functions
 *************************************************/

// Toggle checked items
function toggleCheckedItems(action) {
    $('.js-'+action+'-checked-items').each( function() {
        this.click();
    });

    var $btn = $('.js-tt-toggle-checked');
    if( $btn.length ) {
        var text = $btn.html();
        if( action == 'show' ) {
            $btn.data('action', 'hide').html(text.replace('Show', 'Hide'));
        } else {
            $btn.data('action', 'show').html(text.replace('Hide', 'Show'));
        }
    }
};

// Add a button for toggling checked items
function addCheckedToggle(action) {
    $('.window-module.other-actions .u-clearfix').append('<a class="button-link js-tt-toggle-checked" title="Toggle the finished checklist items." data-action="'+action+'"><span class="icon-sm icon-subscribe"></span> '+toTitleCase(action)+' Checked</a>');
}

// Add check/uncheck all button
function addCopyChecklistButton() {
    $('.window-module.checklist-list .window-module-title-options').prepend('<a class="hide-on-edit quiet js-tt-copy-checklist" href="#">Copy Checklist</a>');
}

// Copy the checklist items
function copyChecklistItems(el) {
    // copy($(".checklist-item:not(.checklist-item-checked)").map(function() {
    //   var e = $(this),
    //       item = e.find(".checklist-item-details-text").text()

    //   if (e.hasClass("checklist-item-state-complete")) {
    //     item = item + " (DONE)"
    //   }

    //   return item
    // }).get().join("\n"));

    var $items = el.closest('.checklist-list');

    var input = document.createElement('textarea');
    document.body.appendChild(input);

    var message = '';
    // Build the message here
    $items.each( function() {
        if($(this).hasClass('checklist-item-state-complete')) {
            message += $(this).find('.checklist-item-details-text').text() + " (DONE) \n";
        } else {
            message += $(this).find('.checklist-item-details-text').text() + "\n";
        }
    });

    console.log(message);

    input.value = 'checklist will be put here!';
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();

    alert('Checklist copied!');
}





// Toggle checking/unchecking items
// function toggleCheckUncheckItems(el) {
//     var action = el.data('action');

//     // Grab all the element and check/uncheck

//     if( el.length ) {
//         var text = el.text();
//         if( action == 'check' ) {
//             el.data('action', 'uncheck').text(text.replace('Check', 'Uncheck'));
//         } else {
//             el.data('action', 'check').text(text.replace('Uncheck', 'Check'));
//         }
//     }
// };

// Add check/uncheck all button
// function addCheckUncheckButton() {
//     $('.window-module.checklist-list .window-module-title-options').prepend('<a class="hide-on-edit quiet js-tt-toggle-checkuncheck" href="#" data-action="check">Check All</a>');
//     console.log('add check/uncheck all button');
// }

// Convert a string to title case
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
