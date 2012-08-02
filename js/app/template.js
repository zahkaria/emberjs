
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
    
    <script type="text/x-handlebars" data-template-name="home">
      <div class="hero-unit">
        <h1>Home</h1>
        <p>
          Building a nice little boilerplate for ember.js
          hopefully this can be used to create other single page applications
        </p>
      </div>
    </script>

    <script type="text/x-handlebars" data-template-name="sections">
      <header class="jumbotron subhead">
        <h1>Layout Nesting</h1>
        <p>Views can be dynamically nested using <code>&#123;&#123;outlet&#125;&#125;</code> handlebars helpers.</p>
        <div class="subnav">
          <ul class ="nav nav-pills">
            <li class="sectionA" {{bindAttr class="isSectionA:active"}}><a {{action "doSectionA"}}>Section A</a></li>
            <li class="sectionB" {{bindAttr class="isSectionB:active"}}><a {{action "doSectionB"}}>Section B</a></li>
            <li class="sectionC" {{bindAttr class="isSectionC:active"}}><a {{action "doSectionC"}}>Section C</a></li>
            <li class="sectionD" {{bindAttr class="isSectionD:active"}}><a {{action "doSectionD"}}>Section D</a></li>
          </ul>
        </div>
      </header>
      {{outlet}}
    </script>

    <script type="text/x-handlebars" data-template-name="sectionA">
      <section>
        <h1>Section A</h1>
        {{lorem type=paragraph amount=4}}
      </section>
    </script>

    <script type="text/x-handlebars" data-template-name="sectionB">
      <section>
        <h1>Section B</h1>
        {{lorem type=paragraph amount=4}}
      </section>
    </script>

    <script type="text/x-handlebars" data-template-name="sectionC">
      <section>
        <h1>Section C</h1>
        {{lorem type=paragraph amount=4}}
      </section>
    </script>

    <script type="text/x-handlebars" data-template-name="sectionD">
      <section>
        <h1>Section D</h1>
        {{lorem type=paragraph amount=4}}
      </section>
    </script>

    <script type="text/x-handlebars" data-template-name="items">
      <header class="jumbotron subhead">
        <h1>Route Parameters</h1>
        <p>Named parameters can be extracted from routes defined with <code>:property_name</code> segments.</p>
      </header>
      <ul class="nav nav-tabs nav-stacked">
        {{#each item in content}}
          <li><a {{action "doItem" context="item"}}>{{item.title}}</a></li>
        {{/each}}
      </ul>
    </script>

    <script type="text/x-handlebars" data-template-name="item">
      <h1>{{title}}</h1>
      {{{description}}}
    </script>