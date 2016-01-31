/**
 * Created by eritikass on 31/01/16.
 */

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error) {
            if(error){
                alert(error.reason);
            } else {
                var currentRoute = Router.current().route.getName();

                if (currentRoute == "login") {
                    Router.go("home");
                }


            }
        });
    }
});