/* client list view **/
window.ClientListView = Backbone.View.extend({
 
    tagName: 'ul',
 
    initialize: function() {
        this.model.bind( 'reset', this.render, this);        
        this.model.bind( 'add', this.appendNewClient, this);
    },
 
    render: function() {
        _.each( this.model.models, function( client ) {
            this.appendNewClient( client );
        }, this);
 
        return this.el;
    },
 
    appendNewClient: function( wine ) {
        this.$el.append(new ClientListItemView({model:client}).render());
    }
 
});
 
window.ClientListItemView = Backbone.View.extend({
 
    tagName: 'li',
 
    initialize: function() {
        this.template = _.template( $('#list-item-template').html() );
 
        this.model.bind( 'change', this.render(), this);
        this.model.bind( 'destroy', this.close(), this);
    },
 
    render: function() {
        this.$el.html( this.template( this.model.toJSON()));
 
        return this.el;
    }
 
});