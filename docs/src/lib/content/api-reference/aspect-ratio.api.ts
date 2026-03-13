import type { AspectRatioRootPropsWithoutHTML } from "@coldlight/ui";
import { defineComponentApiSchema, defineNumberProp, defineSimpleDataAttr } from "../utils.js";
import { withChildProps } from "./shared.js";

const root = defineComponentApiSchema<AspectRatioRootPropsWithoutHTML>({
	title: "Root",
	description: "The aspect ratio component.",
	props: {
		ratio: defineNumberProp({
			description: "The desired aspect ratio.",
			default: 1,
		}),
		...withChildProps({ elType: "HTMLDivElement" }),
	},
	dataAttributes: [
		defineSimpleDataAttr({
			name: "aspect-ratio-root",
			description: "Present on the root element.",
		}),
	],
});

export const aspectRatio = [root];
