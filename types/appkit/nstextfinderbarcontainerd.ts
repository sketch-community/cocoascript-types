declare namespace cocoascript {
  /**
   * A protocol that provides a container in which the find bar is displayed.
   * doc://com.apple.documentation/documentation/appkit/nstextfinderbarcontainer
   */
  interface NSTextFinderBarContainer extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nstextfinderbarcontainer/1531692-findbarview
    findBarView(): cocoascript.NSView;
    setFindBarView(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinderbarcontainer/1532766-contentview
    contentView():cocoascript.NSView;
    // doc://com.apple.documentation/documentation/appkit/nstextfinderbarcontainer/1528587-findbarvisible
    findBarVisible(): cocoascript.BOOL;
    setFindBarVisible(): void;
    // doc://com.apple.documentation/documentation/appkit/nstextfinderbarcontainer/1529109-findbarviewdidchangeheight
    findBarViewDidChangeHeight():void;
  }
}
