/* header view **/
window.HeaderView = Backbone.View.extend({
 
    initialize: function() {
        this.template = _.template( $('#header-template').html() );
    },
 
    render: function() {
        this.$el.html( this.template() );
 
        return this.el;
    },
 
    events: {
        "click .new" : "newClient"
    },
 
    newWine: function() {
        app.navigate('clients/new', true);
 
        return false;
    }
});