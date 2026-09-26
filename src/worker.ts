import { createWorker } from "@hakoniwajs/cloudflare";

// wrangler.jsonc の durable_objects.class_name で HakoniwaGame を解決するため
// このファイルから再エクスポートする必要がある
export { HakoniwaGame } from "@hakoniwajs/cloudflare";

export default createWorker();
