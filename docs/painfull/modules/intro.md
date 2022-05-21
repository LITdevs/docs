# Intro to Modules
Painfull is based around "Modules", which are small repositories with a Node project, and a Painfull manifest.

For more technical information, refer to the [Technical details](technical).

## Installing modules

Painfull core includes a command for installing modules through Discord, `install`.

This command will automatically install the module, and add it to the Painfull config.

If a command adds an API, Painfull must restart after installing. If Painfull is running in pm2, it will restart automatically, otherwise a DM is sent to the owner. 

### Command syntax

`install <module name>`

| Parameter | Optional? | Description |
| ----------- | ----------- | ----------- |
| module name | no       | Name of the module, by default Painfull will look for the module in `https://github.com/Painfull-Community/<module-name>`. Using `@<organization-name>/<module-name>` will make it look in `https://github.com/<organization-name>/<module-name>` instead. If a full `git://` URL is provided, Painfull looks there. |

#### Examples

The following commands will all install the same `vukkyzone` module.

- `install vukkyzone`
- `install @Painfull-Community/vukkyzone`
- `install git://github.com/Painfull-Community/vukkyzone`

## Uninstalling modules

Painfull core also includes a command for uninstalling modules, `uninstall`.

### Command syntax 

`uninstall <module name>`

| Parameter | Optional? | Description |
| ----------- | ----------- | ----------- |
| module name | no       | Name of the module |

:::caution 
Do not include a organization or full URL, instead use only the name of the module.
:::