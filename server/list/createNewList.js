/*
 * Created by eritikass on 08/02/16.
 */

Meteor.methods({
    'createNewList': function(listName, nameTranslit){
        console.log('createNewList', listName, nameTranslit);
        // code goes here


        var defaultName = function(currentUser) {
            var nextLetter = 'A'
            var nextName = 'List ' + nextLetter;
            while (Lists.findOne({ name: nextName, createdBy: currentUser })) {
                nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
                nextName = 'List ' + nextLetter;
            }
            return nextName;
        };


        var currentUser = Meteor.userId();
        if(!currentUser){
            throw new Meteor.Error("not-logged-in", "You're not logged-in.");
        }

        if (!listName) {
            //throw new Meteor.Error("no-listname", "No listname provided");

            listName = defaultName(currentUser);
        }

        check(listName, String);

        Meteor.call('getSafeListName', nameTranslit?nameTranslit:listName, currentUser, function(err, nameTranslit) {
            var data = {
                name: listName,
                createdBy: currentUser,
                nameTranslit: nameTranslit,
            };

            Lists.insert(data);
        });

    }
});