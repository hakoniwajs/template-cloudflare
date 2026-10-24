import { createWorker } from "@hakoniwajs/cloudflare";

// wrangler.jsonc の durable_objects.class_name (HakoniwaGame) と exports (CachedPages) を
// 解決するため、このファイルから再エクスポートする必要がある
export { CachedPages, HakoniwaGame } from "@hakoniwajs/cloudflare";

export default createWorker();
