# CSS in Depth

## environment setup

まずはプロジェクトの初期設定を実施する。

```bash
# initialize Vite project
npm init vite@latest

# check
npm run dev

# initialize Storybook project
npx sb@next init --builder storybook-builder-vite

# check
npm run storybook
```

あとは、TypeScript 環境でも CSS Module と SASS を利用することができるように、パッケージを追加する。

```bash
npm install --save-dev sass
npm install --save-dev typescript-plugin-css-modules
```
