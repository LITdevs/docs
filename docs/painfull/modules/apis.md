# APIs

Structure of an api

| Export | Optional? | Description |
| ----------- | ----------- | ----------- |
| api | yesn't | This is the recommended place to put all your API functions, to not conflict with other exports |
| initAPIs | yes | A function that is called when the bot starts, [the utils argument](utils-argument) is passed to the function, this includes the discord client, bot config and apis |

APIs are made accessible anywhere via the utils argument.

## Calling an API

As a real-world example, the CLS API gets the errorAPI like this...

```js
function initAPIs(utils) {
	errorAPI = utils.apis["core-error"].api
```

...and can now use it to send alerts like this:

```js
errorAPI.error("This is an error, that is DM'd to the maintainer")
errorAPI.info("This is an informational message, that is DM'd to the maintainer")
```

Commands are also able to use APIs. The third argument of a command's execute function is the [the utils argument](utils-argument), which includes the Discord client, bot configuration, and APIs.

```js
module.exports = {
    execute: async function(message, args, util) {
        let cls = util.apis["core-cls"].api;
    }
}
```

It can call the API's functions like this:

```js
cls.getString("core", "lang.success")
// or if you want a long string of stuff
util.apis["core-cls"].api.getString("core", "lang.success").replace("{0}", args[0])
```