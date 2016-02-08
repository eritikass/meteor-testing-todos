/**
 * Created by eritikass on 31/01/16.
 */

Template.lists.helpers({
    'list': function(){
        return Lists.find({createdBy: Meteor.userId()}, {sort: {name: 1}}).map(function(item) {
            if (!item.nameTranslit) {
                item.nameTranslit = item._id;
            }
            return item;
        })
    }
});

Template.lists.onCreated(function () {
    this.subscribe('lists');
});