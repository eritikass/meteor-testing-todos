/**
 * Created by eritikass on 31/01/16.
 */

Template.addList.events({
    'submit form': function(event){
        event.preventDefault();
        var listName = $.trim($('[name=listName]').val());
        if (listName == '') {
            alert('Please define list name');
            return;
        }
        console.log('#', listName);
        Meteor.call('getSafeListName', listName, function(err, nameTranslit) {
            console.log('@', listName, nameTranslit);
            Lists.insert({
                name: listName,
                nameTranslit: nameTranslit,
            }, function(error, result) {
                console.log(error, result);
                Router.go('listPage', { nameTranslit: nameTranslit });
            });
        });

        $('[name=listName]').val('');
    }
});