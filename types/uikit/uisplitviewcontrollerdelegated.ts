declare namespace cocoascript {
  /**
   * The methods adopted by the object you use to manage changes to a split view interface.
   * doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate
   */
  interface UISplitViewControllerDelegate {
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623169-splitviewcontrollerpreferredinte
    splitViewControllerPreferredInterfaceOrientationForPresentation(splitViewController: cocoascript.UISplitViewController):cocoascript.UIInterfaceOrientation;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623178-splitviewcontrollersupportedinte
    splitViewControllerSupportedInterfaceOrientations(splitViewController: cocoascript.UISplitViewController):cocoascript.UIInterfaceOrientationMask;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623176-splitviewcontroller
    splitViewController_willChangeToDisplayMode(svc: cocoascript.UISplitViewController, displayMode: cocoascript.UISplitViewControllerDisplayMode):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623192-targetdisplaymodeforactioninspli
    targetDisplayModeForActionInSplitViewController(svc: cocoascript.UISplitViewController):cocoascript.UISplitViewControllerDisplayMode;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3580925-splitviewcontroller
    splitViewController_topColumnForCollapsingToProposedTopColumn(svc: cocoascript.UISplitViewController, proposedTopColumn: cocoascript.UISplitViewControllerColumn):cocoascript.UISplitViewControllerColumn;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3580926-splitviewcontroller
    splitViewController_willHideColumn(svc: cocoascript.UISplitViewController, column: cocoascript.UISplitViewControllerColumn):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3580928-splitviewcontrollerdidcollapse
    splitViewControllerDidCollapse(svc: cocoascript.UISplitViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3580924-splitviewcontroller
    splitViewController_displayModeForExpandingToProposedDisplayMode(svc: cocoascript.UISplitViewController, proposedDisplayMode: cocoascript.UISplitViewControllerDisplayMode):cocoascript.UISplitViewControllerDisplayMode;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3580927-splitviewcontroller
    splitViewController_willShowColumn(svc: cocoascript.UISplitViewController, column: cocoascript.UISplitViewControllerColumn):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3580929-splitviewcontrollerdidexpand
    splitViewControllerDidExpand(svc: cocoascript.UISplitViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3650237-splitviewcontrollerinteractivepr
    splitViewControllerInteractivePresentationGestureWillBegin(svc: cocoascript.UISplitViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/3650236-splitviewcontrollerinteractivepr
    splitViewControllerInteractivePresentationGestureDidEnd(svc: cocoascript.UISplitViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623197-primaryviewcontrollerforcollapsi
    primaryViewControllerForCollapsingSplitViewController(splitViewController: cocoascript.UISplitViewController):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623184-splitviewcontroller
    splitViewController_collapseSecondaryViewController_ontoPrimaryViewController(splitViewController: cocoascript.UISplitViewController, secondaryViewController: cocoascript.UIViewController, primaryViewController: cocoascript.UIViewController):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623188-primaryviewcontrollerforexpandin
    primaryViewControllerForExpandingSplitViewController(splitViewController: cocoascript.UISplitViewController):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623189-splitviewcontroller
    splitViewController_separateSecondaryViewControllerFromPrimaryViewController(splitViewController: cocoascript.UISplitViewController, primaryViewController: cocoascript.UIViewController):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623168-splitviewcontroller
    splitViewController_showViewController_sender(splitViewController: cocoascript.UISplitViewController, vc: cocoascript.UIViewController, sender: cocoascript.UISplitViewControllerDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623204-splitviewcontroller
    splitViewController_showDetailViewController_sender(splitViewController: cocoascript.UISplitViewController, vc: cocoascript.UIViewController, sender: cocoascript.UISplitViewControllerDelegate):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623174-splitviewcontroller
    splitViewController_shouldHideViewController_inOrientation(svc: cocoascript.UISplitViewController, vc: cocoascript.UIViewController, orientation: cocoascript.UIInterfaceOrientation):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623175-splitviewcontroller
    splitViewController_willHideViewController_withBarButtonItem_forPopoverController(svc: cocoascript.UISplitViewController, aViewController: cocoascript.UIViewController, barButtonItem: cocoascript.UIBarButtonItem, pc: cocoascript.UIPopoverController):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623202-splitviewcontroller
    splitViewController_willShowViewController_invalidatingBarButtonItem(svc: cocoascript.UISplitViewController, aViewController: cocoascript.UIViewController, barButtonItem: cocoascript.UIBarButtonItem):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontrollerdelegate/1623186-splitviewcontroller
    splitViewController_popoverController_willPresentViewController(svc: cocoascript.UISplitViewController, pc: cocoascript.UIPopoverController, aViewController: cocoascript.UIViewController):void;
  }
}
