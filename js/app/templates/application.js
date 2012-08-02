    <script type="text/x-handlebars" data-template-name="application">
      <div class="navbar navbar-fixed-top">
        <div class="navbar-inner">
          <div class="container">
            <a class="brand" href="#">Ember.js</a>
            <div class="nav-collapse">
              <ul class="nav">
                <li class="home" {{bindAttr class="isHome:active"}}><a {{action "doHome"}}>Home</a></li>
                <li class="sections" {{bindAttr class="isSections:active"}}><a {{action "doSections"}}>Sections</a></li>
                <li class="items" {{bindAttr class="isItems:active"}}><a {{action "doItems"}}>Items</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  
      <div class="container">
        {{outlet}}
      </div>
    </script>