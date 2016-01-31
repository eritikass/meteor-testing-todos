/**
 * Created by eritikass on 31/01/16.
 */


Meteor.startup(function () {
    // code to run on server at startup


    Meteor.methods({
        'getSafeListName': function (listname) {

            // translit list name
            var listnameSafe = Transliteration.slugify(listname, {lowercase: true, separator: '_'});

            if (!listnameSafe) {
                // just use placholder name if list have no real name after translit
                listnameSafe = 'list';
            }

            // check if list name has used, if it has add some number end of it
            // return valid list name
            Lists.findOne({nameTranslit: listnameSafe})

            var listnameSafe_ORG = listnameSafe;
            var count = 0;
            while (true) {
                var listFound = Lists.findOne({nameTranslit: listnameSafe});
                if (!listFound) {
                    // no list found, success
                    break;
                }

                // get list name +1
                listnameSafe = listnameSafe_ORG + '_' + ( ++count );
             }

            return listnameSafe;
        }
    });

});