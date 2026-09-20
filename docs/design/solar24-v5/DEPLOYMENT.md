# Deploy the Solar24 demo

This publishes only the V5 static build, not the production Host, knowledge-base files or research tools. Cloudflare Workers Static Assets serves the files; there is no Worker application handler, database, secret, analytics script or backend API.

## Build and publish

```sh
pnpm install --frozen-lockfile
pnpm demo:build
pnpm exec wrangler deploy --config docs/design/solar24-v5/wrangler.jsonc --dry-run
pnpm exec wrangler login
pnpm demo:deploy
```

Wrangler is pinned in the lockfile. The Worker is named `solar24-demo`; the account comes from the authenticated deployment session. No account credentials are stored in Git. If a browser callback cannot complete, use `pnpm exec wrangler login --device`.

## Language links

- English: `/?lang=en#lichun/seasons`
- Chinese: `/?lang=zh#lichun/seasons`

An explicit language takes precedence over saved preferences. Changing language updates the shareable URL and document language. Solar-term navigation retains the language and date state.

## Static assets

The output directory is `docs/design/solar24-v5/dist`. `_headers` adds response headers and long-lived caching for content-hashed assets. Fonts and chapter references are hosted with the build. Do not upload the repository root as an asset directory.

The GitHub walkthroughs are actual browser recordings of the V5 UI, encoded as separate English and Chinese GIFs. These are repository documentation and are not included in the deployed site's payload.

## 中文说明

本部署只上传第五版构建目录。知识库、生产 Host、私人配置和临时文件均不进入站点。中文与英文由链接中的 `lang` 指定，同一份静态文件提供两种界面。

部署授权与内容审核是不同事项。本轮发布由项目负责人明确要求，知识库审核状态保持原样；不会伪造审阅者或改变生产 Host 的门槛。
