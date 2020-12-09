declare namespace cocoascript {
/**
 * A menu element that performs its action in a selector.
 * doc://com.apple.documentation/documentation/uikit/uicommand
 */
interface UICommand extends UIMenuElement {
  // doc://com.apple.documentation/documentation/uikit/uicommand/3175309-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.UICommand;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3175312-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3229869-image
  image(): cocoascript.UIImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3175302-action
  action(): cocoascript.SEL;
  setAction(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3175308-discoverabilitytitle
  discoverabilityTitle(): cocoascript.NSString;
  setDiscoverabilityTitle(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3335180-attributes
  attributes(): cocoascript.UIMenuElementAttributes;
  setAttributes(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3229870-state
  state(): cocoascript.UIMenuElementState;
  setState(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3175303-alternates
  alternates(): cocoascript.UICommandAlternate;
  setAlternates(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommand/3175310-propertylist
  propertyList(): cocoascript.id;
  setPropertyList(): void;
  // doc://com.apple.documentation/documentation/uikit/uicommandtagshare
  UICommandTagShare(): cocoascript.const;
  setUICommandTagShare(): void;
  // 
  alloc():cocoascript.UICommand;
  // 
  init():cocoascript.UICommand;
}
}
declare const UICommand: cocoascript.UICommand;

