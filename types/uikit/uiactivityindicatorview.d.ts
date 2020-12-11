declare namespace cocoascript {
  /**
   * A view that shows that a task is in progress.
   * doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview
   */
  interface UIActivityIndicatorView extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622840-initwithactivityindicatorstyle
    initWithActivityIndicatorStyle(style: cocoascript.UIActivityIndicatorViewStyle):cocoascript.UIActivityIndicatorView;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622841-initwithframe
    initWithFrame(frame: cocoascript.CGRect):cocoascript.UIActivityIndicatorView;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622844-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIActivityIndicatorView;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622835-startanimating
    startAnimating():void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622842-stopanimating
    stopAnimating():void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/2097554-animating
    animating(): cocoascript.BOOL;
    setAnimating(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622837-hideswhenstopped
    hidesWhenStopped(): cocoascript.BOOL;
    setHidesWhenStopped(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622847-activityindicatorviewstyle
    activityIndicatorViewStyle(): cocoascript.UIActivityIndicatorViewStyle;
    setActivityIndicatorViewStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiactivityindicatorview/1622836-color
    color(): cocoascript.UIColor;
    setColor(): void;
    //
    alloc():cocoascript.UIActivityIndicatorView;
    //
    init():cocoascript.UIActivityIndicatorView;
  }
}

declare const UIActivityIndicatorView: cocoascript.UIActivityIndicatorView;
