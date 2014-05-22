
/*
 * GET home page.
 */
var _ = require('underscore');

module.exports = function Route(app){
	app.get('/', function(req, res){
		res.render('index', {title: "Welcome Page"});
	});

		app.get('/client', function(req, res){
		res.render('client', {title: "Welcome Page", session_data:req.session});
	});

		app.get('/results', function(req, res){
		res.render('results', {title: "Results", session_data:req.session});
	});


var users = [];
var chat = []

app.io.route('ready', function(req){
	users.push({id: req.sessionID, name: req.data.name, date: req.data.time});
	app.io.broadcast('user_entered_room', 
		{users_info:users, name:req.data.name, room:req.data.room, message: req.data.name + " has entered room " + req.data.room + " at " + req.data.time
		})

	app.get('/', function(req, res) {
	    res.render('client');
	});
})


app.io.route("get_chats", function(req){
	// console.log("get_chats called!", chat);
app.io.broadcast('previous_chats',
	{previous_messages:chat})

app.get('/', function(req, res) {
	    res.render('client');
	});
})


app.io.route("get_current_users", function(req){
	app.io.broadcast('current_users',
		{current_users:users})

	app.get('/', function(req, res) {
		    res.render('client');
		});
})



app.io.route('send_chat', function(req){
	chat.push(req.data);
	console.log(chat, "chat array on server");
	app.io.broadcast('broadcast_chat', 
		{chat_message:req.data})

	app.get('/', function(req, res) {
	    res.render('client');
	});
})

app.io.route('disconnect', function(req){
  var disconnect = _.findWhere(users, {id:req.sessionID}); 
  app.io.broadcast('leave',{disconnected_user: disconnect, message: disconnect.name + " has left"});
  var remove_user = _.without(users, disconnect);
  users = remove_user;
})

}