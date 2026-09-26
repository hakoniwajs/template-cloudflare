# hakoniwa template-cloudflare

[箱庭諸島２ (TypeScript 版)](https://github.com/hakoniwajs/hakoniwa) を Cloudflare Workers で動かすためのテンプレートです。`@hakoniwajs/cloudflare` と `@hakoniwajs/core` を npm install するだけで Worker としてデプロイできます。

## Deploy to Cloudflare

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/hakoniwajs/template-cloudflare)

デプロイ後、必ず `HAKONIWA_AUTH_SECRET` を設定してください:

```console
$ npx wrangler secret put HAKONIWA_AUTH_SECRET
```

(`openssl rand -base64 32` などで生成したランダムな文字列)

## 手動セットアップ

```console
$ npm install
$ npx wrangler dev     # ローカルで動作確認
$ npx wrangler deploy  # デプロイ
```

## 設定

- `wrangler.jsonc` の `vars` に非秘密の設定値 (サイト名、ターン長、管理者メールアドレス等) を書きます。設定項目の一覧は本体リポジトリの [設置ガイド](https://github.com/hakoniwajs/hakoniwa/blob/main/docs/setup-guide.md) を参照してください。
- 秘密情報 (`HAKONIWA_AUTH_SECRET`、OAuth の client secret 等) は `wrangler secret put <NAME>` で登録します。ローカル開発では `.dev.vars.example` を `.dev.vars` にコピーして使います。
- トップページ等を Workers KV にキャッシュする場合は `wrangler kv namespace create SNAPSHOT` で名前空間を作り、`wrangler.jsonc` の `kv_namespaces` を有効化してください (任意)。

## License

オリジナルの利用条件に従います (本体リポジトリの LICENSE を参照)。同梱の画像は小川克人氏の著作物で、商用利用はできません。
