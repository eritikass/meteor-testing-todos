/**
 * Created by eritikass on 31/01/16.
 */

Template.todos.helpers({
    'todo': function(){
        var currentList = this._id;
        return Todos.find({listId: currentList}, {sort: {completed: 1, createdAt: -1}});
    }
});
