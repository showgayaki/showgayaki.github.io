# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

個人アプリ紹介サイト ([kanke.world](https://kanke.world)) の Astro 製静的サイト。GitHub Pages にデプロイされる。ビルド成果物は `./docs/` ディレクトリに出力される。

## Commands

```bash
pnpm dev          # 開発サーバー起動 (ネットワーク全インターフェースでリッスン)
pnpm build        # QRコード生成 → 型チェック → ビルド (docs/ へ出力)
pnpm preview      # ビルド後の成果物をプレビュー
```

ビルドは `pnpm run generate:qr && astro check && astro build` の順に実行される。

## Architecture

### アプリ登録の仕組み

新しいアプリを追加する際の起点は `src/domain/app/` 以下:

- **`types.ts`** — `AppId`、`AppConfig`、`Lang`（`ja`/`en`）、`LegalType` の型定義と、法的文書の見出し `LEGAL_TITLES`（ナビゲーション・一覧ページで使用）
- **`registry.ts`** — `APPS` オブジェクト。全アプリの設定（名前・説明・アイコン・ストアリンク・プライバシー種別）をここに追加する
- **`paths.ts`** — `getStaticPaths()` 用のパス生成ヘルパー
- **`metadata.ts`** — `PageMetadata` 型と、アプリ別の法的文書ページのメタデータ生成（`buildAppLegalMetadata()`。タイトルに `registry.ts` のアプリ名を付ける）

### ページルーティング

- `src/pages/index.astro` — トップページ（アプリ一覧）
- `src/pages/privacy/[app]/[lang].astro` — アプリ別・言語別プライバシーポリシー
- `src/pages/privacy/[app]/index.astro` — `/privacy/{appId}`。リダイレクトはせず、`[lang].astro` を component として import してデフォルト言語（`ja`）の内容を表示する。canonical は `/privacy/{appId}/ja`
- `src/pages/terms/[app]/[lang].astro` — アプリ別・言語別利用規約
- `src/pages/terms/[app]/index.astro` — `/terms/{appId}`。`privacy` と同様
- `src/pages/apps/{appId}/[lang].astro` — アプリ別・言語別アプリ紹介ページ（Google OAuth 審査用等）
- `src/pages/apps/{appId}/index.astro` — `/apps/{appId}`。`privacy` と同様
- `src/pages/404.astro` — ターミナル風の 404 ページ（ヘッダー・フッターなし、noindex）
- `src/pages/api/` — 静的 JSON API（`settings.json`、`emoji.json`）

### i18n

法的文書は `src/i18n/{legalType}/{appId}/{lang}.ts` に格納。プライバシーポリシーには共通テンプレート `mobile-common` があり、アプリ名を引数に取る関数として export される。`registry.ts` の `AppConfig.privacy` に `'mobile-common'` を指定すると共通テンプレートが使われる。

### レイアウト

`src/layouts/BaseLayout.astro` がすべてのページの共通レイアウト。各ページが `metadata`（タイトル・説明）と `lang` を props で渡す。固定ページはページ内に直接書き、アプリ別の法的文書ページは `buildAppLegalMetadata()` で生成する。

canonical・`og:url` は、アクセスされたパスから `.html` を除いて生成する（ビルド時は `build.format: 'file'` によりパスが `.html` 付きになるため）。`[lang].astro` は常に言語付きのパスを `canonicalPath` として渡すので、言語なしの URL（`index.astro`）の canonical も言語付きの URL になる。

### スタイル

SCSS で記述。エントリポイントは `src/styles/style.scss`。個別コンポーネントスタイルは `src/styles/_*.scss` としてパーシャル管理。

### 環境変数

`.env` に `PUBLIC_MY_NAME`・`PUBLIC_MY_EMAIL` を定義。CI では GitHub Secrets から注入される。

### QR コード

`scripts/generate-qr.ts` がビルド前に実行され、`astro.config.mjs` の `site` URL から QR コード画像を `src/images/qr.png` に生成する。

### Astro の型推論に関する注意

`[lang].astro` のような動的ルートページを別ページから component として import して使う場合（例: `index.astro` で `<AppPage lang='ja' />`）、`getStaticPaths` の実装に注意が必要。

**NG**: `LANGS.map()` を使うと Astro の型推論が壊れ、呼び出し元で `lang` prop が `never` 型になる。

```ts
// NG — Astro の型推論が壊れる
export function getStaticPaths() {
    return LANGS.map(lang => ({ params: { lang } }));
}
```

**OK**: リテラル配列を使う。

```ts
// OK
export function getStaticPaths() {
    return [
        { params: { lang: 'en' } },
        { params: { lang: 'ja' } },
    ];
}
```

`buildPaths()` ヘルパー（`privacy`/`terms` で使用）は呼び出し元が `index.astro` からの component import ではないため問題なし。

## Adding a New App

1. `src/domain/app/types.ts` の `AppId` に ID を追加
2. `src/domain/app/registry.ts` の `APPS` にエントリを追加
3. アプリアイコン画像を `src/images/` に配置
4. プライバシーポリシーが必要な場合は `src/i18n/privacy/{appId}/{ja,en}.ts` を作成し、`AppConfig.privacy` に `appId` を設定
5. 利用規約が必要な場合は `src/i18n/terms/{appId}/{ja,en}.ts` を作成し、`AppConfig.terms` に `appId` を設定
6. プライバシーポリシー・利用規約のメタデータは自動生成されるため追加不要。アプリ紹介ページ（`src/pages/apps/{appId}/`）を作る場合は、説明文をページに直接書き、`canonicalPath` に言語付きのパスを渡す
