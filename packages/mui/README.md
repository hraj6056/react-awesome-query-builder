# @314e-react-awesome-query-builder/mui

[![npm](https://img.shields.io/npm/v/@314e-react-awesome-query-builder/mui.svg)](https://www.npmjs.com/package/@314e-react-awesome-query-builder/mui)

This packages provides [MUI](https://mui.com/) widgets

## Installation

Peer dependencies that needs to be installed:
```
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-date-pickers @mui/base --save
```

Install:
```
npm i @314e-react-awesome-query-builder/mui --save
```

## Usage

Use `MuiConfig`. 

See [minimal example in readme](https://github.com/ukrbublik/react-awesome-query-builder#usage) with modifications at top:
```js
// >>>
import type { JsonGroup, Config, ImmutableTree, BuilderProps } from '@314e-react-awesome-query-builder/mui'; // for TS example
import { Query, Builder, Utils as QbUtils } from '@314e-react-awesome-query-builder/mui';
import { MuiConfig, MuiWidgets } from '@314e-react-awesome-query-builder/mui';
import '@314e-react-awesome-query-builder/mui/css/styles.css';
const InitialConfig = MuiConfig;
// <<<
```
