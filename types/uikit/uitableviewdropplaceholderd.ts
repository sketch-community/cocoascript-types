declare namespace cocoascript {
/**
 * A placeholder cell that supports customizing the drop preview parameters. 
 * doc://com.apple.documentation/documentation/uikit/uitableviewdropplaceholder
 */
interface UITableViewDropPlaceholder extends UITableViewPlaceholder {
  // doc://com.apple.documentation/documentation/uikit/uitableviewdropplaceholder/2921668-previewparametersprovider
  previewParametersProvider(): cocoascript.UITableViewCell;
  setPreviewParametersProvider(): void;
  // 
  alloc():cocoascript.UITableViewDropPlaceholder;
  // 
  init():cocoascript.UITableViewDropPlaceholder;
}
}
declare const UITableViewDropPlaceholder: cocoascript.UITableViewDropPlaceholder;

