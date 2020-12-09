declare namespace cocoascript {
/**
 * An object that controls scrolling of a document view within a scroll view or other type of container view. 
 * doc://com.apple.documentation/documentation/appkit/nsscroller
 */
interface NSScroller extends NSControl {
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523659-controlsize
  controlSize(): cocoascript.NSControlSize;
  setControlSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523676-arrowsposition
  arrowsPosition(): cocoascript.NSScrollArrowPosition;
  setArrowsPosition(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523664-setfloatvalue
  setFloatValue_knobProportion(value: number, proportion: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523626-setknobproportion
  setKnobProportion(proportion: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523647-rectforpart
  rectForPart(partCode: cocoascript.NSScrollerPart):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523645-testpart
  testPart(point: cocoascript.NSPoint):cocoascript.NSScrollerPart;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523625-checkspaceforparts
  checkSpaceForParts():void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523648-usableparts
  usableParts(): cocoascript.NSUsableScrollerParts;
  setUsableParts(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523599-drawarrow
  drawArrow_highlight(whichArrow: cocoascript.NSScrollerArrow, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523622-drawknobslotinrect
  drawKnobSlotInRect_highlight(slotRect: cocoascript.NSRect, flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523663-drawknob
  drawKnob():void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523674-drawparts
  drawParts():void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523657-highlight
  highlight(flag: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523596-hitpart
  hitPart(): cocoascript.NSScrollerPart;
  setHitPart(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523594-trackknob
  trackKnob(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523643-trackscrollbuttons
  trackScrollButtons(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523672-controltint
  controlTint(): cocoascript.NSControlTint;
  setControlTint(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523620-preferredscrollerstyle
  preferredScrollerStyle(): cocoascript.NSScrollerStyle;
  setPreferredScrollerStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523591-scrollerstyle
  scrollerStyle(): cocoascript.NSScrollerStyle;
  setScrollerStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523666-knobstyle
  knobStyle(): cocoascript.NSScrollerKnobStyle;
  setKnobStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/1523593-knobproportion
  knobProportion(): cocoascript.CGFloat;
  setKnobProportion(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscroller/2870071-compatiblewithoverlayscrollers
  compatibleWithOverlayScrollers(): cocoascript.BOOL;
  setCompatibleWithOverlayScrollers(): void;
  // 
  alloc():cocoascript.NSScroller;
  // 
  init():cocoascript.NSScroller;
}
}
declare const NSScroller: cocoascript.NSScroller;

