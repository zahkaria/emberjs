// Create the application
window.Fishdog = Ember.Application.create({
    // Metadata
    meta: {
        type: 'application',
        name: 'Fishdog',
        major_version: 3,
        minor_version: 0,
        patch_version: 0,
        special_version: 'a',
        version: '3.0.0a',
        globals: ['Fishdog','FD']
    },
    ready: function () {
        log('hello dave');
        this._super();
    }
});

var FD = FD || Fishdog || {};

$(function() {
  FD.initialize();
});