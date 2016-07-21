Router.configure({
    layoutTemplate:'layout'

});

Router.map(function(){
    this.route('about', {path: '/'});
    this.route('shorty', {path: '/new/:_address'});

    // Router.route('/new/:_id', function () {
    //   this.render('shorty', {
    //     data: function () {
    //       return Short.findOne({shortAddress: this.params._id});
    //     }
    //   });
    // });
// Router.route('/new/:_webAdd', function () {
//   this.render('shorty', {
//     data: function () {
//       return this.params._webAdd;
//     }
//   });
// });

});
