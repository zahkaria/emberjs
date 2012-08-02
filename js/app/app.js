// Create the application
window.FD = Ember.Application.create({
    // Metadata
    meta: {
        type: 'application',
        name: 'acsrf-mobile',
        major_version: 3,
        minor_version: 0,
        patch_version: 0,
        special_version: 'a',
        version: '3.0.0a',
        globals: ['FD']
    },

    loadTemplates: function(){
        var processData = function(data){
            $(data.responseText).filter('script[type="text/x-handlebars"]').each(function() {
                templateName = $(this).attr('data-template-name');
                Ember.TEMPLATES[templateName] = Ember.Handlebars.compile($(this).html());
            });
            FD.initialize();
        };

        $.ajax({
            url: '/js/app/template.js',
            success: function(data) {
                processData(data);
            },
            error: function(data) {               
                processData(data);
            }
        }); 
    },

    ready: function () {
        this._super();
        this.loadTemplates();
        log('hello dave');
    }
});