declare namespace cocoascript {
/**
 * A rectangular area that can interact with Auto Layout. 
 * doc://com.apple.documentation/documentation/appkit/nslayoutguide
 */
interface NSLayoutGuide extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1524460-identifier
  identifier(): cocoascript.NSUserInterfaceItemIdentifier;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1533744-frame
  frame(): cocoascript.NSRect;
  setFrame(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1533971-owningview
  owningView(): cocoascript.NSView;
  setOwningView(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1529133-bottomanchor
  bottomAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setBottomAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1528997-centerxanchor
  centerXAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setCenterXAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1530346-centeryanchor
  centerYAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setCenterYAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1532150-heightanchor
  heightAnchor(): cocoascript.NSLayoutDimension;
  setHeightAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1534720-leadinganchor
  leadingAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setLeadingAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1530723-leftanchor
  leftAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setLeftAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1534892-rightanchor
  rightAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setRightAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1534159-topanchor
  topAnchor(): cocoascript.NSLayoutYAxisAnchor;
  setTopAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1528204-trailinganchor
  trailingAnchor(): cocoascript.NSLayoutXAxisAnchor;
  setTrailingAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1527215-widthanchor
  widthAnchor(): cocoascript.NSLayoutDimension;
  setWidthAnchor(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1641955-hasambiguouslayout
  hasAmbiguousLayout(): cocoascript.BOOL;
  setHasAmbiguousLayout(): void;
  // doc://com.apple.documentation/documentation/appkit/nslayoutguide/1641956-constraintsaffectinglayoutforori
  constraintsAffectingLayoutForOrientation(orientation: cocoascript.NSLayoutConstraintOrientation):cocoascript.NSLayoutConstraint;
  // 
  alloc():cocoascript.NSLayoutGuide;
  // 
  init():cocoascript.NSLayoutGuide;
}
}
declare const NSLayoutGuide: cocoascript.NSLayoutGuide;

