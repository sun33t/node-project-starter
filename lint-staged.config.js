export default {
  "*.{cjs,mjs,js,ts,jsx,tsx}": (stagedFiles) => [
    `eslint --fix ${stagedFiles.join(" ")}`,
    `prettier --write ${stagedFiles.join(" ")}`,
  ],
  "*.{md,json}": (stagedFiles) => [`prettier --write ${stagedFiles.join(" ")}`],
};
