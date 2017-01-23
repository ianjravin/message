import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  city: DS.attr(),
  question: DS.attr(),
  body: DS.attr(),
});
