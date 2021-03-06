/**
 * Created by eritikass on 31/01/16.
 */

Template.addTodo.events({
    'submit form': function(event){
        event.preventDefault();
        var todoName = $('[name="todoName"]').val();
        var currentUser = Meteor.userId();
        var currentList = this._id;
        console.log('add/todo', currentList, todoName);
        Todos.insert({
            name: todoName,
            completed: false,
            createdAt: new Date(),
            createdBy: currentUser,
            listId: currentList,
        });
        $('[name="todoName"]').val('');
    }
});
