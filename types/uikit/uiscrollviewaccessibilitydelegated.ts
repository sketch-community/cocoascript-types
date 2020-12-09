declare namespace cocoascript {
/**
 * A set of methods you can implement to provide accessibility information for a scroll view.
 * doc://com.apple.documentation/documentation/uikit/uiscrollviewaccessibilitydelegate
 */
interface UIScrollViewAccessibilityDelegate extends UIScrollViewDelegate {
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewaccessibilitydelegate/1621055-accessibilityscrollstatusforscro
  accessibilityScrollStatusForScrollView(scrollView: cocoascript.UIScrollView):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/uikit/uiscrollviewaccessibilitydelegate/2865789-accessibilityattributedscrollsta
  accessibilityAttributedScrollStatusForScrollView(scrollView: cocoascript.UIScrollView):cocoascript.NSAttributedString;
}
}

