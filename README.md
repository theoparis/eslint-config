# Theo's ESLint Config

This repository contains my common eslint config as well as a specification for how I lay out my node projects.

## Project Structure

My typical typescript project structure is like this:

- Root
    - .github
        - workflows
            - node.yaml (`Used for github actions to test and lint my code`)
    - .eslintrc.json (`Contains my eslint config which is used for linting`)
    - .editorconfig (`Contains prettier formatting rules`)
    - renovate.json (`Used for automated dependency updates`)
    - package.json (`Node.js package.json`)
    - src (`This is where I store the source code`)
    - dist (`Output from tsc or other build tools`)
