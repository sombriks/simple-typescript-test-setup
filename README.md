# simple typescript test setup

playing with vscode and tests with jest

see blogpost [here](https://sombriks.com.br/#/blog/0027-jest-and-typescript-setup.md).

```bash
mkdir simple-typescript-test-setup
cd simple-typescript-test-setup
npm init -y
npm i -D typescript jest ts-jest @types/node @types/jest
npx tsc --init
npx ts-jest config:init
git init
echo "node_modules" > .gitignore
echo "coverage" >> .gitignore
echo "dist" >> .gitignore
mkdir -p src/components
touch src/index.ts
touch src/components/validador.{test.ts,ts}
```

See [tsconfig.json](./tsconfig.json), [jest.config.js](./jest.config.js) and
[package.json](./package.json) for more configuration details.
