declare namespace cocoascript {
  /**
   * A container view controller that implements a hierarchical interface.
   * doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller
   */
  interface UISplitViewController extends UIViewController {
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580906-initwithstyle
    initWithStyle(style: cocoascript.UISplitViewControllerStyle):cocoascript.UISplitViewController;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580905-initwithnibname
    initWithNibName_bundle(nibNameOrNil: cocoascript.NSString, nibBundleOrNil: cocoascript.NSBundle):cocoascript.UISplitViewController;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580904-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UISplitViewController;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580915-style
    style(): cocoascript.UISplitViewControllerStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623167-delegate
    delegate(): cocoascript.UISplitViewControllerDelegate;
    setDelegate(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580911-setviewcontroller
    setViewController_forColumn(vc: cocoascript.UIViewController, column: cocoascript.UISplitViewControllerColumn):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580917-viewcontrollerforcolumn
    viewControllerForColumn(column: cocoascript.UISplitViewControllerColumn):cocoascript.UIViewController;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623181-viewcontrollers
    viewControllers(): cocoascript.UIViewController;
    setViewControllers(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580912-showcolumn
    showColumn(column: cocoascript.UISplitViewControllerColumn):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580903-hidecolumn
    hideColumn(column: cocoascript.UISplitViewControllerColumn):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623199-showviewcontroller
    showViewController_sender(vc: cocoascript.UIViewController, sender: cocoascript.UISplitViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623182-showdetailviewcontroller
    showDetailViewController_sender(vc: cocoascript.UIViewController, sender: cocoascript.UISplitViewController):void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623170-preferreddisplaymode
    preferredDisplayMode(): cocoascript.UISplitViewControllerDisplayMode;
    setPreferredDisplayMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623194-displaymode
    displayMode(): cocoascript.UISplitViewControllerDisplayMode;
    setDisplayMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623196-displaymodebuttonitem
    displayModeButtonItem(): cocoascript.UIBarButtonItem;
    setDisplayModeButtonItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623171-presentswithgesture
    presentsWithGesture(): cocoascript.BOOL;
    setPresentsWithGesture(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580913-showssecondaryonlybutton
    showsSecondaryOnlyButton(): cocoascript.BOOL;
    setShowsSecondaryOnlyButton(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580909-preferredsplitbehavior
    preferredSplitBehavior(): cocoascript.UISplitViewControllerSplitBehavior;
    setPreferredSplitBehavior(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580914-splitbehavior
    splitBehavior(): cocoascript.UISplitViewControllerSplitBehavior;
    setSplitBehavior(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623185-collapsed
    collapsed(): cocoascript.BOOL;
    setCollapsed(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623183-preferredprimarycolumnwidthfract
    preferredPrimaryColumnWidthFraction(): cocoascript.CGFloat;
    setPreferredPrimaryColumnWidthFraction(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3650234-preferredprimarycolumnwidth
    preferredPrimaryColumnWidth(): cocoascript.CGFloat;
    setPreferredPrimaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623200-primarycolumnwidth
    primaryColumnWidth(): cocoascript.CGFloat;
    setPrimaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623198-minimumprimarycolumnwidth
    minimumPrimaryColumnWidth(): cocoascript.CGFloat;
    setMinimumPrimaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/1623180-maximumprimarycolumnwidth
    maximumPrimaryColumnWidth(): cocoascript.CGFloat;
    setMaximumPrimaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580910-preferredsupplementarycolumnwidt
    preferredSupplementaryColumnWidthFraction(): cocoascript.CGFloat;
    setPreferredSupplementaryColumnWidthFraction(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3650235-preferredsupplementarycolumnwidt
    preferredSupplementaryColumnWidth(): cocoascript.CGFloat;
    setPreferredSupplementaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580916-supplementarycolumnwidth
    supplementaryColumnWidth(): cocoascript.CGFloat;
    setSupplementaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580908-minimumsupplementarycolumnwidth
    minimumSupplementaryColumnWidth(): cocoascript.CGFloat;
    setMinimumSupplementaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3580907-maximumsupplementarycolumnwidth
    maximumSupplementaryColumnWidth(): cocoascript.CGFloat;
    setMaximumSupplementaryColumnWidth(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/2875524-primaryedge
    primaryEdge(): cocoascript.UISplitViewControllerPrimaryEdge;
    setPrimaryEdge(): void;
    // doc://com.apple.documentation/documentation/uikit/uisplitviewcontroller/3238075-primarybackgroundstyle
    primaryBackgroundStyle(): cocoascript.UISplitViewControllerBackgroundStyle;
    setPrimaryBackgroundStyle(): void;
    //
    alloc():cocoascript.UISplitViewController;
    //
    init():cocoascript.UISplitViewController;
  }
}

declare const UISplitViewController: cocoascript.UISplitViewController;
