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

## Composition
- gulp
  - scss - cssプリプロセッサ
  - svgo - svgの最適化
  - typescript - 型定義可能なJavaScript
  - ejs - htmlテンプレートエンジン
  - copy - ソースをdistディレクトリにコピー（scss、svg、typescriptファイルを除く）
- husky - git commit前に特定のコマンドを実行できるもの
- lint-staged - gitにステージングしたファイルを対象に特定のコマンドを実行できるもの
