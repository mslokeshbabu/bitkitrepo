var Botkit = require('botkit');

var controller = Botkit.slackbot({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    scopes: ['bot'],
    require_delivery: true
});

var bot = controller.spawn({
  token: 'xoxb-181470881569-U9NQnVCk1rGC3ZkjWUSKOml7'
});

controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself.');

});
