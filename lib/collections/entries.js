Entries = new Meteor.Collection("entries");

Meteor.methods({
	addScore: function (data) {
		var entryID = Entries.insert(data);
		return entryID;
	}
});