import { readFile } from "node:fs/promises";
import glamourWasm from "./glamour.wasm?url";
import "~/assets/go_wasm_exec";

// @ts-ignore
const go = new Go();
const { instance } = await WebAssembly.instantiate(
	await readFile(`.${glamourWasm}`),
	go.importObject,
);
go.run(instance);

export const lip = {
	// biome-ignore lint/suspicious/noExplicitAny: just no
	RenderMD: (input: string): string => (globalThis as any).renderMD(input),
};
