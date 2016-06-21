define([
  "pentaho/visual/base/View",
  "pentaho/data/filter",
  "underscore",
  "datatables.net",
  "datatables.net-bs",
  "datatables.net-fixedheader",
  "datatables.net-colreorder",
  "datatables.net-scroller"
  //"css!node_modules/datatables.net-bs/css/dataTables.bootstrap",
  //"css!node_modules/datatables.net-scroller-bs/css/scroller.bootstrap"
], function(BaseView, filter, _) {
  "use strict";

  return BaseView.extend({

    /** @override */
    _init: function() {
      this.base();

      this.tElement = $('<table class="table table-striped table-bordered nowrap" cellspacing="0" width="100%">');
      $(this._element).append(this.tElement);
    },

    /** @override */
    _render: function() {

      var tData = parse(this.model.getv("data"));

      if(this.dTable) {
        this.dTable.destory();
        this.tElement.empty();
      }

      this.dTable = this.tElement.DataTable( {
        data:             tData.data,
        columns:          tData.columns,

        fixedHeader:      this.model.getv("fixedHeader"),
        colReorder:       this.model.getv("colReorder"),
        filter:           this.model.getv("filter"),
        paging:           this.model.getv("paging"),
        scroller:         this.model.getv("scroller"),
        deferRender:      this.model.getv("deferRender"),
        scrollY:          this.model.getv("scrollY"),
        ordering:         this.model.getv("ordering"),
        info:             this.model.getv("info")
      } );
    },

    /** @override */
    _resize: function() {

      var w  = this.model.getv("width");
      var h = this.model.getv("height");

      $(this._element).css({ width: w, height: h });
    },

    /** @override */
    dispose: function() {
      this.base();
    }
  });

  function parse(data) {

    var tData = { data: [], columns: [] };

    _.each(data.model.attributes, function(attr, a){
      tData.columns.push({title: attr.label});
    });

    _.each(data.implem.rows, function(row, r){

        var rData = [];
        _.each(row.c, function(cData, c){
            rData.push(cData.v);
        });

        tData.data.push(rData);
    });

    return tData;
  }
});
