//var FD = FD || {};

FD.ApplicationView = Ember.View.extend({
    templateName: 'application'
});

FD.HomeView = Ember.View.extend({
    templateName: 'home'
});

FD.ArtworksView = Ember.View.extend({
    templateName: 'artworks',
    people: [{ name: 'Yehuda' }, { name: 'Tom' }],
    // need to use a databinding event for this but in mean time will create mock object
    logoUrl: 'http://www.mycorp.com/images/logo.png'
});

FD.AboutView = Ember.View.extend({
    templateName: 'about',
    data: {
        url: 'hello',
        subheading: 'poo'
    }
});

FD.SectionsView = Ember.View.extend({
    templateName: 'sections'
});

FD.ItemsView = Ember.View.extend({
    templateName: 'items'
});

FD.ItemView = Ember.View.extend({
    templateName: 'item'
});


//HELPERS
// Handlebars helper to generate lorem ipsum text
Ember.Handlebars.registerHelper('lorem', function (options) {
    var opts = { ptags: true };
    if (options.hash.type){ opts.type = options.hash.type; }
    if (options.hash.amount) { opts.amount = options.hash.amount; }
    return new Handlebars.SafeString($('<div/>').lorem(opts).html());
});