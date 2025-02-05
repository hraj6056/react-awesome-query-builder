import { Utils } from "@314e-react-awesome-query-builder/core";
const { isValidTree } = Utils;
import * as configs from "../support/configs";
import * as inits from "../support/inits";
import { with_qb } from "../support/utils";


describe("validation", () => {
  it("shows error when change number value to > max", async () => {
    await with_qb(configs.with_all_types__show_error, inits.with_number, "JsonLogic", (qb, onChange, {expect_jlogic}) => {
      qb
        .find(".rule .rule--value .widget--widget input")
        .simulate("change", { target: { value: "200" } });
      expect_jlogic([null,
        { "and": [{ "==": [ { "var": "num" }, 200 ] }] }
      ]);
      const changedTree = onChange.getCall(0).args[0];
      const isValid = isValidTree(changedTree);
      expect(isValid).to.eq(false);
      
      const ruleError = qb.find(".rule--error");
      expect(ruleError).to.have.length(1);
      expect(ruleError.first().text()).to.eq("Value 200 > max 10");
    }, {
      ignoreLog: (errText) => {
        return errText.includes("Field num: Value 200 > max 10");
      }
    });
  });
});
