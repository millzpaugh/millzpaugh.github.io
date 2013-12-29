console.log("what up!"); 

var app = app || {};

app.Router = Backbone.Router.extend({
  app.Router = Backbone.Router.extend({
    routes: {
      '': index 
    },

    initialize:function(){
      this.topmenu = new app.TopMenu([
        new app.TopMenu({title:'Contact'}), 
        new app.TopMenu({title: 'Skills'}),
        new app.TopMenu({title: 'Projects'}),
        new app.TopMenu({title: 'Home'})
      ]); 
    }, 

    index: function(){
      app.topMenu = new app.TopMenuListView({collection: this.topmenu}); 
      app.topMenu.render(); 
    }
})