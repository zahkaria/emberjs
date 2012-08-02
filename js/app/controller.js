//var FD = FD || {};
// Define the main application controller. This is automatically picked up by
// the application and initialized.
FD.ApplicationController = Ember.Controller.extend({
    isHome: FD.Helper.stateFlag('home'),
    isArtworks: FD.Helper.stateFlag('artworks'),
    isAbout: FD.Helper.stateFlag('about')
});

FD.HomeController = Ember.Controller.extend();

FD.ArtworksController = Ember.Controller.extend();
// TODO: Add code to perform all interactions on the about view
FD.AboutController = Ember.Controller.extend();

FD.SectionsController = Ember.Controller.extend({
    isSectionA: FD.Helper.stateFlag('sectionA'),
    isSectionB: FD.Helper.stateFlag('sectionB'),
    isSectionC: FD.Helper.stateFlag('sectionC'),
    isSectionD: FD.Helper.stateFlag('sectionD')
});

FD.ItemsController = Ember.ArrayController.extend({
    init: function () {
        this._super();
        var items = [];
        for (var i = 0; i < 10; i++) {
            var description = $('<div/>').lorem({
                ptags: true
            }).html();
            items.push({
                id: i,
                title: 'Item ' + i,
                description: description
            });
        }
        this.set('content', Ember.A(items));
    }
});

FD.ItemController = Ember.ObjectController.extend();