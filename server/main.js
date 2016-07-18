Short = new Mongo.Collection("short");
if(Meteor.isServer) {
    Meteor.publish('short', function(){
        return Short.find({});
    });
}
