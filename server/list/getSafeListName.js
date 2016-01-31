/**
 * Created by eritikass on 31/01/16.
 */


Meteor.startup(function () {
    // code to run on server at startup


    Meteor.methods({
        'getSafeListName': function (listname) {

            var listnameSafe;

            try {
                // translit list name
                listnameSafe = Transliteration.slugify(listname, {lowercase: true, separator: '_'});
            } catch (e) {
                console.log('exception:Transliteration.slugify', e);
            }

            if (!listnameSafe) {
                // just use placholder name if list have no real name after translit
                listnameSafe = 'list';
            }

            // check if list name has used, if it has add some number end of it
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

            // return valid list name
            return listnameSafe;
        }
    });

});