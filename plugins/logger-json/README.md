# plugin-logger-json

[![NPM Downloads](https://img.shields.io/npm/dt/plugin-logger-json)](https://www.npmjs.com/package/plugin-logger-json)

## Purpose

This plugins allows to log in a JSON format rather than less common string NestJS format.

## Configuration

You can configure the logger plugin in the following ways:

- `logLevel`: The level of messages to log. Possible values are 'fatal' , 'error' , 'warn' , 'info' , 'debug' , 'trace' or 'silent'.
- `additionalLogProperties`: A dictionary of the extra properties that you want to add with each log messages.
- `logRequest`: A boolean value to enable or disable logging of request and response. Default is `false`.
- `sensitiveKeys`: An array of keys that you want to redact from the request and response logs. Default is `[]`.
- `pinoPretty`: A boolean value to enable or disable pretty printing of the logs. Default is `false`.

Examples:

```json
{
  "logLevel": "info",
  "additionalLogProperties": {
    "someKey": "someValue",
    "project": "A",
    "team": "di"
  }
}
```

```json
{
  "logRequest": true,
  "sensitiveKeys": ["req.headers.authorization"],
}
```



## Usage

1. Enable the plugin in your Amplication app.

By enabling this plugin, a new folder named `logger` is added to your `server/src/` directory which contains all the files for the logger configuration.

## Scripts

### `build`

Running `npm run build` will bundle your plugin with Webpack for production.

### `dev`

Running `npm run dev` will watch your plugin's source code and automatically bundle it with every change.
