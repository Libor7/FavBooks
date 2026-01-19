import type { Config } from "@jest/types";
import { createDefaultPreset } from "ts-jest";

const alias = {
  "^@/shared/(.*)$": "<rootDir>/src/shared/$1",
  "^@/schemas/(.*)$": "<rootDir>/src/schemas/$1",
};

const tsJestTransformCfg = createDefaultPreset().transform;

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testMatch: ["**/*.test.ts"],
  moduleNameMapper: alias,
  extensionsToTreatAsEsm: [".ts"],
  verbose: true,
};

export default config;
