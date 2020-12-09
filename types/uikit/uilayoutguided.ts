declare namespace cocoascript {
/**
 * A rectangular area that can interact with Auto Layout. 
 * doc://com.apple.documentation/documentation/uikit/uilayoutguide
 */
interface UILayoutGuide extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619655-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619657-layoutframe
  layoutFrame(): cocoascript.CGRect;
  setLayoutFrame(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619648-owningview
  owningView(): cocoascript.UIView;
  setOwningView(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619661-bottomanchor
  bottomAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setBottomAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619654-centerxanchor
  centerXAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setCenterXAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619659-centeryanchor
  centerYAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setCenterYAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619652-heightanchor
  heightAnchor(): cocoascript.NSLayoutDimension;
  setHeightAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619658-leadinganchor
  leadingAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setLeadingAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619656-leftanchor
  leftAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setLeftAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619649-rightanchor
  rightAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setRightAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619650-topanchor
  topAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setTopAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619660-trailinganchor
  trailingAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setTrailingAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1619653-widthanchor
  widthAnchor(): cocoascript.NSLayoutDimension;
  setWidthAnchor(): void;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1648534-constraintsaffectinglayoutforaxi
  constraintsAffectingLayoutForAxis(axis: cocoascript.UILayoutConstraintAxis):cocoascript.NSLayoutConstraint;
  // doc://com.apple.documentation/documentation/uikit/uilayoutguide/1648533-hasambiguouslayout
  hasAmbiguousLayout(): cocoascript.BOOL;
  setHasAmbiguousLayout(): void;
  // 
  alloc():cocoascript.UILayoutGuide;
  // 
  init():cocoascript.UILayoutGuide;
}
}
declare const UILayoutGuide: cocoascript.UILayoutGuide;

