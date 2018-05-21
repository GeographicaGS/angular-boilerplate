# Angular boilerplate

## Getting started
1. Change the project name in `package.json`, `index.html`, `.angular-cli.json` files and others if needed.
2. Place your common components and service in the `common/components` and `common/services` folders respectively and update the `common/index.ts` file.
3. Place the different sections inside the `sections` folder, following the same structure as `common`:
  ```
    sections/
      your-section/
        components/
          ...
        services/
          ...
        your-section.routing.module.ts
        your-section.module.ts
  ```
4. Use router outlets and queryParams to navigate between map sections when possible.

## TODOs
- [ ] Set map section in a different branch
