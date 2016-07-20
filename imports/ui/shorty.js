import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


import { Short } from '../api/shorty.js';

    Template.shorty.helpers({
      data() {
        var controller = Iron.Location.get();
        var fullAddress = controller.href.split("/new/");
        var address = fullAddress[1];
        var data;

            if(address){
                if(address % 1 === 0){
                    console.log(address);
                      //redirect

                   } else {
                       console.log(Short.findOne({webAddress: address}));
                    return Short.findOne({"webAddress": address});
                   }
            } else {
               //store new website

               return null;
            }
        }

    });
