/* client details view **/
window.ClientView = Backbone.View.extend({
 
    initialize: function() {
        this.template = _.template( $('#details-template').html() );
 
        this.model.bind( 'change', this.render, this);
    },
 
    render: function() {
        this.$el.html( this.template(this.model.toJSON()));
 
        return this.el;
    },
 
    events: {
        'click .save': 'saveClient',
        'click .delete': 'deleteClient',
    },
 
    saveClient: function() {
        this.model.set({
			
            id: $('#id').val(),
            forname: $('#forname').val(),
            surname: $('#surname').val(),
            title: $('#title').val(),
            country: $('#country').val(),
            company: $('#company').val(),
			project: $('#project').val(),
			email: $('#email').val()
        });
 
        if ( this.model.isNew() ) {
            var self = this;
 
            app.wineList.create( this.model, {
                success: function() {
                    app.navigate( 'clients/' + self.model.id, false);
                }
            });
 
        } else {
            this.model.save();
        }
 
        return false;
    },
 
    deleteClient = function() {
        this.model.destroy({
            success: function() {
                alert('Client was deleted successfully');
                window.history.back();
            }
        });
 
        return false;
    }
 
});