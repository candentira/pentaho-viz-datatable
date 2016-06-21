define([
  "pentaho/visual/base/model"
], function(baseModelFactory) {
  "use strict";

  return function(context) {
    var BaseModel = context.get(baseModelFactory);

    return BaseModel.extend({
      type: {
        id: "viz-datatable",
        view: "view",
        props: [
          {
            name: "fixedHeader",
            type: "boolean"
          },
          {
            name: "colReorder",
            type: "boolean"
          },
          {
            name: "filter",
            type: "boolean"
          },
          {
            name: "paging",
            type: "boolean"
          },
          {
            name: "scroller",
            type: "boolean"
          },
          {
            name: "deferRender",
            type: "boolean"
          },
          {
            name: "scrollY",
            type: "number"
          },
          {
            name: "ordering",
            type: "boolean"
          },
          {
            name: "info",
            type: "boolean"
          }
        ]
      }
    });
  };
});
