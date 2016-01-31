/**
 * Created by eritikass on 31/01/16.
 */


Template.todoItem.events({
    'click .delete-todo': function(event){
        event.preventDefault();
        var documentId = this._id;
        var confirm = window.confirm("Delete task?\n" + this.name);
        if (confirm) {
            Todos.remove({ _id: documentId });
        }
    },
    'keyup [name=todoItem]': function(event){
        var documentId = this._id;
        var todoItem = $.trim($(event.target).val());
        if(event.which == 13 || event.which == 27){
            console.log("You tapped the Return or Escape key");
            $(event.target).blur();
        } else {
            Todos.update({ _id: documentId }, {$set: {'name': todoItem}});
        }

        console.log(event.which);
    },
    'change [type=checkbox]': function(){
        Todos.update({ _id: this._id }, {$set: { completed: !this.completed }});
    }
});

Template.todoItem.helpers({
    'checked': function(){
        return this.completed ? 'checked' : '';
    }
});