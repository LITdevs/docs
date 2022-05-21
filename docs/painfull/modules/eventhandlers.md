# event handlöer

define in manifest

put registerEventHandler(cb) in an entrypoint

win

```js
module.exports = {
execute: function (message, args, utils)
registerEventHandlers: function (cb) {
		cb("messageCreate", onMessage); 
        // Painfull asks the module to register event handlers
        // The first argument is the name of the event, the second is the function that needs to run when the event is triggered
        // The event must be defined in the manifest
}
}
``` 
