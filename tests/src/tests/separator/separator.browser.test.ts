import { page } from "@vitest/browser/context";
import type { Separator } from "@coldlight/ui";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-svelte";
import SeparatorTest from "./separator-test.svelte";

function setup(props: Separator.RootProps = {}) {
	render(SeparatorTest, { ...props });
	const root = page.getByTestId("root").element() as HTMLElement;
	return { root };
}

describe("Separator", () => {
	it("should have bits data attrs", async () => {
		const t = setup();
		await expect.element(t.root).toHaveAttribute("data-separator-root");
	});
});
