declare namespace cocoascript {
  /**
   * An object that manages a view hierarchy for your UIKit app.
   * doc://com.apple.documentation/documentation/uikit/uiviewcontroller
   */
  interface UIViewController extends UIResponder {
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621359-initwithnibname
    initWithNibName_bundle(nibNameOrNil: cocoascript.NSString, nibBundleOrNil: cocoascript.NSBundle):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621403-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621399-storyboard
    storyboard(): cocoascript.UIStoryboard;
    setStoryboard(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621487-nibname
    nibName(): cocoascript.NSString;
    setNibName(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621489-nibbundle
    nibBundle(): cocoascript.NSBundle;
    setNibBundle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621460-view
    view(): cocoascript.UIView;
    setView(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621360-viewifloaded
    viewIfLoaded(): cocoascript.UIView;
    setViewIfLoaded(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2097563-viewloaded
    viewLoaded(): cocoascript.BOOL;
    setViewLoaded(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621454-loadview
    loadView():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621495-viewdidload
    viewDidLoad():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621446-loadviewifneeded
    loadViewIfNeeded():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621364-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621476-preferredcontentsize
    preferredContentSize(): cocoascript.CGSize;
    setPreferredContentSize(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621510-viewwillappear
    viewWillAppear(animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621423-viewdidappear
    viewDidAppear(animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621485-viewwilldisappear
    viewWillDisappear(animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621477-viewdiddisappear
    viewDidDisappear(animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2097562-beingdismissed
    beingDismissed(): cocoascript.BOOL;
    setBeingDismissed(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2097564-beingpresented
    beingPresented(): cocoascript.BOOL;
    setBeingPresented(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2097565-movingfromparentviewcontroller
    movingFromParentViewController(): cocoascript.BOOL;
    setMovingFromParentViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2097561-movingtoparentviewcontroller
    movingToParentViewController(): cocoascript.BOOL;
    setMovingToParentViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2902284-additionalsafeareainsets
    additionalSafeAreaInsets(): cocoascript.UIEdgeInsets;
    setAdditionalSafeAreaInsets(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2891116-viewsafeareainsetsdidchange
    viewSafeAreaInsetsDidChange():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2891115-viewrespectssystemminimumlayoutm
    viewRespectsSystemMinimumLayoutMargins(): cocoascript.BOOL;
    setViewRespectsSystemMinimumLayoutMargins(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2865908-systemminimumlayoutmargins
    systemMinimumLayoutMargins(): cocoascript.NSDirectionalEdgeInsets;
    setSystemMinimumLayoutMargins(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2891114-viewlayoutmarginsdidchange
    viewLayoutMarginsDidChange():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621515-edgesforextendedlayout
    edgesForExtendedLayout(): cocoascript.UIRectEdge;
    setEdgesForExtendedLayout(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621404-extendedlayoutincludesopaquebars
    extendedLayoutIncludesOpaqueBars(): cocoascript.BOOL;
    setExtendedLayoutIncludesOpaqueBars(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621437-viewwilllayoutsubviews
    viewWillLayoutSubviews():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621398-viewdidlayoutsubviews
    viewDidLayoutSubviews():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621379-updateviewconstraints
    updateViewConstraints():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621419-shouldautorotate
    shouldAutorotate(): cocoascript.BOOL;
    setShouldAutorotate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621435-supportedinterfaceorientations
    supportedInterfaceOrientations(): cocoascript.UIInterfaceOrientationMask;
    setSupportedInterfaceOrientations(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621438-preferredinterfaceorientationfor
    preferredInterfaceOrientationForPresentation(): cocoascript.UIInterfaceOrientation;
    setPreferredInterfaceOrientationForPresentation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621502-shouldperformseguewithidentifier
    shouldPerformSegueWithIdentifier_sender(identifier: cocoascript.NSString, sender: cocoascript.UIViewController):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621490-prepareforsegue
    prepareForSegue_sender(segue: cocoascript.UIStoryboardSegue, sender: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621413-performseguewithidentifier
    performSegueWithIdentifier_sender(identifier: cocoascript.NSString, sender: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621371-allowedchildviewcontrollersforun
    allowedChildViewControllersForUnwindingFromSource(source: cocoascript.UIStoryboardUnwindSegueSource):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621384-childviewcontrollercontainingseg
    childViewControllerContainingSegueSource(source: cocoascript.UIStoryboardUnwindSegueSource):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3089101-canperformunwindsegueaction
    canPerformUnwindSegueAction_fromViewController_sender(action: cocoascript.SEL, fromViewController: cocoascript.UIViewController, sender: cocoascript.UIViewController):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621473-unwindforsegue
    unwindForSegue_towardsViewController(unwindSegue: cocoascript.UIStoryboardSegue, subsequentVC: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621377-showviewcontroller
    showViewController_sender(vc: cocoascript.UIViewController, sender: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621432-showdetailviewcontroller
    showDetailViewController_sender(vc: cocoascript.UIViewController, sender: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621380-presentviewcontroller
    presentViewController_animated_completion(viewControllerToPresent: cocoascript.UIViewController, flag: cocoascript.BOOL, completion: void):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621505-dismissviewcontrolleranimated
    dismissViewControllerAnimated_completion(flag: cocoascript.BOOL, completion: void):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621355-modalpresentationstyle
    modalPresentationStyle(): cocoascript.UIModalPresentationStyle;
    setModalPresentationStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621388-modaltransitionstyle
    modalTransitionStyle(): cocoascript.UIModalTransitionStyle;
    setModalTransitionStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3229894-modalinpresentation
    modalInPresentation(): cocoascript.BOOL;
    setModalInPresentation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621456-definespresentationcontext
    definesPresentationContext(): cocoascript.BOOL;
    setDefinesPresentationContext(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621356-providespresentationcontexttrans
    providesPresentationContextTransitionStyle(): cocoascript.BOOL;
    setProvidesPresentationContextTransitionStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621385-disablesautomatickeyboarddismiss
    disablesAutomaticKeyboardDismissal(): cocoascript.BOOL;
    setDisablesAutomaticKeyboardDismissal(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621421-transitioningdelegate
    transitioningDelegate(): cocoascript.UIViewControllerTransitioningDelegate;
    setTransitioningDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1619294-transitioncoordinator
    transitionCoordinator(): cocoascript.UIViewControllerTransitionCoordinator;
    setTransitionCoordinator(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621415-targetviewcontrollerforaction
    targetViewControllerForAction_sender(action: cocoascript.SEL, sender: cocoascript.UIViewController):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621426-presentationcontroller
    presentationController(): cocoascript.UIPresentationController;
    setPresentationController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621428-popoverpresentationcontroller
    popoverPresentationController(): cocoascript.UIPopoverPresentationController;
    setPopoverPresentationController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1829440-restoresfocusaftertransition
    restoresFocusAfterTransition(): cocoascript.BOOL;
    setRestoresFocusAfterTransition(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1623193-collapsesecondaryviewcontroller
    collapseSecondaryViewController_forSplitViewController(secondaryViewController: cocoascript.UIViewController, splitViewController: cocoascript.UISplitViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1623191-separatesecondaryviewcontrollerf
    separateSecondaryViewControllerForSplitViewController(splitViewController: cocoascript.UISplitViewController):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3238087-overrideuserinterfacestyle
    overrideUserInterfaceStyle(): cocoascript.UIUserInterfaceStyle;
    setOverrideUserInterfaceStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2909093-preferreduserinterfacestyle
    preferredUserInterfaceStyle(): cocoascript.UIUserInterfaceStyle;
    setPreferredUserInterfaceStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2909095-childviewcontrollerforuserinterf
    childViewControllerForUserInterfaceStyle(): cocoascript.UIViewController;
    setChildViewControllerForUserInterfaceStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2909094-setneedsuserinterfaceappearanceu
    setNeedsUserInterfaceAppearanceUpdate():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621452-childviewcontrollers
    childViewControllers(): cocoascript.UIViewController;
    setChildViewControllers(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621394-addchildviewcontroller
    addChildViewController(childController: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621425-removefromparentviewcontroller
    removeFromParentViewController():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621363-transitionfromviewcontroller
    transitionFromViewController_toViewController_duration_options_animations_completion(fromViewController: cocoascript.UIViewController, toViewController: cocoascript.UIViewController, duration: cocoascript.NSTimeInterval, options: cocoascript.UIViewAnimationOptions, animations: void, completion: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621389-shouldautomaticallyforwardappear
    shouldAutomaticallyForwardAppearanceMethods(): cocoascript.BOOL;
    setShouldAutomaticallyForwardAppearanceMethods(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621387-beginappearancetransition
    beginAppearanceTransition_animated(isAppearing: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621503-endappearancetransition
    endAppearanceTransition():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621406-setoverridetraitcollection
    setOverrideTraitCollection_forChildViewController(collection: cocoascript.UITraitCollection, childViewController: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621486-overridetraitcollectionforchildv
    overrideTraitCollectionForChildViewController(childViewController: cocoascript.UIViewController):cocoascript.UITraitCollection;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621381-willmovetoparentviewcontroller
    willMoveToParentViewController(parent: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621405-didmovetoparentviewcontroller
    didMoveToParentViewController(parent: cocoascript.UIViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621430-presentingviewcontroller
    presentingViewController(): cocoascript.UIViewController;
    setPresentingViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621407-presentedviewcontroller
    presentedViewController(): cocoascript.UIViewController;
    setPresentedViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621362-parentviewcontroller
    parentViewController(): cocoascript.UIViewController;
    setParentViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1623187-splitviewcontroller
    splitViewController(): cocoascript.UISplitViewController;
    setSplitViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621860-navigationcontroller
    navigationController(): cocoascript.UINavigationController;
    setNavigationController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621169-tabbarcontroller
    tabBarController(): cocoascript.UITabBarController;
    setTabBarController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621851-navigationitem
    navigationItem(): cocoascript.UINavigationItem;
    setNavigationItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621863-hidesbottombarwhenpushed
    hidesBottomBarWhenPushed(): cocoascript.BOOL;
    setHidesBottomBarWhenPushed(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621874-settoolbaritems
    setToolbarItems_animated(toolbarItems: cocoascript.UIBarButtonItem, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621867-toolbaritems
    toolbarItems(): cocoascript.UIBarButtonItem;
    setToolbarItems(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621175-tabbaritem
    tabBarItem(): cocoascript.UITabBarItem;
    setTabBarItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3152928-tabbarobservedscrollview
    tabBarObservedScrollView(): cocoascript.UIScrollView;
    setTabBarObservedScrollView(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621411-extensioncontext
    extensionContext(): cocoascript.NSExtensionContext;
    setExtensionContext(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2887512-preferredscreenedgesdeferringsys
    preferredScreenEdgesDeferringSystemGestures(): cocoascript.UIRectEdge;
    setPreferredScreenEdgesDeferringSystemGestures(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2887511-childviewcontrollerforscreenedge
    childViewControllerForScreenEdgesDeferringSystemGestures(): cocoascript.UIViewController;
    setChildViewControllerForScreenEdgesDeferringSystemGestures(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2887507-setneedsupdateofscreenedgesdefer
    setNeedsUpdateOfScreenEdgesDeferringSystemGestures():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2887510-prefershomeindicatorautohidden
    prefersHomeIndicatorAutoHidden(): cocoascript.BOOL;
    setPrefersHomeIndicatorAutoHidden(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2887508-childviewcontrollerforhomeindica
    childViewControllerForHomeIndicatorAutoHidden(): cocoascript.UIViewController;
    setChildViewControllerForHomeIndicatorAutoHidden(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/2887509-setneedsupdateofhomeindicatoraut
    setNeedsUpdateOfHomeIndicatorAutoHidden():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621451-childviewcontrollerforstatusbarh
    childViewControllerForStatusBarHidden(): cocoascript.UIViewController;
    setChildViewControllerForStatusBarHidden(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621433-childviewcontrollerforstatusbars
    childViewControllerForStatusBarStyle(): cocoascript.UIViewController;
    setChildViewControllerForStatusBarStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621416-preferredstatusbarstyle
    preferredStatusBarStyle(): cocoascript.UIStatusBarStyle;
    setPreferredStatusBarStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621440-prefersstatusbarhidden
    prefersStatusBarHidden(): cocoascript.BOOL;
    setPrefersStatusBarHidden(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621453-modalpresentationcapturesstatusb
    modalPresentationCapturesStatusBarAppearance(): cocoascript.BOOL;
    setModalPresentationCapturesStatusBarAppearance(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621434-preferredstatusbarupdateanimatio
    preferredStatusBarUpdateAnimation(): cocoascript.UIStatusBarAnimation;
    setPreferredStatusBarUpdateAnimation(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621354-setneedsstatusbarappearanceupdat
    setNeedsStatusBarAppearanceUpdate():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3375829-childviewcontrollerfortouchbar
    childViewControllerForTouchBar(): cocoascript.UIViewController;
    setChildViewControllerForTouchBar(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3375830-setneedstouchbarupdate
    setNeedsTouchBarUpdate():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3368164-performsactionswhilepresentingmo
    performsActionsWhilePresentingModally(): cocoascript.BOOL;
    setPerformsActionsWhilePresentingModally(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621439-addkeycommand
    addKeyCommand(keyCommand: cocoascript.UIKeyCommand):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621410-removekeycommand
    removeKeyCommand(keyCommand: cocoascript.UIKeyCommand):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621498-editing
    editing(): cocoascript.BOOL;
    setEditing(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621378-setediting
    setEditing_animated(editing: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621471-editbuttonitem
    editButtonItem(): cocoascript.UIBarButtonItem;
    setEditButtonItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621409-didreceivememorywarning
    didReceiveMemoryWarning():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621499-restorationidentifier
    restorationIdentifier(): cocoascript.NSString;
    setRestorationIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621472-restorationclass
    restorationClass(): cocoascript.UIViewControllerRestoration;
    setRestorationClass(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621461-encoderestorablestatewithcoder
    encodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621429-decoderestorablestatewithcoder
    decodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/1621482-applicationfinishedrestoringstat
    applicationFinishedRestoringState():void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3601234-childviewcontrollerforpointerloc
    childViewControllerForPointerLock(): cocoascript.UIViewController;
    setChildViewControllerForPointerLock(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3601235-preferspointerlocked
    prefersPointerLocked(): cocoascript.BOOL;
    setPrefersPointerLocked(): void;
    // doc://com.apple.documentation/documentation/uikit/uiviewcontroller/3601236-setneedsupdateofpreferspointerlo
    setNeedsUpdateOfPrefersPointerLocked():void;
    //
    alloc():cocoascript.UIViewController;
    //
    init():cocoascript.UIViewController;
  }
}

declare const UIViewController: cocoascript.UIViewController;
