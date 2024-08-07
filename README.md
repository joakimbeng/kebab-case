# kebab-case

[![NPM version][npm-image]][npm-url]

> Convert a string to kebab-case, i.e. its dash separated form

The difference between `kebab-case` and e.g. [`dashify`](https://www.npmjs.com/package/dashify) is that this
module doesn't modify the string in any other way than transforming uppercased letters to their lowercased
counterparts prefixed with `-`. Thanks to this there's also a [`reverse`](#kebabcasereversestr) function to
do the opposite, i.e. get back the original value.

This is used in [Unistyle](https://github.com/joakimbeng/unistyle) to transform JavaScript CSS properties
to their CSS counterparts without losing a possible browser prefix, e.g: `WebkitTransform -> -webkit-transform`.

## Installation

Install `kebab-case` using [npm](https://www.npmjs.com/):

```bash
npm install --save kebab-case
```

## Usage

### Module usage

```javascript
import kebabCase from "kebab-case";

kebabCase("WebkitTransform");
// "-webkit-transform"
kebabCase.reverse("-webkit-transform");
// "WebkitTransform"
kebabCase("WebkitTransform", false);
// "webkit-transform"
```

## API

### `kebabCase(str)`

| Name            | Type      | Description                                                 |
| --------------- | --------- | ----------------------------------------------------------- |
| str             | `String`  | The string to convert                                       |
| keepLeadingDash | `Boolean` | Whether to keep the leading dash or not. Default is `true`. |

Returns: `String`, the kebab cased string.

### `kebabCase.reverse(str)`

| Name | Type     | Description                |
| ---- | -------- | -------------------------- |
| str  | `String` | The string to convert back |

Returns: `String`, the "unkebab cased" string.

## License

MIT © [Joakim Carlstein](https://joakim.beng.se/)

[npm-url]: https://npmjs.org/package/kebab-case
[npm-image]: https://badge.fury.io/js/kebab-case.svg
