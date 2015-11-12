/**
 * Custom JS
 **/

var forEach = Array.prototype.forEach,
    $$ = document.querySelectorAll.bind(document);
forEach.call($$('.list-card-details'), function(el) {
    el.addEventListener('click', hideCheckedItems);
});

function hideCheckedItems() {
    setTimeout(function() {
        var items = document.getElementsByClassName('js-hide-checked-items');
        for(var i=0; i<items.length; i++) {
            items[i].click();
        }
    }, 1500);
};
