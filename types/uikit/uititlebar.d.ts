declare namespace cocoascript {
  /**
   * An object that you use to configure the title bar of a window in a Mac app built with Mac Catalyst.
   * doc://com.apple.documentation/documentation/uikit/uititlebar
   */
  interface UITitlebar extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uititlebar/3664137-separatorstyle
    separatorStyle(): cocoascript.UITitlebarSeparatorStyle;
    setSeparatorStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uititlebar/3375824-titlevisibility
    titleVisibility(): cocoascript.UITitlebarTitleVisibility;
    setTitleVisibility(): void;
    // doc://com.apple.documentation/documentation/uikit/uititlebar/3375823-representedurl
    representedURL(): cocoascript.NSURL;
    setRepresentedURL(): void;
    // doc://com.apple.documentation/documentation/uikit/uititlebar/3375825-toolbar
    toolbar(): cocoascript.NSToolbar;
    setToolbar(): void;
    // doc://com.apple.documentation/documentation/uikit/uititlebar/3604076-toolbarstyle
    toolbarStyle(): cocoascript.UITitlebarToolbarStyle;
    setToolbarStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uititlebar/3375822-autohidestoolbarinfullscreen
    autoHidesToolbarInFullScreen(): cocoascript.BOOL;
    setAutoHidesToolbarInFullScreen(): void;
    //
    alloc():cocoascript.UITitlebar;
    //
    init():cocoascript.UITitlebar;
  }
}

declare const UITitlebar: cocoascript.UITitlebar;
