/**
 * Created by eritikass on 07/02/16.
 */


Meteor.publish('lists', function(){
    var currentUser = this.userId;
    return Lists.find({ createdBy: currentUser });
});

Meteor.publish('todos', function(currentList){
    var currentUser = this.userId;

    console.log('currentList (1) ', currentList);
    console.log('Lists.findOne', { createdBy: currentUser, nameTranslit: currentList });

    var list = Lists.findOne({ createdBy: currentUser, nameTranslit: currentList });
    console.log('list', list);
    if (list && list._id) {
        currentList = list._id;
    }

    console.log('currentList (1) ', currentList);
    console.log('Todos.find', { createdBy: currentUser, listId: currentList });

    return Todos.find({ createdBy: currentUser, listId: currentList });
});