/**
 * Created by eritikass on 31/01/16.
 */


Meteor.startup(function () {
    // code to run on server at startup


    Meteor.methods({
        /**
         * get safe unique translited listname
         *
         * @param {string} listname
         * @param {string} userId
         * @returns {string}
         */
        'getSafeListName': function (listname, userId) {

            var listNameSafe;

            try {
                // translit list name
                listNameSafe = Transliteration.slugify(listname, {lowercase: true, separator: '_'});
            } catch (e) {
                console.log('exception:Transliteration.slugify', e);
            }

            if (!listNameSafe) {
                // just use placholder name if list have no real name after translit
                listNameSafe = 'list';
            }

            // check if list name has used, if it has add some number end of it
            var listNameSafe_ORG = listNameSafe;
            var count = 0;
            while (true) {
                var args = {nameTranslit: listNameSafe};
                if (userId) {
                    args.createdBy = userId;
                }
                if (!Lists.findOne(args)) {
                    // no list found, success - name fine to use
                    break;
                }

                // get list name +1
                listNameSafe = listNameSafe_ORG + '_' + ( ++count );
            }

            // return valid list name
            return listNameSafe;
        }
    });

});