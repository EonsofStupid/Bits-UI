import type { DialogContentProps, DialogContentPropsWithoutHTML } from "$lib/types.js";

export type {
	DialogCloseProps as AlertDialogActionProps,
	DialogCloseProps as AlertDialogCancelProps,
	DialogClosePropsWithoutHTML as AlertDialogActionPropsWithoutHTML,
	DialogClosePropsWithoutHTML as AlertDialogCancelPropsWithoutHTML,
	DialogDescriptionProps as AlertDialogDescriptionProps,
	DialogDescriptionPropsWithoutHTML as AlertDialogDescriptionPropsWithoutHTML,
	DialogOverlayProps as AlertDialogOverlayProps,
	DialogOverlayPropsWithoutHTML as AlertDialogOverlayPropsWithoutHTML,
	DialogPortalProps as AlertDialogPortalProps,
	DialogPortalPropsWithoutHTML as AlertDialogPortalPropsWithoutHTML,
	DialogRootProps as AlertDialogRootProps,
	DialogRootPropsWithoutHTML as AlertDialogRootPropsWithoutHTML,
	DialogTitleProps as AlertDialogTitleProps,
	DialogTitlePropsWithoutHTML as AlertDialogTitlePropsWithoutHTML,
	DialogTriggerProps as AlertDialogTriggerProps,
	DialogTriggerPropsWithoutHTML as AlertDialogTriggerPropsWithoutHTML,
} from "$lib/bits/dialog/types.js";

export type AlertDialogContentPropsWithoutHTML = Omit<
	DialogContentPropsWithoutHTML,
	"onInteractOutside"
>;
export type AlertDialogContentProps = DialogContentProps;
