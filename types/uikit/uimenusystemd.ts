declare namespace cocoascript {
  /**
   * An object representing a main or contextual menu system.
   * doc://com.apple.documentation/documentation/uikit/uimenusystem
   */
  interface UIMenuSystem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uimenusystem/3327314-mainsystem
    mainSystem(): cocoascript.UIMenuSystem;
    setMainSystem(): void;
    // doc://com.apple.documentation/documentation/uikit/uimenusystem/3327313-contextsystem
    contextSystem(): cocoascript.UIMenuSystem;
    setContextSystem(): void;
    // doc://com.apple.documentation/documentation/uikit/uimenusystem/3327315-setneedsrebuild
    setNeedsRebuild():void;
    // doc://com.apple.documentation/documentation/uikit/uimenusystem/3327316-setneedsrevalidate
    setNeedsRevalidate():void;
    //
    alloc():cocoascript.UIMenuSystem;
    //
    init():cocoascript.UIMenuSystem;
  }
}

declare const UIMenuSystem: cocoascript.UIMenuSystem;
