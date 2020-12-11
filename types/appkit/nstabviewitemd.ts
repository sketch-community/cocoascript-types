declare namespace cocoascript {
  /**
   * An item in a tab view.
   * doc://com.apple.documentation/documentation/appkit/nstabviewitem
   */
  interface NSTabViewItem extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477533-initwithidentifier
    initWithIdentifier(identifier: cocoascript.NSTabViewItem):cocoascript.NSTabViewItem;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477523-drawlabel
    drawLabel_inRect(shouldTruncateLabel: cocoascript.BOOL, labelRect: cocoascript.NSRect):void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477542-label
    label(): cocoascript.NSString;
    setLabel(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477513-sizeoflabel
    sizeOfLabel(computeMin: cocoascript.BOOL):cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477539-tabstate
    tabState(): cocoascript.NSTabState;
    setTabState(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477529-identifier
    identifier(): cocoascript.id;
    setIdentifier(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477525-color
    color(): cocoascript.NSColor;
    setColor(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477537-view
    view(): cocoascript.NSView;
    setView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477541-initialfirstresponder
    initialFirstResponder(): cocoascript.NSView;
    setInitialFirstResponder(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477535-tabview
    tabView(): cocoascript.NSTabView;
    setTabView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477515-tooltip
    toolTip(): cocoascript.NSString;
    setToolTip(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477527-image
    image(): cocoascript.NSImage;
    setImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nstabviewitem/1477521-viewcontroller
    viewController(): cocoascript.NSViewController;
    setViewController(): void;
    //
    alloc():cocoascript.NSTabViewItem;
    //
    init():cocoascript.NSTabViewItem;
  }
}

declare const NSTabViewItem: cocoascript.NSTabViewItem;
