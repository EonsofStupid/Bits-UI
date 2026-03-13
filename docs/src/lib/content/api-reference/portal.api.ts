import type { PortalProps } from "@coldlight/ui";
import { defineUtilityApiSchema } from "../utils.js";
import { portalProps } from "./shared.js";

export const portal = defineUtilityApiSchema<PortalProps>({
	title: "Portal",
	description: "Renders the children to a different location in the DOM.",
	props: portalProps,
});
