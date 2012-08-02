var heads                   = require('robohydra').heads,
    RoboHydraHeadFilesystem = heads.RoboHydraHeadFilesystem,
    RoboHydraHeadProxy      = heads.RoboHydraHeadProxy,
    RoboHydraHead           = require("robohydra").heads.RoboHydraHead;
    Response                = require("robohydra").Response;

var newJSFilesLibs = [
    'jquery-1.7.2.min.js',
    'bootstrap.min.js',
    'jquery.lorem.js',
    'handlebars-1.0.0.beta.6.js',
    'ember.js'
];

var newJSFilesApp = [
    'plugins.js','app.js','helpers.js','controller.js','route.js', 'views.js'
];

function newJS() {
  var output = '', script = '<script src="{replace}"></script>';

  for (var i = 0; i < newJSFilesLibs.length; i++) {
    output += script.replace('{replace}', '/js/libs/' + newJSFilesLibs[i]);
  };

  for (var i = 0; i < newJSFilesApp.length; i++) {
    output += script.replace('{replace}', '/js/app/' + newJSFilesApp[i]);
  };
  return output;
}

exports.getBodyParts = function(config) {
  var projectPath = config.rootpath || '.';

  return {
    heads: [
      new RoboHydraHead({
          path: '/About_us/',
          handler: function(req, res, next) {
              var fakeRes = new Response(
                  function() {
                      var newJSList = newJS();
                      this.body = this.body.toString().replace('<!-- Start of metadata -->', newJSList);
                      res.forward(this);
                  }
              );

              // Avoid compressed responses to avoid having to
              // uncompress before processing
              delete req.headers["accept-encoding"];
              next(req, fakeRes);
          }
      }),
      new RoboHydraHeadFilesystem({
        name: 'js',
        mountPath: '/js',
        documentRoot: projectPath + '/js'
      }),
      new RoboHydraHeadFilesystem({
        name: 'css',
        mountPath: '/css',
        documentRoot: projectPath + '/css'
      }),
      new RoboHydraHead({
          path: '/js/',
          handler: function(req, res, next) {
            req.url = req.url.replace('', "");
          }
      }),
      new RoboHydraHeadProxy({
        name: 'proxy',
        mountPath: '/',
        proxyTo: 'http://acsrf.boomworks.com.au/',
        setHostHeader: true
      })
    ]
  };
};