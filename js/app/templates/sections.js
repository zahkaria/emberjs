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