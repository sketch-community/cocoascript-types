declare namespace cocoascript {
/**
 * The methods declared by the 
 * doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate
 */
interface UIScrollViewDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619392-scrollviewdidscroll
  scrollViewDidScroll(scrollView: cocoascript.UIScrollView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619394-scrollviewwillbegindragging
  scrollViewWillBeginDragging(scrollView: cocoascript.UIScrollView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619385-scrollviewwillenddragging
  scrollViewWillEndDragging_withVelocity_targetContentOffset(scrollView: cocoascript.UIScrollView, velocity: cocoascript.CGPoint, targetContentOffset: cocoascript.CGPoint):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619436-scrollviewdidenddragging
  scrollViewDidEndDragging_willDecelerate(scrollView: cocoascript.UIScrollView, decelerate: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619378-scrollviewshouldscrolltotop
  scrollViewShouldScrollToTop(scrollView: cocoascript.UIScrollView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619382-scrollviewdidscrolltotop
  scrollViewDidScrollToTop(scrollView: cocoascript.UIScrollView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619386-scrollviewwillbegindecelerating
  scrollViewWillBeginDecelerating(scrollView: cocoascript.UIScrollView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619417-scrollviewdidenddecelerating
  scrollViewDidEndDecelerating(scrollView: cocoascript.UIScrollView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619426-viewforzoominginscrollview
  viewForZoomingInScrollView(scrollView: cocoascript.UIScrollView):cocoascript.UIView;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619396-scrollviewwillbeginzooming
  scrollViewWillBeginZooming_withView(scrollView: cocoascript.UIScrollView, view: cocoascript.UIView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619407-scrollviewdidendzooming
  scrollViewDidEndZooming_withView_atScale(scrollView: cocoascript.UIScrollView, view: cocoascript.UIView, scale: cocoascript.CGFloat):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619409-scrollviewdidzoom
  scrollViewDidZoom(scrollView: cocoascript.UIScrollView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/1619379-scrollviewdidendscrollinganimati
  scrollViewDidEndScrollingAnimation(scrollView: cocoascript.UIScrollView):void;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewdelegate/2902256-scrollviewdidchangeadjustedconte
  scrollViewDidChangeAdjustedContentInset(scrollView: cocoascript.UIScrollView):void;
}
}

