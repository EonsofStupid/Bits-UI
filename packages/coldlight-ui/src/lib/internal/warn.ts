import { DEV } from "esm-env";

let set: Set<string>;
if (DEV) {
	set = new Set<string>();
}

export function warn(...messages: string[]) {
	if (!DEV) return;
	const msg = messages.join(" ");
	if (set.has(msg)) return;
	set.add(msg);
	// biome-ignore lint/suspicious/noConsole: intentional logging
	console.warn(`[Bits UI]: ${msg}`);
}
