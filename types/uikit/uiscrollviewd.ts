declare namespace cocoascript {
  /**
   * A view that allows the scrolling and zooming of its contained views.
   * doc://com.apple.documentation/documentation/uikit/uiscrollview
   */
  interface UIScrollView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619430-delegate
    delegate(): cocoascript.UIScrollViewDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619399-contentsize
    contentSize(): cocoascript.CGSize;
    setContentSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619404-contentoffset
    contentOffset(): cocoascript.CGPoint;
    setContentOffset(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619400-setcontentoffset
    setContentOffset_animated(contentOffset: cocoascript.CGPoint, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/2902259-adjustedcontentinset
    adjustedContentInset(): cocoascript.UIEdgeInsets;
    setAdjustedContentInset(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619406-contentinset
    contentInset(): cocoascript.UIEdgeInsets;
    setContentInset(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/2902261-contentinsetadjustmentbehavior
    contentInsetAdjustmentBehavior(): cocoascript.UIScrollViewContentInsetAdjustmentBehavior;
    setContentInsetAdjustmentBehavior(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/2902254-adjustedcontentinsetdidchange
    adjustedContentInsetDidChange():void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/2865772-framelayoutguide
    frameLayoutGuide(): cocoascript.UILayoutGuide;
    setFrameLayoutGuide(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/2865870-contentlayoutguide
    contentLayoutGuide(): cocoascript.UILayoutGuide;
    setContentLayoutGuide(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619395-scrollenabled
    scrollEnabled(): cocoascript.BOOL;
    setScrollEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619390-directionallockenabled
    directionalLockEnabled(): cocoascript.BOOL;
    setDirectionalLockEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619432-pagingenabled
    pagingEnabled(): cocoascript.BOOL;
    setPagingEnabled(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619421-scrollstotop
    scrollsToTop(): cocoascript.BOOL;
    setScrollsToTop(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619420-bounces
    bounces(): cocoascript.BOOL;
    setBounces(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619383-alwaysbouncevertical
    alwaysBounceVertical(): cocoascript.BOOL;
    setAlwaysBounceVertical(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619393-alwaysbouncehorizontal
    alwaysBounceHorizontal(): cocoascript.BOOL;
    setAlwaysBounceHorizontal(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619413-tracking
    tracking(): cocoascript.BOOL;
    setTracking(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619384-dragging
    dragging(): cocoascript.BOOL;
    setDragging(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619434-decelerating
    decelerating(): cocoascript.BOOL;
    setDecelerating(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619438-decelerationrate
    decelerationRate(): cocoascript.UIScrollViewDecelerationRate;
    setDecelerationRate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619433-indicatorstyle
    indicatorStyle(): cocoascript.UIScrollViewIndicatorStyle;
    setIndicatorStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619427-scrollindicatorinsets
    scrollIndicatorInsets():cocoascript.UIEdgeInsets;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619380-showshorizontalscrollindicator
    showsHorizontalScrollIndicator(): cocoascript.BOOL;
    setShowsHorizontalScrollIndicator(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619405-showsverticalscrollindicator
    showsVerticalScrollIndicator(): cocoascript.BOOL;
    setShowsVerticalScrollIndicator(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619435-flashscrollindicators
    flashScrollIndicators():void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/2127691-refreshcontrol
    refreshControl(): cocoascript.UIRefreshControl;
    setRefreshControl(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619439-scrollrecttovisible
    scrollRectToVisible_animated(rect: cocoascript.CGRect, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619418-touchesshouldbegin
    touchesShouldBegin_withEvent_inContentView(touches: cocoascript.UITouch, event: cocoascript.UIEvent, view: cocoascript.UIView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619387-touchesshouldcancelincontentview
    touchesShouldCancelInContentView(view: cocoascript.UIView):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619424-cancancelcontenttouches
    canCancelContentTouches(): cocoascript.BOOL;
    setCanCancelContentTouches(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619398-delayscontenttouches
    delaysContentTouches(): cocoascript.BOOL;
    setDelaysContentTouches(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1627702-directionalpressgesturerecognize
    directionalPressGestureRecognizer(): cocoascript.UIGestureRecognizer;
    setDirectionalPressGestureRecognizer(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619425-pangesturerecognizer
    panGestureRecognizer(): cocoascript.UIPanGestureRecognizer;
    setPanGestureRecognizer(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619381-pinchgesturerecognizer
    pinchGestureRecognizer(): cocoascript.UIPinchGestureRecognizer;
    setPinchGestureRecognizer(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619388-zoomtorect
    zoomToRect_animated(rect: cocoascript.CGRect, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619419-zoomscale
    zoomScale(): cocoascript.CGFloat;
    setZoomScale(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619412-setzoomscale
    setZoomScale_animated(scale: cocoascript.CGFloat, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619408-maximumzoomscale
    maximumZoomScale(): cocoascript.CGFloat;
    setMaximumZoomScale(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619428-minimumzoomscale
    minimumZoomScale(): cocoascript.CGFloat;
    setMinimumZoomScale(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619423-zoombouncing
    zoomBouncing(): cocoascript.BOOL;
    setZoomBouncing(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619429-zooming
    zooming(): cocoascript.BOOL;
    setZooming(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619410-bounceszoom
    bouncesZoom(): cocoascript.BOOL;
    setBouncesZoom(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/1619437-keyboarddismissmode
    keyboardDismissMode(): cocoascript.UIScrollViewKeyboardDismissMode;
    setKeyboardDismissMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/2851452-indexdisplaymode
    indexDisplayMode(): cocoascript.UIScrollViewIndexDisplayMode;
    setIndexDisplayMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/3198043-automaticallyadjustsscrollindica
    automaticallyAdjustsScrollIndicatorInsets(): cocoascript.BOOL;
    setAutomaticallyAdjustsScrollIndicatorInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/3198044-horizontalscrollindicatorinsets
    horizontalScrollIndicatorInsets(): cocoascript.UIEdgeInsets;
    setHorizontalScrollIndicatorInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uiscrollview/3198045-verticalscrollindicatorinsets
    verticalScrollIndicatorInsets(): cocoascript.UIEdgeInsets;
    setVerticalScrollIndicatorInsets(): void;
    //
    alloc():cocoascript.UIScrollView;
    //
    init():cocoascript.UIScrollView;
  }
}

declare const UIScrollView: cocoascript.UIScrollView;
