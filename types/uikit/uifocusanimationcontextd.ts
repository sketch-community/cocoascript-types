declare namespace cocoascript {
/**
 * Information about focusing animations being performed by the system.
 * doc://com.apple.documentation/documentation/uikit/uifocusanimationcontext
 */
interface UIFocusAnimationContext extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uifocusanimationcontext/2887568-duration
  duration(): cocoascript.NSTimeInterval;
  setDuration(): void;
}
}

