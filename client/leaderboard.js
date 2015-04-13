Meteor.subscribe('entries');

Template.body.helpers({
	entries: function () {
		return Entries.find({}, {sort: {score: 1}});
	}
});

Template.time.helpers({
	date: function () {
		var date = this.createdAt;
		return ("0" + (date.getMonth() + 1).toString()).substr(-2) + "/" + ("0" + date.getDate().toString()).substr(-2)  + "/" + (date.getFullYear().toString()).substr(2);
	},
	time: function () {
		var minutes = Math.floor(this.time / 60);
		var	seconds = this.time - minutes * 60;
		return minutes + ':' + pad_left(seconds);
	}
});

Template.body.events({
	'submit .add-score': function (event) {
		var newScore = {
			name: event.target.name.value,
			time: parseInt(event.target.time.value),
			createdAt: new Date()
		};
		Meteor.call('addScore', newScore);
		event.target.name.value="";
		event.target.time.value="";

		return false;
	}
});

function pad_left(string){ 
	return (new Array(3).join('0')+string).slice(-2); 
} 