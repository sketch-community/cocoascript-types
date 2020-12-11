declare namespace cocoascript {
  /**
   * An effect that alters a view's appearance when a pointer enters the current region.
   * doc://com.apple.documentation/documentation/uikit/uipointereffect
   */
  interface UIPointerEffect extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uipointereffect/3539008-preview
    preview(): cocoascript.UITargetedPreview;
    setPreview(): void;
    //
    alloc():cocoascript.UIPointerEffect;
    //
    init():cocoascript.UIPointerEffect;
  }
}

declare const UIPointerEffect: cocoascript.UIPointerEffect;
