import type { WithChild, Without } from "$lib/internal/types.js";
import type { BitsPrimitiveDivAttributes } from "$lib/shared/attributes.js";
import type { MenuContentProps, MenuContentPropsWithoutHTML } from "../menu/types.js";

export type ContextMenuContentPropsWithoutHTML = MenuContentPropsWithoutHTML;

export type ContextMenuContentProps = MenuContentProps;

export type ContextMenuTriggerPropsWithoutHTML = WithChild<{
	/**
	 * Whether the context menu trigger is disabled. If disabled, the trigger will not
	 * open the menu when right-clicked.
	 */
	disabled?: boolean;
}>;

export type ContextMenuTriggerProps = ContextMenuTriggerPropsWithoutHTML &
	Without<BitsPrimitiveDivAttributes, ContextMenuTriggerPropsWithoutHTML>;

export type {
	MenuArrowProps as ContextMenuArrowProps,
	MenuArrowPropsWithoutHTML as ContextMenuArrowPropsWithoutHTML,
	MenuCheckboxGroupProps as ContextMenuCheckboxGroupProps,
	MenuCheckboxGroupPropsWithoutHTML as ContextMenuCheckboxGroupPropsWithoutHTML,
	MenuCheckboxItemProps as ContextMenuCheckboxItemProps,
	MenuCheckboxItemPropsWithoutHTML as ContextMenuCheckboxItemPropsWithoutHTML,
	MenuContentStaticProps as ContextMenuContentStaticProps,
	MenuContentStaticPropsWithoutHTML as ContextMenuContentStaticPropsWithoutHTML,
	MenuGroupHeadingProps as ContextMenuGroupHeadingProps,
	MenuGroupHeadingPropsWithoutHTML as ContextMenuGroupHeadingPropsWithoutHTML,
	MenuGroupProps as ContextMenuGroupProps,
	MenuGroupPropsWithoutHTML as ContextMenuGroupPropsWithoutHTML,
	MenuItemProps as ContextMenuItemProps,
	MenuItemPropsWithoutHTML as ContextMenuItemPropsWithoutHTML,
	MenuPortalProps as ContextMenuPortalProps,
	MenuPortalPropsWithoutHTML as ContextMenuPortalPropsWithoutHTML,
	MenuRadioGroupProps as ContextMenuRadioGroupProps,
	MenuRadioGroupPropsWithoutHTML as ContextMenuRadioGroupPropsWithoutHTML,
	MenuRadioItemProps as ContextMenuRadioItemProps,
	MenuRadioItemPropsWithoutHTML as ContextMenuRadioItemPropsWithoutHTML,
	MenuRootProps as ContextMenuRootProps,
	MenuRootPropsWithoutHTML as ContextMenuRootPropsWithoutHTML,
	MenuSeparatorProps as ContextMenuSeparatorProps,
	MenuSeparatorPropsWithoutHTML as ContextMenuSeparatorPropsWithoutHTML,
	MenuSubContentProps as ContextMenuSubContentProps,
	MenuSubContentPropsWithoutHTML as ContextMenuSubContentPropsWithoutHTML,
	MenuSubContentStaticProps as ContextMenuSubContentStaticProps,
	MenuSubContentStaticPropsWithoutHTML as ContextMenuSubContentStaticPropsWithoutHTML,
	MenuSubProps as ContextMenuSubProps,
	MenuSubPropsWithoutHTML as ContextMenuSubPropsWithoutHTML,
	MenuSubTriggerProps as ContextMenuSubTriggerProps,
	MenuSubTriggerPropsWithoutHTML as ContextMenuSubTriggerPropsWithoutHTML,
} from "$lib/bits/menu/types.js";
