declare namespace cocoascript {
/**
 * A content view for displaying list-based content.
 * doc://com.apple.documentation/documentation/uikit/uilistcontentview
 */
interface UIListContentView extends UIView {
  // doc://com.apple.documentation/documentation/uikit/uilistcontentview/3600554-initwithconfiguration
  initWithConfiguration(configuration: cocoascript.UIListContentConfiguration):cocoascript.UIListContentView;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentview/3600553-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIListContentView;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentview/3600552-configuration
  configuration(): cocoascript.UIListContentConfiguration;
  setConfiguration(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentview/3650226-textlayoutguide
  textLayoutGuide(): cocoascript.UILayoutGuide;
  setTextLayoutGuide(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentview/3650225-secondarytextlayoutguide
  secondaryTextLayoutGuide(): cocoascript.UILayoutGuide;
  setSecondaryTextLayoutGuide(): void;
  // doc://com.apple.documentation/documentation/uikit/uilistcontentview/3650224-imagelayoutguide
  imageLayoutGuide(): cocoascript.UILayoutGuide;
  setImageLayoutGuide(): void;
  // 
  alloc():cocoascript.UIListContentView;
  // 
  init():cocoascript.UIListContentView;
}
}
declare const UIListContentView: cocoascript.UIListContentView;

