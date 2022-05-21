# Commands

| Export | Optional? | Description |
| ----------- | ----------- | ----------- |
| execute | no | the command, arguments are message, args and the utils object |
| registerEventHandlers | yes | basically callback with the event name and the function to run when the event is triggered |

Commands have execute function and registerEventHandlers if defined in manifest

```js
function onMessage(message) {
	message.channel.send("you sent a message!")
}
module.exports = {
	execute: function (message, args, util) {
        /*
        First is the message that triggered the command
        then the arguments (basically every space seperated word after the command itself)
        then the utils object, which contains the discord client and apis and bot config
        */
        message.channel.send("The command was run!")
	},
	registerEventHandlers: function (cb) {
		cb("messageCreate", onMessage); 
        // Painfull asks the module to register event handlers
        // The first argument is the name of the event, the second is the function that needs to run when the event is triggered
        // The event must be defined in the manifest
	}
```