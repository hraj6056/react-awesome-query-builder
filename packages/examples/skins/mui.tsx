import React, { useEffect } from "react";
import { LazyStyleModule } from "../utils";
// @ts-ignore
import styles from "@314e-react-awesome-query-builder/mui/css/styles.scss";

const ImportMui: React.FC = () => {
  useEffect(() => {
    (styles as LazyStyleModule).use();
    return () => {
      (styles as LazyStyleModule).unuse();
    };
  }, []);
  return null;
};

export default ImportMui;
