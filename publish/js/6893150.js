(function(){function d(a){return Ember.Route.extend({route:a,connectOutlets:function(b){var c=Ember.View.extend({templateName:"section"+a});b.get("sectionsController").connectOutlet({viewClass:c})}})}function c(a){return Ember.computed(function(){for(var b=App.router.currentState;b;){if(b.name===a)return!0;b=b.get("parentState")}return!1}).property("App.router.currentState")}Ember.Handlebars.registerHelper("lorem",function(a){var b={ptags:!0};if(a.hash.type)b.type=a.hash.type;if(a.hash.amount)b.amount=
a.hash.amount;return new Handlebars.SafeString($("<div></div>").lorem(b).html())});window.App=Ember.Application.create({ApplicationController:Ember.Controller.extend({isHome:c("home"),isSections:c("sections"),isItems:c("items")}),ApplicationView:Ember.View.extend({templateName:"application"}),HomeController:Ember.Controller.extend(),HomeView:Ember.View.extend({templateName:"home"}),SectionsController:Ember.Controller.extend({isSectionA:c("sectionA"),isSectionB:c("sectionB"),isSectionC:c("sectionC"),
isSectionD:c("sectionD")}),SectionsView:Ember.View.extend({templateName:"sections"}),ItemsController:Ember.ArrayController.extend({init:function(){this._super();for(var a=[],b=0;b<10;b++){var c=$("<div></div>").lorem({ptags:!0}).html();a.push({id:b,title:"Item "+b,description:c})}this.set("content",Ember.A(a))}}),ItemsView:Ember.View.extend({templateName:"items"}),ItemController:Ember.ObjectController.extend(),ItemView:Ember.View.extend({templateName:"item"}),Router:Ember.Router.extend({root:Ember.Route.extend({doHome:function(a){a.transitionTo("home")},
doSections:function(a){a.transitionTo("sections.index")},doItems:function(a){a.transitionTo("items.index")},home:Ember.Route.extend({route:"/",connectOutlets:function(a){a.get("applicationController").connectOutlet("home")}}),sections:Ember.Route.extend({route:"/sections",connectOutlets:function(a){a.get("applicationController").connectOutlet("sections")},index:Ember.Route.extend({route:"/"}),doSectionA:function(a){a.transitionTo("sections.sectionA")},sectionA:d("A"),doSectionB:function(a){a.transitionTo("sections.sectionB")},
sectionB:d("B"),doSectionC:function(a){a.transitionTo("sections.sectionC")},sectionC:d("C"),doSectionD:function(a){a.transitionTo("sections.sectionD")},sectionD:d("D")}),items:Ember.Route.extend({route:"/items",index:Ember.Route.extend({route:"/",connectOutlets:function(a){a.get("applicationController").connectOutlet("items")}}),item:Ember.Route.extend({route:"/:item_id",connectOutlets:function(a,b){var c=a.getPath("itemsController.content").objectAt(b.item_id);a.get("itemController").set("content",
c);a.get("applicationController").connectOutlet("item")}}),doItem:function(a,b){a.transitionTo("item",{item_id:b.context.id})}})})})});$(function(){App.initialize()})})();
window.log=function(){log.history=log.history||[];log.history.push(arguments);if(this.console){var a=arguments;a.callee=a.callee.caller;a=[].slice.call(a);typeof console.log==="object"?log.apply.call(console.log,console,a):console.log.apply(console,a)}};
(function(a){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),b;b=d.pop();)a[b]=a[b]||c})(function(){try{return console.log(),window.console}catch(a){return window.console={}}}());

