import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Short } from '../api/shorty.js';

    Template.shorty.onCreated(function () {
      this.state = new ReactiveDict();
      Meteor.subscribe('short');
    });

    Template.shorty.helpers({
      data() {
        var controller = Iron.Location.get();
        var fullAddress = controller.href.split("/new/");
        var address = fullAddress[1];
        var data;
            if(address === "start"){
                data = {"shortAddress": "0",
                         "webAddress": "https://www.google.com"};
                Meteor.call("writeData", data);
                return null;
            }
            if(address){
                if(address % 1 === 0){
                    //console.log(address);
                      //redirect
                      return Short.findOne({"shortAddress": address});
                  }
            if(Short.findOne({"webAddress": address})) {
                       return Short.findOne({"webAddress": address});
                   } else {
               //store new website

               var index = Short.find().count();
               if(index > 0){
               data = {"shortAddress": index.toString(),
                        "webAddress": address};
                 console.log("writing", data);

                //Short.insert(data);
               Meteor.call("writeData", data);
               return null;
           }
        }
        }
    }
    });
