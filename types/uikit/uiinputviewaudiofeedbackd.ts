declare namespace cocoascript {
/**
 * A property that enables a custom input or keyboard accessory view to play standard keyboard input clicks.
 * doc://com.apple.documentation/documentation/uikit/uiinputviewaudiofeedback
 */
interface UIInputViewAudioFeedback extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uiinputviewaudiofeedback/1620038-enableinputclickswhenvisible
  enableInputClicksWhenVisible(): cocoascript.BOOL;
  setEnableInputClicksWhenVisible(): void;
}
}

