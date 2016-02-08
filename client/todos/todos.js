/**
 * Created by eritikass on 31/01/16.
 */

Template.todos.helpers({
    'todo': function(){
        console.log('todos.js')
        var currentList = this._id;
        console.log({listId: currentList, createdBy: Meteor.userId()})
        return Todos.find({listId: currentList, createdBy: Meteor.userId()}, {sort: {completed: 1, createdAt: -1}});
    }
});
