# @314e-react-awesome-query-builder/material

[![npm](https://img.shields.io/npm/v/@314e-react-awesome-query-builder/material.svg)](https://www.npmjs.com/package/@314e-react-awesome-query-builder/material)

This packages provides [Material-UI v4](https://v4.mui.com/) widgets (deprecated)

## Installation

Peer dependencies that needs to be installed:
```
npm i @material-ui/core @material-ui/lab @material-ui/icons @material-ui/pickers --save
```

Install:
```
npm i @314e-react-awesome-query-builder/material --save
```

## Usage

Use `MaterialConfig`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from '@314e-react-awesome-query-builder/material'; // for TS example
import { Query, Builder, Utils as QbUtils } from '@314e-react-awesome-query-builder/material';
import { MaterialConfig, MaterialWidgets } from '@314e-react-awesome-query-builder/material';
import '@314e-react-awesome-query-builder/material/css/styles.css';
const InitialConfig = MaterialConfig;
// <<<
```
