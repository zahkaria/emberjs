function sectionRoute (name) {
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
}

FD.Router = Ember.Router.extend({
    root: Ember.Route.extend({
      doHome: function(router, event) {
        router.transitionTo('home');
      },
      doSections: function(router, event) {
        router.transitionTo('sections.index');
      },
      doItems: function(router, event) {
        router.transitionTo('items.index');
      },
      home: Ember.Route.extend({
        route: '/',
        connectOutlets: function(router, event) {
          router.get('applicationController').connectOutlet('home');
        }
      }),
      sections: Ember.Route.extend({
        route: '/sections',
        connectOutlets: function(router, event) {
          router.get('applicationController').connectOutlet('sections');
        },
        index: Ember.Route.extend({
          route: '/'
        }),
        doSectionA: function(router, event) { router.transitionTo('sections.sectionA'); },
        sectionA: sectionRoute('A'),
        doSectionB: function(router, event) { router.transitionTo('sections.sectionB'); },
        sectionB: sectionRoute('B'),
        doSectionC: function(router, event) { router.transitionTo('sections.sectionC'); },
        sectionC: sectionRoute('C'),
        doSectionD: function(router, event) { router.transitionTo('sections.sectionD'); },
        sectionD: sectionRoute('D')
      }),
      items: Ember.Route.extend({
        route: '/items',
        index: Ember.Route.extend({
          route: '/',
          connectOutlets: function(router, context) {
            router.get('applicationController').connectOutlet('items');
          }
        }),
        item: Ember.Route.extend({
          route: '/:item_id',
          connectOutlets: function(router, context) {
            var item = router.getPath('itemsController.content').objectAt(context.item_id);
            router.get('itemController').set('content', item);
            router.get('applicationController').connectOutlet('item');
          }
        }),
        doItem: function(router, event) {
          router.transitionTo('item', {item_id: event.context.id});
        }
      })
    })
  });