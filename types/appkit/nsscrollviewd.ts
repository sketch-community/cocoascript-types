declare namespace cocoascript {
/**
 * A view that displays a portion of a document view and provides scroll bars that allow the user to move the document view within the scroll view.
 * doc://com.apple.documentation/documentation/appkit/nsscrollview
 */
interface NSScrollView extends NSView {
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403458-contentsize
  contentSize(): cocoascript.NSSize;
  setContentSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403466-documentvisiblerect
  documentVisibleRect(): cocoascript.NSRect;
  setDocumentVisibleRect(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403473-backgroundcolor
  backgroundColor(): cocoascript.NSColor;
  setBackgroundColor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403474-drawsbackground
  drawsBackground(): cocoascript.BOOL;
  setDrawsBackground(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403528-bordertype
  borderType(): cocoascript.NSBorderType;
  setBorderType(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403446-documentcursor
  documentCursor(): cocoascript.NSCursor;
  setDocumentCursor(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403547-contentview
  contentView(): cocoascript.NSClipView;
  setContentView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403485-documentview
  documentView(): cocoascript.NSView;
  setDocumentView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403546-addfloatingsubview
  addFloatingSubview_forAxis(view: cocoascript.NSView, axis: cocoascript.NSEventGestureAxis):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403447-horizontalscroller
  horizontalScroller(): cocoascript.NSScroller;
  setHorizontalScroller(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403530-hashorizontalscroller
  hasHorizontalScroller(): cocoascript.BOOL;
  setHasHorizontalScroller(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403526-verticalscroller
  verticalScroller(): cocoascript.NSScroller;
  setVerticalScroller(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403491-hasverticalscroller
  hasVerticalScroller(): cocoascript.BOOL;
  setHasVerticalScroller(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403536-autohidesscrollers
  autohidesScrollers(): cocoascript.BOOL;
  setAutohidesScrollers(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403492-rulerviewclass
  rulerViewClass(): cocoascript.Class;
  setRulerViewClass(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403457-hashorizontalruler
  hasHorizontalRuler(): cocoascript.BOOL;
  setHasHorizontalRuler(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403498-horizontalrulerview
  horizontalRulerView(): cocoascript.NSRulerView;
  setHorizontalRulerView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403496-hasverticalruler
  hasVerticalRuler(): cocoascript.BOOL;
  setHasVerticalRuler(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403507-verticalrulerview
  verticalRulerView(): cocoascript.NSRulerView;
  setVerticalRulerView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403445-rulersvisible
  rulersVisible(): cocoascript.BOOL;
  setRulersVisible(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403502-automaticallyadjustscontentinset
  automaticallyAdjustsContentInsets(): cocoascript.BOOL;
  setAutomaticallyAdjustsContentInsets(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403461-contentinsets
  contentInsets(): cocoascript.NSEdgeInsets;
  setContentInsets(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403529-scrollerinsets
  scrollerInsets(): cocoascript.NSEdgeInsets;
  setScrollerInsets(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403544-scrollerknobstyle
  scrollerKnobStyle(): cocoascript.NSScrollerKnobStyle;
  setScrollerKnobStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403520-scrollerstyle
  scrollerStyle(): cocoascript.NSScrollerStyle;
  setScrollerStyle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403454-linescroll
  lineScroll(): cocoascript.CGFloat;
  setLineScroll(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403539-horizontallinescroll
  horizontalLineScroll(): cocoascript.CGFloat;
  setHorizontalLineScroll(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403490-verticallinescroll
  verticalLineScroll(): cocoascript.CGFloat;
  setVerticalLineScroll(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403449-pagescroll
  pageScroll(): cocoascript.CGFloat;
  setPageScroll(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403478-horizontalpagescroll
  horizontalPageScroll(): cocoascript.CGFloat;
  setHorizontalPageScroll(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403512-verticalpagescroll
  verticalPageScroll(): cocoascript.CGFloat;
  setVerticalPageScroll(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403519-scrollsdynamically
  scrollsDynamically(): cocoascript.BOOL;
  setScrollsDynamically(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403494-scrollwheel
  scrollWheel(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403534-reflectscrolledclipview
  reflectScrolledClipView(cView: cocoascript.NSClipView):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403509-tile
  tile():void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403501-findbarposition
  findBarPosition(): cocoascript.NSScrollViewFindBarPosition;
  setFindBarPosition(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403489-usespredominantaxisscrolling
  usesPredominantAxisScrolling(): cocoascript.BOOL;
  setUsesPredominantAxisScrolling(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403540-horizontalscrollelasticity
  horizontalScrollElasticity(): cocoascript.NSScrollElasticity;
  setHorizontalScrollElasticity(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403475-verticalscrollelasticity
  verticalScrollElasticity(): cocoascript.NSScrollElasticity;
  setVerticalScrollElasticity(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403460-flashscrollers
  flashScrollers():void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403531-allowsmagnification
  allowsMagnification(): cocoascript.BOOL;
  setAllowsMagnification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403497-magnification
  magnification(): cocoascript.CGFloat;
  setMagnification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403508-magnifytofitrect
  magnifyToFitRect(rect: cocoascript.NSRect):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403510-maxmagnification
  maxMagnification(): cocoascript.CGFloat;
  setMaxMagnification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403524-minmagnification
  minMagnification(): cocoascript.CGFloat;
  setMinMagnification(): void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403459-setmagnification
  setMagnification_centeredAtPoint(magnification: cocoascript.CGFloat, point: cocoascript.NSPoint):void;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403527-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSScrollView;
  // doc://com.apple.documentation/documentation/appkit/nsscrollview/1403450-initwithframe
  initWithFrame(frameRect: cocoascript.NSRect):cocoascript.NSScrollView;
  // 
  alloc():cocoascript.NSScrollView;
  // 
  init():cocoascript.NSScrollView;
}
}
declare const NSScrollView: cocoascript.NSScrollView;

