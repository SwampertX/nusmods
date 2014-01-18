define(['underscore', 'backbone', 'backbone.picky'], function(_, Backbone) {
  'use strict';

  var Filter = Backbone.Model.extend({
    defaults: {
      selected: false
    },

    initialize: function() {
      _.extend(this, new Backbone.Picky.Selectable(this));
    }
  });

  return Filter;
});