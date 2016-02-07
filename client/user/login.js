/**
 * Created by eritikass on 31/01/16.
 */

Template.login.events({
    'submit form': function (event) {
        event.preventDefault();


        /*
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
         */
    }
});

Template.login.onCreated(function () {
    console.log("The 'login' template was just created.", this);
});

Template.login.onRendered(function () {
    console.log("The 'login' template was just rendered.");

    var validator = $('.login').validate({
        submitHandler: function(event){
            console.log("You just submitted the 'login' form.");

            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            Meteor.loginWithPassword(email, password, function(error) {
                if(error){
                    console.log('error', error);
                    if(error.reason == "User not found"){
                        validator.showErrors({
                            email: error.reason
                        });
                    }
                    if(error.reason == "Incorrect password"){
                        validator.showErrors({
                            password: error.reason
                        });
                    }
                } else {
                    var currentRoute = Router.current().route.getName();

                    if (currentRoute == "login") {
                        Router.go("home");
                    }


                }
            });


        }
    });


});

Template.login.onDestroyed(function () {
    console.log("The 'login' template was just destroyed.");
});