/**
 * Created by eritikass on 31/01/16.
 */

Template.addList.events({
    'submit form': function(event){
        event.preventDefault();
        var listName = $.trim($('[name=listName]').val());
        var currentUser = Meteor.userId();
        if (listName == '') {
            alert('Please define list name');
            return;
        }
        if (!currentUser) {
            return alert('not logged in');
        }

        Meteor.call('getSafeListName', listName, currentUser, function(err, nameTranslit) {
            //console.log('@', listName, nameTranslit);

            Meteor.call('createNewList', listName, nameTranslit, function(error, results){
                if(error){
                    console.log('error', error);
                    alert(error.reason);
                } else {
                    //Router.go('listPage', { _id: results });
                    Router.go('listPage', { nameTranslit: nameTranslit });
                }
            });
/*
            Lists.insert({
                name: listName,
                nameTranslit: nameTranslit,
                createdBy: currentUser
            }, function(error, result) {
                console.log(error, result);
                Router.go('listPage', { nameTranslit: nameTranslit });
            });
*/
        });

        $('[name=listName]').val('');
    }
});