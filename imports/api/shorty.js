import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Short = new Mongo.Collection("short");

if (Meteor.isServer) {
    Meteor.publish('shorty', function tasksPublication() {
      return Short.find();
  });
}

Meteor.methods({
    "writeData" (shortAddress, webAddress){
        if(!Short.find({webAddress: webAddress})){
        Short.insert({webAddress: short.webAddress,
                 shortAddress: short.shortAddress});
                 return true;
             } else {
                 return false;
             }
    },
    "readData" (arg){
        var address;
        if(arg % 1 === 0){
            console.log("isInteger");
            return Short.findOne({"shortAddress": arg});
        } else {
            console.log("not integer", arg);
            address = Short.findOne({"webAddress": arg});
        }
        if(address) {
            return address;
        } else {
            return false;
        }
    }
});
