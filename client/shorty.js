Template.shorty.helpers({
  data: function() {
    var controller = Iron.Location.get();
    var fullAddress = controller.href.split("/new/");
    var webAddress = fullAddress[1];
    var data = {};
    var short;
    console.log(fullAddress);
    short = Short.findOne({"webAddress": webAddress});
    //console.log("shorty",Meteor.call("getShort"));
    console.log("shorty", Short.find().fetch());
    if(short){
       data = {webAddress: short.webAddress,
               shortAddress: short.shortAddress};
       console.log("helper",data);
       return data ;
    } else {
       //store new website
       return null;
    }
  }
});
