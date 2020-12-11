declare namespace cocoascript {
  /**
   * An object containing the configuration details for the contextual menu.
   * doc://com.apple.documentation/documentation/uikit/uicontextmenuconfiguration
   */
  interface UIContextMenuConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uicontextmenuconfiguration/3295923-identifier
    identifier(): cocoascript.NSCopying;
    setIdentifier(): void;
    //
    alloc():cocoascript.UIContextMenuConfiguration;
    //
    init():cocoascript.UIContextMenuConfiguration;
  }
}

declare const UIContextMenuConfiguration: cocoascript.UIContextMenuConfiguration;
