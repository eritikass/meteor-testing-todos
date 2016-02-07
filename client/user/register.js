/**
 * Created by eritikass on 31/01/16.
 */

Template.register.events({
    'submit form': function () {
        event.preventDefault();
/*
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Accounts.createUser({
            'email': email,
            'password': password
        }, function (err) {
            if (err) {
                alert(err.reason); // Output error if registration fails
            } else {
                Router.go("home"); // Redirect user if registration succeeds
            }
        });
*/
    }
});



Template.register.onRendered(function(){
    var validator = $('.register').validate({
        submitHandler: function(event){
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            Accounts.createUser({
                email: email,
                password: password
            }, function(error){
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
                    if(error.reason == "Email already exists."){
                        validator.showErrors({
                            email: "That email already belongs to a registered user."
                        });
                    }
                } else {
                    Router.go("home");
                }
            });
        }
    });
});