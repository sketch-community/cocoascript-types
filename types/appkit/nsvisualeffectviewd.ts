declare namespace cocoascript {
  /**
   * A view that adds translucency and vibrancy effects to the views in your interface.
   * doc://com.apple.documentation/documentation/appkit/nsvisualeffectview
   */
  interface NSVisualEffectView extends NSView {
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1526623-material
    material(): cocoascript.NSVisualEffectMaterial;
    setMaterial(): void;
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1535468-blendingmode
    blendingMode(): cocoascript.NSVisualEffectBlendingMode;
    setBlendingMode(): void;
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1644721-emphasized
    emphasized(): cocoascript.BOOL;
    setEmphasized(): void;
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1529998-interiorbackgroundstyle
    interiorBackgroundStyle(): cocoascript.NSBackgroundStyle;
    setInteriorBackgroundStyle(): void;
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1535318-maskimage
    maskImage(): cocoascript.NSImage;
    setMaskImage(): void;
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1532403-state
    state(): cocoascript.NSVisualEffectState;
    setState(): void;
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1534300-viewdidmovetowindow
    viewDidMoveToWindow():void;
    // doc://com.apple.documentation/documentation/appkit/nsvisualeffectview/1534276-viewwillmovetowindow
    viewWillMoveToWindow(newWindow: cocoascript.NSWindow):void;
    //
    alloc():cocoascript.NSVisualEffectView;
    //
    init():cocoascript.NSVisualEffectView;
  }
}

declare const NSVisualEffectView: cocoascript.NSVisualEffectView;
