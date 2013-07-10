ht.Views.GameHeaderView = Backbone.View.extend({

  className: 'game-header row',

  template: ht.Templates.GameHeaderTemplate,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.append(this.template(this.model.attributes));
  }

});
