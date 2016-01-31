/**
 * Created by eritikass on 31/01/16.
 */

console.log('client');



Template.main.helpers({
    'getYear': function(){
        return (new Date()).getFullYear();
    }
});