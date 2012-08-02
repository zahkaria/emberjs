FD.Helper = {};
// A helper function to define routes for better code reuse
FD.Helper.sectionRoute = function (name) {
    return Ember.Route.extend({
        route: name,
        connectOutlets: function (router, context) {
            var SectionView = Ember.View.extend({
                templateName: 'section' + name
            });
            router.get('sectionsController').connectOutlet({
                viewClass: SectionView
            });
        }
    });
};

// A helper function to define a property used to render the navigation. Returns
// true if a state with the specified name is somewhere along the current route.
FD.Helper.stateFlag = function (name) {
    return Ember.computed(function () {
        var state = FD.router.currentState;
        while (state) {
            if (state.name === name) return true;
            state = state.get('parentState');
        }
        return false;
    }).property('Fishdog.router.currentState');
};