# hakoniwa template-cloudflare

[箱庭諸島２ (TypeScript 版)](https://github.com/hakoniwajs/hakoniwa) を Cloudflare Workers で動かすためのテンプレートです。`@hakoniwajs/cloudflare` と `@hakoniwajs/core` を npm install するだけで Worker としてデプロイできます。

## Deploy to Cloudflare

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/hakoniwajs/template-cloudflare)

デプロイ時に入力する項目はありません。デプロイ後は次の手順で始められます。

1. 公開 URL の `/login` からメールでログインする (Resend 未設定の間は、ログイン用リンクが Worker のログに出力されます)
2. `/admin` を開くと初期セットアップ (`/admin/setup`) に移動するので、Worker のログに出力されたセットアップコードを入力して管理者になる
3. `/admin` の「新しいゲームを開始」でゲームを始める

詳しくは [ドキュメント](https://hakoniwajs.github.io/hakoniwa/setup/cloudflare/) を参照してください。

## 手動セットアップ

```console
$ npm install
$ npx wrangler dev     # ローカルで動作確認
$ npx wrangler deploy  # デプロイ
```

## 設定

- サイト名・フッタ・タイムゾーン・NG ワードなどは、管理画面 (`/admin`) の「サイト設定」で変更します。
- X / Discord ログインや Resend などの秘密情報は `wrangler secret put <NAME>` (またはダッシュボードの Settings → Variables and Secrets) で登録します。ローカル開発では `.dev.vars.example` を `.dev.vars` にコピーし、必要な行のコメントを外して使います。
- 設定項目の一覧はドキュメントの [環境変数一覧](https://hakoniwajs.github.io/hakoniwa/setup/environment-variables/) を参照してください。
- トップページ等を Workers KV にキャッシュする場合は `wrangler kv namespace create SNAPSHOT` で名前空間を作り、`wrangler.jsonc` の `kv_namespaces` を有効化してください (任意)。

## License

オリジナルの利用条件に従います (本体リポジトリの LICENSE を参照)。同梱の画像は小川克人氏の著作物で、商用利用はできません。
