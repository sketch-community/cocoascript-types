declare namespace cocoascript {
  /**
   * A streamlined interface for laying out a collection of views in either a column or a row.
   * doc://com.apple.documentation/documentation/uikit/uistackview
   */
  interface UIStackView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616240-initwitharrangedsubviews
    initWithArrangedSubviews(views: cocoascript.UIView):cocoascript.UIStackView;
    // doc://com.apple.documentation/documentation/uikit/uistackview/2097542-initwithframe
    initWithFrame(frame: cocoascript.CGRect):cocoascript.UIStackView;
    // doc://com.apple.documentation/documentation/uikit/uistackview/2097541-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIStackView;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616227-addarrangedsubview
    addArrangedSubview(view: cocoascript.UIView):void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616232-arrangedsubviews
    arrangedSubviews(): cocoascript.UIView;
    setArrangedSubviews(): void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616237-insertarrangedsubview
    insertArrangedSubview_atIndex(view: cocoascript.UIView, stackIndex: cocoascript.NSUInteger):void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616235-removearrangedsubview
    removeArrangedSubview(view: cocoascript.UIView):void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616243-alignment
    alignment(): cocoascript.UIStackViewAlignment;
    setAlignment(): void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616223-axis
    axis(): cocoascript.UILayoutConstraintAxis;
    setAxis(): void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616224-baselinerelativearrangement
    baselineRelativeArrangement(): cocoascript.BOOL;
    setBaselineRelativeArrangement(): void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616233-distribution
    distribution(): cocoascript.UIStackViewDistribution;
    setDistribution(): void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616220-layoutmarginsrelativearrangement
    layoutMarginsRelativeArrangement(): cocoascript.BOOL;
    setLayoutMarginsRelativeArrangement(): void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/1616225-spacing
    spacing(): cocoascript.CGFloat;
    setSpacing(): void;
    // doc://com.apple.documentation/documentation/uikit/uistackview/2865827-customspacingafterview
    customSpacingAfterView(arrangedSubview: cocoascript.UIView):cocoascript.CGFloat;
    // doc://com.apple.documentation/documentation/uikit/uistackview/2866023-setcustomspacing
    setCustomSpacing_afterView(spacing: cocoascript.CGFloat, arrangedSubview: cocoascript.UIView):void;
    //
    alloc():cocoascript.UIStackView;
    //
    init():cocoascript.UIStackView;
  }
}

declare const UIStackView: cocoascript.UIStackView;
