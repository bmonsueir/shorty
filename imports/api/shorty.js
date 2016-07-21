import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Short = new Mongo.Collection("short");

if (Meteor.isServer) {
    Meteor.publish("short", function tasksPublication() {
      return Short.find({});
  });
}

Meteor.methods({
    "writeData" (data){
        Short.insert(data);
                 return true;
    },
    "readData" (arg){
        if(arg % 1 === 0){
            console.log("isInteger");
            return Short.findOne({"shortAddress": arg});
        } else {
            return Short.findOne({webAddress: arg});
        }
    }
});
