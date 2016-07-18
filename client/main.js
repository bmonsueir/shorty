Short = new Mongo.Collection("short");
if (Meteor.isClient) {
    Meteor.startup(function() {
       Session.set('short', false);
    });

    Meteor.subscribe('short', function(){
       //Set the reactive session as true to indicate that the data have been loaded
       Session.set('short', true);
    });
     var controller = Iron.Location.get();
     var fullAddress = controller.href.split("/new/");
     var webAddress;
     var data = {};
     var index = 0;
     var short;
         //console.log(fullAddress);
     if(fullAddress.length > 1) {
         webAddress =  fullAddress[1];
     }

    //  if (Short.find().count() === 0) {
    //      Short.insert({webAddress: "https://www.google.com",
    //                  shortAddress: "0"});
    //     index++;
    //      }
    if(Session.get('short')){
     short = Short.find().fetch();
}

     //console.log("main", short);
     if(webAddress) {
         //console.log(webAddress);
         if(Number.isInteger(parseInt(webAddress))){
             //redirect
             short = Short.findOne({"shortAddress" : webAddress});
              console.log("short", short);
                if(short) {
                    console.log("hey");
                    window.open(webAddress);
                }
         } else {
            short = Short.findOne({"webAddress": webAddress});
            if(short){
                data = {webAddress: short.webAddress,
                        shortAddress: short.shortAddress};
                //console.log(data);
            }
         }
     }



}
