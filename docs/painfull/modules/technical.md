# Technical details
## Painfull manifest
The Painfull manifest is a JSON file used by Painfull to get details about the module and what it can do.
```json
{
    "name": "shark-db",
    "version": "1.0.0",
    "author": "Skelly",
    "original_pain_version": "1.0.0",
    "min_pain_version": "1.0.0",
    "apis": {
        "db": "src/index.js"
    },
    "entrypoints": {
        "hello": "src/hello.js"
    },
    "locals": "src/locals.json",
    "eventHandlers": ["messageCreate"],
    "module_dependencies": [
        "shark-db",
        "shark-perms"
    ]
}
```

### Closer look

```json
    "name": "shark-db",
    "version": "1.0.0",
    "author": "Skelly",
```

This part is pretty simple, the name of the module, the version of the module and the author of the module.

:::caution

The git repository name, node package name, and module name must match! Painfull will not recognize the module in case of a mismatch.

:::

:::danger

Make your module name unique! Users cannot install two modules of the same name.

:::


```json
    "original_pain_version": "1.0.0",
    "min_pain_version": "1.0.0",
```

Here you can define which versions of the Painfull framework your module supports.

:::danger

We don't quite remember how this works, so [here is the source code](https://github.com/LITdevs/painfull/blob/d2d66348963eef3338d5abb43be5320e7007c808/src/index.js#L117).
:::


```json
    "apis": {
        "db": "src/index.js"
    },
```

Here you can define APIs that your module adds, these are accessible to any other module.

Painfull core implements the following APIs:
- `core-error`, used for sending errors to the bot maintainer
- `core-cls`, the [Central Localization System](localization)

The key, in this case "db", acts as the name of the API, prepended with the module name, in this case it would be "shark-db-db". <br/>
The value is the path to the API's js file.

You can learn more about implementing your own API [here](apis).


```json
    "entrypoints": {
        "hello": "src/hello.js"
    },
```

Here you can define commands for your module, these are accessible on Discord when combined with the bot prefix.

You can learn more about implementing commands [here](commands).


```json
    "locals": "src/locals.json",
```

Here you can define the location of the localization file, this file contains the localization for your module, and upon installation of the module gets imported by the Central Localization System (CLS).

You can learn more about implementing localization [here](localization).


```json
    "eventHandlers": ["messageCreate"],
```

Modules can use event handlers to listen to Discord events. 

You can learn more about the event handler system [here](eventhandlers).


```json
    "module_dependencies": [
        "nonexistent_module",
        "@LITdevs/nonexistent_unverified_module",
        "git://example.invalid/nonexistent_unverified_module_on_different_git.git"
    ]
```

Modules can depend on other modules.

:::danger

This has not been implemented yet (do we really need to say this? by the time the docs are revealed to the public it probably is) (if youre seeing this, you should not be here!! go away!!)

:::


## Verified modules

Community-made modules can be verified and added to the Painfull-Community organization on GitHub.

By default Painfull will look in this organization for modules when the `install` command is ran without defining another organization or git.