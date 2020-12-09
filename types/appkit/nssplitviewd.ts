declare namespace cocoascript {
/**
 * A view that arranges two or more views in a linear stack running horizontally or vertically. 
 * doc://com.apple.documentation/documentation/appkit/nssplitview
 */
interface NSSplitView extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455306-delegate
  delegate(): cocoascript.NSSplitViewDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455307-arrangesallsubviews
  arrangesAllSubviews(): cocoascript.BOOL;
  setArrangesAllSubviews(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455253-arrangedsubviews
  arrangedSubviews(): cocoascript.NSView;
  setArrangedSubviews(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455295-addarrangedsubview
  addArrangedSubview(view: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455321-insertarrangedsubview
  insertArrangedSubview_atIndex(view: cocoascript.NSView, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455271-removearrangedsubview
  removeArrangedSubview(view: cocoascript.NSView):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455285-adjustsubviews
  adjustSubviews():void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455311-issubviewcollapsed
  isSubviewCollapsed(subview: cocoascript.NSView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455287-holdingpriorityforsubviewatindex
  holdingPriorityForSubviewAtIndex(subviewIndex: cocoascript.NSInteger):cocoascript.NSLayoutPriority;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455320-setholdingpriority
  setHoldingPriority_forSubviewAtIndex(priority: cocoascript.NSLayoutPriority, subviewIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455318-vertical
  vertical(): cocoascript.BOOL;
  setVertical(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455291-dividerstyle
  dividerStyle(): cocoascript.NSSplitViewDividerStyle;
  setDividerStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455267-dividercolor
  dividerColor(): cocoascript.NSColor;
  setDividerColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455257-dividerthickness
  dividerThickness(): cocoascript.CGFloat;
  setDividerThickness(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455297-drawdividerinrect
  drawDividerInRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455319-autosavename
  autosaveName(): cocoascript.NSSplitViewAutosaveName;
  setAutosaveName(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455278-minpossiblepositionofdivideratin
  minPossiblePositionOfDividerAtIndex(dividerIndex: cocoascript.NSInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455261-maxpossiblepositionofdivideratin
  maxPossiblePositionOfDividerAtIndex(dividerIndex: cocoascript.NSInteger):cocoascript.CGFloat;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455316-setposition
  setPosition_ofDividerAtIndex(position: cocoascript.CGFloat, dividerIndex: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewwillresizesubviewsnotification
  NSSplitViewWillResizeSubviewsNotification(): cocoascript.NSNotificationName;
  setNSSplitViewWillResizeSubviewsNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitviewdidresizesubviewsnotification
  NSSplitViewDidResizeSubviewsNotification(): cocoascript.NSNotificationName;
  setNSSplitViewDidResizeSubviewsNotification(): void;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455275-ispanesplitter
  isPaneSplitter():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssplitview/1455309-setispanesplitter
  setIsPaneSplitter(flag: cocoascript.BOOL):void;
  // 
  alloc():cocoascript.NSSplitView;
  // 
  init():cocoascript.NSSplitView;
}
}
declare const NSSplitView: cocoascript.NSSplitView;

