import { RegisterOptions, FieldValues } from "react-hook-form";
import { BasicGenFields } from "../features/constants";

export const validateForm = (fieldName: BasicGenFields) => {
  let validationRules: RegisterOptions<FieldValues, BasicGenFields> = {};
  switch (fieldName) {
    case BasicGenFields.MIN_TOKEN:
      validationRules = {
        min: {
          value: 100,
          message: "Min value is 100",
        },
        max: {
          value: 500,
          message: "Can not be more than 500",
        },
      };
      break;
    case BasicGenFields.MAX_TOKEN:
      validationRules = {
        min: {
          value: 100,
          message: "Can not be less than 100",
        },
        max: {
          value: 500,
          message: "Max value is 500",
        },
      };
      break;
    case BasicGenFields.INPUT:
      validationRules = {
        required: {
          value: true,
          message: "Input can not be empty",
        },
      };
  }
  return validationRules;
};