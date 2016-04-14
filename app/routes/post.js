import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		// Support for slugs.
    return this.store.query('post', {
			filter: {name: params.slug}
		}).then(models => models.get('firstObject'));
	}
});
