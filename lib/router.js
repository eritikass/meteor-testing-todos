/**
 * Created by eritikass on 31/01/16.
 */

Router.route('/', {
    'name': 'home',
    'template': 'home',
//    waitOn: function() {
//        return Meteor.subscribe('lists');
//    }
});

Router.configure({
    layoutTemplate: 'main',
    loadingTemplate: 'loading',
});

Router.route('/register');
Router.route('/login');
//Router.route('/todos');

Router.route('/list/:nameTranslit', {
    name: 'listPage',
    template: 'listPage',
    data: function() {
        var currentList = this.params.nameTranslit;
        var currentUser = Meteor.userId();
        var thisList = Lists.findOne({'nameTranslit': currentList, createdBy: currentUser});
        if (thisList) {
            return thisList;
        }

        return Lists.findOne({ _id: currentList, createdBy: currentUser });
    },
    onRun: function(){
        console.log("You triggered 'onRun' for 'listPage' route.");
        this.next();
    },
    onRerun: function(){
        console.log("You triggered 'onRerun' for 'listPage' route.");
    },
    onBeforeAction: function(){
        console.log("You triggered 'onBeforeAction' for 'listPage' route.");
        var currentUser = Meteor.userId();
        if(currentUser){
            this.next();
        } else {
            this.render("login");
        }
    },
  //  onAfterAction: function(){
  //      console.log("You triggered 'onAfterAction' for 'listPage' route.");
  //  },
    onStop: function(){
        console.log("You triggered 'onStop' for 'listPage' route.");
    },
    waitOn: function(){
        console.log('waitOn(todos): ' + this.params.nameTranslit);
        var currentList = this.params.nameTranslit;
        //return [Meteor.subscribe('lists'), Meteor.subscribe('todos', currentList)];
        return Meteor.subscribe('todos', currentList);
    }
});


Router.route('/:arg1/:arg2?/:arg3?', {
    name: 'testdyn',
    template: 'testdyn',
    data: function() {
        return this.params;
    }
});