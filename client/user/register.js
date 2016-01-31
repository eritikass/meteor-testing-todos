/**
 * Created by eritikass on 31/01/16.
 */

Template.register.events({
    'submit form': function () {
        event.preventDefault();
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

    }
});