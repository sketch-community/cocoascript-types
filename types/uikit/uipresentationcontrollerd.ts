declare namespace cocoascript {
  /**
   * An object that manages the transition animations and the presentation of view controllers onscreen.
   * doc://com.apple.documentation/documentation/uikit/uipresentationcontroller
   */
  interface UIPresentationController extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618328-initwithpresentedviewcontroller
    initWithPresentedViewController_presentingViewController(presentedViewController: cocoascript.UIViewController, presentingViewController: cocoascript.UIViewController):cocoascript.UIPresentationController;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618329-delegate
    delegate(): cocoascript.UIAdaptivePresentationControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618338-presentingviewcontroller
    presentingViewController(): cocoascript.UIViewController;
    setPresentingViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618322-presentedviewcontroller
    presentedViewController(): cocoascript.UIViewController;
    setPresentedViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618332-containerview
    containerView(): cocoascript.UIView;
    setContainerView(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618321-presentedview
    presentedView(): cocoascript.UIView;
    setPresentedView(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618337-frameofpresentedviewincontainerv
    frameOfPresentedViewInContainerView(): cocoascript.CGRect;
    setFrameOfPresentedViewInContainerView(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618335-overridetraitcollection
    overrideTraitCollection(): cocoascript.UITraitCollection;
    setOverrideTraitCollection(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618341-containerviewwilllayoutsubviews
    containerViewWillLayoutSubviews():void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618331-containerviewdidlayoutsubviews
    containerViewDidLayoutSubviews():void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618330-presentationtransitionwillbegin
    presentationTransitionWillBegin():void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618327-presentationtransitiondidend
    presentationTransitionDidEnd(completed: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618342-dismissaltransitionwillbegin
    dismissalTransitionWillBegin():void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618323-dismissaltransitiondidend
    dismissalTransitionDidEnd(completed: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618320-presentationstyle
    presentationStyle(): cocoascript.UIModalPresentationStyle;
    setPresentationStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618325-adaptivepresentationstylefortrai
    adaptivePresentationStyleForTraitCollection(traitCollection: cocoascript.UITraitCollection):cocoascript.UIModalPresentationStyle;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618340-adaptivepresentationstyle
    adaptivePresentationStyle(): cocoascript.UIModalPresentationStyle;
    setAdaptivePresentationStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618336-shouldpresentinfullscreen
    shouldPresentInFullscreen(): cocoascript.BOOL;
    setShouldPresentInFullscreen(): void;
    // doc://com.apple.documentation/documentation/uikit/uipresentationcontroller/1618319-shouldremovepresentersview
    shouldRemovePresentersView(): cocoascript.BOOL;
    setShouldRemovePresentersView(): void;
    //
    alloc():cocoascript.UIPresentationController;
    //
    init():cocoascript.UIPresentationController;
  }
}

declare const UIPresentationController: cocoascript.UIPresentationController;
