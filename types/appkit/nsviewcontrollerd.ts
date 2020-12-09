declare namespace cocoascript {
/**
 * A controller that manages a view, typically loaded from a nib file.
 * doc://com.apple.documentation/documentation/appkit/nsviewcontroller
 */
interface NSViewController extends NSResponder {
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434481-initwithnibname
  initWithNibName_bundle(nibNameOrNil: cocoascript.NSNibName, nibBundleOrNil: cocoascript.NSBundle):cocoascript.NSViewController;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434405-loadview
  loadView():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434453-representedobject
  representedObject(): cocoascript.id;
  setRepresentedObject(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434433-nibbundle
  nibBundle(): cocoascript.NSBundle;
  setNibBundle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434472-nibname
  nibName(): cocoascript.NSNibName;
  setNibName(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434401-view
  view(): cocoascript.NSView;
  setView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434426-title
  title(): cocoascript.NSString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434464-commiteditingwithdelegate
  commitEditingWithDelegate_didCommitSelector_contextInfo(delegate: cocoascript.NSViewController, didCommitSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434485-commitediting
  commitEditing():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434487-discardediting
  discardEditing():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434499-storyboard
  storyboard(): cocoascript.NSStoryboard;
  setStoryboard(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434447-dismisscontroller
  dismissController(sender: cocoascript.NSViewController):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434476-viewdidload
  viewDidLoad():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434435-viewloaded
  viewLoaded(): cocoascript.BOOL;
  setViewLoaded(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434415-viewwillappear
  viewWillAppear():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434455-viewdidappear
  viewDidAppear():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434483-viewwilldisappear
  viewWillDisappear():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434416-viewdiddisappear
  viewDidDisappear():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434409-preferredcontentsize
  preferredContentSize(): cocoascript.NSSize;
  setPreferredContentSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434400-updateviewconstraints
  updateViewConstraints():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434495-viewwilllayout
  viewWillLayout():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434451-viewdidlayout
  viewDidLayout():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434501-addchildviewcontroller
  addChildViewController(childViewController: cocoascript.NSViewController):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434432-childviewcontrollers
  childViewControllers(): cocoascript.NSViewController;
  setChildViewControllers(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434407-transitionfromviewcontroller
  transitionFromViewController_toViewController_options_completionHandler(fromViewController: cocoascript.NSViewController, toViewController: cocoascript.NSViewController, options: cocoascript.NSViewControllerTransitionOptions, completion: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434437-insertchildviewcontroller
  insertChildViewController_atIndex(childViewController: cocoascript.NSViewController, index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434404-removechildviewcontrolleratindex
  removeChildViewControllerAtIndex(index: cocoascript.NSInteger):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434466-removefromparentviewcontroller
  removeFromParentViewController():void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434434-preferredcontentsizedidchangefor
  preferredContentSizeDidChangeForViewController(viewController: cocoascript.NSViewController):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434431-presentviewcontroller
  presentViewController_animator(viewController: cocoascript.NSViewController, animator: cocoascript.NSViewControllerPresentationAnimator):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434413-dismissviewcontroller
  dismissViewController(viewController: cocoascript.NSViewController):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434422-presentviewcontroller
  presentViewController_asPopoverRelativeToRect_ofView_preferredEdge_behavior(viewController: cocoascript.NSViewController, positioningRect: cocoascript.NSRect, positioningView: cocoascript.NSView, preferredEdge: cocoascript.NSRectEdge, behavior: cocoascript.NSPopoverBehavior):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434462-presentviewcontrollerasmodalwind
  presentViewControllerAsModalWindow(viewController: cocoascript.NSViewController):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434489-presentviewcontrollerassheet
  presentViewControllerAsSheet(viewController: cocoascript.NSViewController):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434491-parentviewcontroller
  parentViewController(): cocoascript.NSViewController;
  setParentViewController(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434497-presentedviewcontrollers
  presentedViewControllers(): cocoascript.NSViewController;
  setPresentedViewControllers(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434439-presentingviewcontroller
  presentingViewController(): cocoascript.NSViewController;
  setPresentingViewController(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434457-extensioncontext
  extensionContext(): cocoascript.NSExtensionContext;
  setExtensionContext(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434468-preferredscreenorigin
  preferredScreenOrigin(): cocoascript.NSPoint;
  setPreferredScreenOrigin(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434403-preferredmaximumsize
  preferredMaximumSize(): cocoascript.NSSize;
  setPreferredMaximumSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434418-preferredminimumsize
  preferredMinimumSize(): cocoascript.NSSize;
  setPreferredMinimumSize(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434443-viewwilltransitiontosize
  viewWillTransitionToSize(newSize: cocoascript.NSSize):void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434479-sourceitemview
  sourceItemView(): cocoascript.NSView;
  setSourceItemView(): void;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1434441-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSViewController;
  // doc://com.apple.documentation/documentation/appkit/nsviewcontroller/1490260-presentviewcontrollerinwidget
  presentViewControllerInWidget(viewController: cocoascript.NSViewController):void;
  // 
  alloc():cocoascript.NSViewController;
  // 
  init():cocoascript.NSViewController;
}
}
declare const NSViewController: cocoascript.NSViewController;

