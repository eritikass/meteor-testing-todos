/**
 * Created by eritikass on 31/01/16.
 */

Template.navigation.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
});