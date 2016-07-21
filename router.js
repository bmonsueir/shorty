Router.configure({
    layoutTemplate:'layout'

});
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
//
import { Short } from '/imports/api/shorty.js';
Router.map(function(){
    this.route('about', {path: '/'});
    // this.route('shorty', {
    //     path: '/new/:_address',
    //     data: function(){
    //         console.log("router", this.params._address);
    //         var address = Short.findOne({shortAddress: this.params._address});
    //         if (address){
    //             // console.log("router",this.params._address, address.webAddress);
    //             // Router.go(address.webAddress);
    //             // this.response.writeHead(301, {Location: Router.url(address.webAddress)});
    //             // this.response.end();
    //             Router.url(address.webAddress);
    //         } else {
    //             console.log("no new router");
    //             //Router.go('shorty');
    //         }
    //         }
    //     }
    // );
});
if(Meteor.isServer){
    Router.route('/new/:_address', {where: 'server'}).get(function() {
      this.response.writeHead(302, {
        'Location': Short.findOne({shortAddress: this.params._address}).webAddress
      });
      this.response.end();
    });
}
