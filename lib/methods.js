//Short = new Mongo.Collection("short");
Meteor.methods({

  findWeb: function(shortAddress){
    return null;
    },

    getShort: function(){
       //var short = Short.find().fetch();
       console.log("getShort");
     return Short.find().fetch();

    }
});
