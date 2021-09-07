# Flocss Practice
Flocssの練習用  

## Installation
```
npm install
```

## Build for development
```
npm run serve
```

## Build for production
```
npm run build
```

## Lint
コミットする際に自動でLintチェックとフォーマット処理が走ります  
(huskyとlint-stagedを使用)

### SCSS
[Lint](https://stylelint.io/)  
[Format](https://github.com/prettier/stylelint-prettier)

#### Lintチェック
```
npm run lint:styles
```

#### Lintフォーマット
```
npm run lint:fix:styles
```

### TypeScript
[Lint(TypeScript)](https://typescript-jp.gitbook.io/deep-dive/project/compilation-context/tsconfig)  
[Lint(ESLint)](https://github.com/typescript-eslint/typescript-eslint)  
[Format](https://prettier.io/)

#### Lintチェック
```
npm run lint:scripts
```

#### Lintフォーマット
```
npm run lint:fix:scripts
```

## Composition
- gulp
  - scss - cssプリプロセッサ
  - svgo - svgの最適化
  - typescript - 型定義可能なJavaScript
  - ejs - htmlテンプレートエンジン
  - copy - ソースをdistディレクトリにコピー（scss、svg、typescriptファイルを除く）
- husky - git commit前に特定のコマンドを実行できるもの
- lint-staged - gitにステージングしたファイルを対象に特定のコマンドを実行できるもの
