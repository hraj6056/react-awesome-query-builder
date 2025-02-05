import { Query, Builder, BasicConfig } from "@314e-react-awesome-query-builder/ui";
import { AntdConfig } from "@314e-react-awesome-query-builder/antd";
import * as configs from "../support/configs";
import * as inits from "../support/inits";
import { with_qb, empty_value, export_checks } from "../support/utils";
import { expect } from "chai";
// warning: don't put `export_checks` inside `it`


describe("library", () => {
  it("should be imported correctly", () => {
    expect(Query).to.exist;
    expect(Builder).to.exist;
    expect(BasicConfig).to.exist;
    expect(AntdConfig).to.exist;
  });
});


describe("basic query", () => {

  describe("strict mode", () => {
    it("should not produce warnings", async () => {
      await with_qb(configs.simple_with_number, empty_value, "default", (qb, _onChange, _tasks, consoleData) => {
        expect(qb.find(".query-builder")).to.have.length(1);
        const consoleErrors = consoleData.error.join("\n");
        const consoleWarns = consoleData.warn.join("\n");
        expect(consoleErrors).to.not.contain("componentWillReceiveProps");
        expect(consoleWarns).to.not.contain("componentWillReceiveProps");
      }, {
        strict: true
      });
    });
  });

  describe("import", () => {
    it("should work with empty value", async () => {
      await with_qb(configs.simple_with_number, empty_value, "default", (qb) => {
        expect(qb.find(".query-builder")).to.have.length(1);
      });
    });

    it("should work with empty JsonLogic tree", async () => {
      await with_qb(configs.simple_with_number, undefined, "JsonLogic", (qb) => {
        expect(qb.find(".query-builder")).to.have.length(1);
      }, {
        //ignoreLog
      });
    });

    it("should work with empty group", async () => {
      await with_qb(configs.simple_with_number, inits.tree_with_empty_group, "default", (qb) => {
        expect(qb.find(".query-builder")).to.have.length(1);
      });
    });

    it("should work with simple value", async () => {
      await with_qb(configs.simple_with_number, inits.tree_with_number, "default", (qb) => {
        expect(qb.find(".query-builder")).to.have.length(1);
      });
    });

    it("should work with simple value in JsonLogic format", async () => {
      await with_qb(configs.simple_with_number, inits.with_number, "JsonLogic", (qb) => {
        expect(qb.find(".query-builder")).to.have.length(1);
      });
    });

    describe("should work with simple value in SpEL format", () => {
      export_checks(configs.simple_with_number, inits.spel_with_number, "SpEL", {
        logic: {
          and: [
            { "==": [{ "var": "num" }, 2] }
          ]
        },
        spel: "num == 2"
      }, []);
    });

    describe("should work with between op in SpEL format", () => {
      export_checks(configs.simple_with_number, inits.spel_with_between, "SpEL", {
        logic: {
          "and": [
            {
              "<=": [
                1,
                { "var": "num" },
                2
              ]
            }
          ]
        },
        spel: "num >= 1 && num <= 2"
      }, []);
    });

    describe("should work with simple value in JsonLogic format not in group", () => {
      export_checks(configs.simple_with_number, inits.with_number_not_in_group, "JsonLogic", {
        query: "num == 2",
        queryHuman: "Number = 2",
        sql: "num = 2",
        mongo: {num: 2},
        logic: {
          and: [
            { "==": [{ "var": "num" }, 2] }
          ]
        },
      }, []);
    });

    describe("should handle undefined value in JsonLogic format", () => {
      export_checks(configs.simple_with_number, inits.with_undefined_as_number, "JsonLogic", {}, [
        "Can't parse logic undefined"
      ]);
    });

    describe("should handle unexpected json logic value in JsonLogic format", () => {
      export_checks(configs.simple_with_number, inits.with_jl_value, "JsonLogic", {}, [
        "Unexpected logic in value: {\"+\":[1,2]}"
      ], {
        ignoreLog: (errText) => {
          return errText.includes("Removing rule:") && errText.includes("\"field\":null") && errText.includes("Reason: Uncomplete LHS");
        }
      });
    });

    describe("should handle unknown field", () => {
      export_checks(configs.simple_with_number, inits.with_nested, "JsonLogic", {}, [
        "No config for field user.info.firstName"
      ]);
    });

    describe("should handle unknown type", () => {
      export_checks(configs.with_wrong_type, inits.with_number, "JsonLogic", {}, [
        "No widget for type not-a-text"
      ]);
    });

  });

  describe("export", () => {
    export_checks(configs.simple_with_number, inits.tree_with_number, "default", {
      spel: "num == 2",
      query: "num == 2",
      queryHuman: "Number = 2",
      sql: "num = 2",
      mongo: {num: 2},
      logic: {
        and: [
          { "==": [{ "var": "num" }, 2] }
        ]
      },
    });
  });
});
