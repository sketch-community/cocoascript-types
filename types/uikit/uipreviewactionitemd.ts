declare namespace cocoascript {
/**
 * A set of methods that defines the styles you can apply to peek quick actions and peek quick action groups, and defines a read-only accessor for the user-visible title of a peek quick action.
 * doc://com.apple.documentation/documentation/uikit/uipreviewactionitem
 */
interface UIPreviewActionItem extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uipreviewactionitem/1621352-title
  title(): cocoascript.NSString;
  setTitle(): void;
}
}

