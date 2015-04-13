Meteor.subscribe('entries');

Template.body.helpers({
	entries: function () {
		return Entries.find({}, {sort: {score: 1}});
	}
});

Template.score.helpers({
	date: function () {
		return this.createdAt.toLocaleDateString();
	}
});

Template.body.events({
	'submit .add-score': function (event) {
		var newScore = {
			name: event.target.name.value,
			score: parseInt(event.target.score.value),
			createdAt: new Date()
		};
		Meteor.call('addScore', newScore);
		event.target.name.value="";
		event.target.score.value="";

		return false;
	}
});