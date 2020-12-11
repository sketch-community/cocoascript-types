declare namespace cocoascript {
  /**
   * A set of methods that provides support for animations associated with a view controller transition.
   * doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinator
   */
  interface UIViewControllerTransitionCoordinator extends UIViewControllerTransitionCoordinatorContext {
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinator/1619300-animatealongsidetransition
    animateAlongsideTransition_completion(animation: cocoascript.UIViewControllerTransitionCoordinatorContext, completion: cocoascript.UIViewControllerTransitionCoordinatorContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinator/1619295-animatealongsidetransitioninview
    animateAlongsideTransitionInView_animation_completion(view: cocoascript.UIView, animation: cocoascript.UIViewControllerTransitionCoordinatorContext, completion: cocoascript.UIViewControllerTransitionCoordinatorContext):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinator/1829391-notifywheninteractionchangesusin
    notifyWhenInteractionChangesUsingBlock(handler: cocoascript.UIViewControllerTransitionCoordinatorContext):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontrollertransitioncoordinator/1619292-notifywheninteractionendsusingbl
    notifyWhenInteractionEndsUsingBlock(handler: cocoascript.UIViewControllerTransitionCoordinatorContext):void;
  }
}
