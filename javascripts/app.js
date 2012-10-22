/**to do app**/
/* Setup clients model */

window.Client = Backbone.Model.extend({
	
	urlRoot: "client/",
	
	defaults: {
		"id" : null,
		"forname" : "",
		"surname" : "",
		"Business title" : "",
		"country" : "",
		"company" : "",
		"project" : "",
		"email" : "",
		"picture" : ""
	}
	
});


window.clientCollection = Backbone.Collection.extend({

	model: Client,
	url: "client/"
	
});


/**view for closing and removing templates**/
Backbone.View.prototype.close = function() {
	console.log('Closing view' + this);
	
	if (this.beforeClose) {
		this.beforeClose();
	}
	
	this.remove();
	this.unbind();
}