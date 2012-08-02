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