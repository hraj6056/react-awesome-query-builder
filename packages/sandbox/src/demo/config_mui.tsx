import React from "react";
import merge from "lodash/merge";
import {
  Config, Settings, 
  MuiConfig,
} from "@314e-react-awesome-query-builder/mui";
import { createConfig } from "./config";
import { ruRU } from "@mui/material/locale";
import "@314e-react-awesome-query-builder/mui/css/styles.scss";

const configMixin = {
  settings: {
    locale: {
      mui: ruRU
    },
  } as Partial<Settings>
};

const config: Config = merge( {}, createConfig(MuiConfig), configMixin );

export default config;
