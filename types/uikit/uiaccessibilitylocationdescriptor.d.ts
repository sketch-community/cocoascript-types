declare namespace cocoascript {
  /**
   * An accessibility descriptor for a specific geometric point of interest within a view, for use by assistive technologies.
   * doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor
   */
  interface UIAccessibilityLocationDescriptor extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor/2890955-initwithattributedname
    initWithAttributedName_point_inView(attributedName: cocoascript.NSAttributedString, point: cocoascript.CGPoint, view: cocoascript.UIView):cocoascript.UIAccessibilityLocationDescriptor;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor/2890962-initwithname
    initWithName_point_inView(name: cocoascript.NSString, point: cocoascript.CGPoint, view: cocoascript.UIView):cocoascript.UIAccessibilityLocationDescriptor;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor/2890958-initwithname
    initWithName_view(name: cocoascript.NSString, view: cocoascript.UIView):cocoascript.UIAccessibilityLocationDescriptor;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor/2890959-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor/2890960-attributedname
    attributedName(): cocoascript.NSAttributedString;
    setAttributedName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor/2890956-point
    point(): cocoascript.CGPoint;
    setPoint(): void;
    // doc://com.apple.documentation/documentation/uikit/uiaccessibilitylocationdescriptor/2890961-view
    view(): cocoascript.UIView;
    setView(): void;
    //
    alloc():cocoascript.UIAccessibilityLocationDescriptor;
    //
    init():cocoascript.UIAccessibilityLocationDescriptor;
  }
}

declare const UIAccessibilityLocationDescriptor: cocoascript.UIAccessibilityLocationDescriptor;
