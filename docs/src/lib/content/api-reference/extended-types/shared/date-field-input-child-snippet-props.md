```ts
import type { SegmentPart } from "@coldlight/ui"

type ChildSnippetProps = {
	props: Record<string, unknown>
	segments: Array<{ part: SegmentPart; value: string }>
}
```
