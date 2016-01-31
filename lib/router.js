/**
 * Created by eritikass on 31/01/16.
 */

Router.route('/', {
    'name': 'home',
    'template': 'home',
});

Router.configure({
    layoutTemplate: 'main'
});

Router.route('/register');
Router.route('/login');
//Router.route('/todos');

Router.route('/list/:nameTranslit', {
    name: 'listPage',
    template: 'listPage',
    data: function() {
        var thisList = Lists.findOne(this.params.nameTranslit);
        if (thisList) {
            return thisList;
        }

        return Lists.findOne(this.params.nameTranslit);
    }
});