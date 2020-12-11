declare namespace cocoascript {
  /**
   * A region where text layout occurs.
   * doc://com.apple.documentation/documentation/uikit/nstextcontainer
   */
  interface NSTextContainer extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444529-initwithsize
    initWithSize(size: cocoascript.CGSize):cocoascript.NSTextContainer;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444573-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSTextContainer;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444517-layoutmanager
    layoutManager(): cocoascript.NSLayoutManager;
    setLayoutManager(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444545-replacelayoutmanager
    replaceLayoutManager(newLayoutManager: cocoascript.NSLayoutManager):void;
    // doc://com.apple.documentation/documentation/appkit/nstextcontainer/1444537-textview
    textView(): cocoascript.NSTextView;
    setTextView(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444553-size
    size(): cocoascript.CGSize;
    setSize(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444569-exclusionpaths
    exclusionPaths(): cocoascript.UIBezierPath;
    setExclusionPaths(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444519-linebreakmode
    lineBreakMode(): cocoascript.NSLineBreakMode;
    setLineBreakMode(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444563-widthtrackstextview
    widthTracksTextView(): cocoascript.BOOL;
    setWidthTracksTextView(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444559-heighttrackstextview
    heightTracksTextView(): cocoascript.BOOL;
    setHeightTracksTextView(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444531-maximumnumberoflines
    maximumNumberOfLines(): cocoascript.NSUInteger;
    setMaximumNumberOfLines(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444527-linefragmentpadding
    lineFragmentPadding(): cocoascript.CGFloat;
    setLineFragmentPadding(): void;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444555-linefragmentrectforproposedrect
    lineFragmentRectForProposedRect_atIndex_writingDirection_remainingRect(proposedRect: cocoascript.CGRect, characterIndex: cocoascript.NSUInteger, baseWritingDirection: cocoascript.NSWritingDirection, remainingRect: cocoascript.CGRect):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/nstextcontainer/1444525-simplerectangulartextcontainer
    simpleRectangularTextContainer(): cocoascript.BOOL;
    setSimpleRectangularTextContainer(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextcontainer/1444543-initwithcontainersize
    initWithContainerSize(aContainerSize: cocoascript.NSSize):cocoascript.NSTextContainer;
    // doc://com.apple.documentation/documentation/appkit/nstextcontainer/1444571-linefragmentrectforproposedrect
    lineFragmentRectForProposedRect_sweepDirection_movementDirection_remainingRect(proposedRect: cocoascript.NSRect, sweepDirection: cocoascript.NSLineSweepDirection, movementDirection: cocoascript.NSLineMovementDirection, remainingRect: cocoascript.NSRectPointer):cocoascript.NSRect;
    // doc://com.apple.documentation/documentation/appkit/nstextcontainer/1444567-containspoint
    containsPoint(point: cocoascript.NSPoint):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/appkit/nstextcontainer/1444551-containersize
    containerSize(): cocoascript.NSSize;
    setContainerSize(): void;
    //
    alloc():cocoascript.NSTextContainer;
    //
    init():cocoascript.NSTextContainer;
  }
}

declare const NSTextContainer: cocoascript.NSTextContainer;
