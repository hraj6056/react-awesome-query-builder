# @314e-react-awesome-query-builder/fluent

[![npm](https://img.shields.io/npm/v/@314e-react-awesome-query-builder/fluent.svg)](https://www.npmjs.com/package/@314e-react-awesome-query-builder/fluent)

This packages provides [Fluent UI v8](https://developer.microsoft.com/en-us/fluentui#/get-started/web) widgets

## Installation

Peer dependencies that needs to be installed:
```
npm i @fluentui/react @fluentui/react-icons @fluentui/font-icons-mdl2 --save
```

Install:
```
npm i @314e-react-awesome-query-builder/fluent --save
```

## Usage

Use `FluentUIConfig`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from '@314e-react-awesome-query-builder/fluent'; // for TS example
import { Query, Builder, Utils as QbUtils } from '@314e-react-awesome-query-builder/fluent';
import { FluentUIConfig, FluentUIWidgets } from '@314e-react-awesome-query-builder/fluent';
import '@314e-react-awesome-query-builder/fluent/css/styles.css';
const InitialConfig = FluentUIConfig;
// <<<
```
