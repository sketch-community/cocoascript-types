declare namespace cocoascript {
  /**
   * The backdrop for your app’s user interface and the object that dispatches events to your views.
   * doc://com.apple.documentation/documentation/uikit/uiwindow
   */
  interface UIWindow extends UIView {
    // doc://com.apple.documentation/documentation/uikit/uiwindow/3197961-initwithwindowscene
    initWithWindowScene(windowScene: cocoascript.UIWindowScene):cocoascript.UIWindow;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621581-rootviewcontroller
    rootViewController(): cocoascript.UIViewController;
    setRootViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621593-windowlevel
    windowLevel(): cocoascript.UIWindowLevel;
    setWindowLevel(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621597-setscreen
    screen(): cocoascript.UIScreen;
    setScreen(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/3368165-canresizetofitcontent
    canResizeToFitContent(): cocoascript.BOOL;
    setCanResizeToFitContent(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621612-keywindow
    keyWindow(): cocoascript.BOOL;
    setKeyWindow(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621601-makekeyandvisible
    makeKeyAndVisible():void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621610-makekeywindow
    makeKeyWindow():void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621596-becomekeywindow
    becomeKeyWindow():void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621618-resignkeywindow
    resignKeyWindow():void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/3197962-windowscene
    windowScene(): cocoascript.UIWindowScene;
    setWindowScene(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/2935634-avdisplaymanager
    avDisplayManager(): cocoascript.AVDisplayManager;
    setAvDisplayManager(): void;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621589-convertpoint
    convertPoint_toWindow(point: cocoascript.CGPoint, window: cocoascript.UIWindow):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621583-convertpoint
    convertPoint_fromWindow(point: cocoascript.CGPoint, window: cocoascript.UIWindow):cocoascript.CGPoint;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621609-convertrect
    convertRect_toWindow(rect: cocoascript.CGRect, window: cocoascript.UIWindow):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621604-convertrect
    convertRect_fromWindow(rect: cocoascript.CGRect, window: cocoascript.UIWindow):cocoascript.CGRect;
    // doc://com.apple.documentation/documentation/uikit/uiwindow/1621614-sendevent
    sendEvent(event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardanimationcurveuserinfokey
    UIKeyboardAnimationCurveUserInfoKey(): cocoascript.const;
    setUIKeyboardAnimationCurveUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardanimationdurationuserinfokey
    UIKeyboardAnimationDurationUserInfoKey(): cocoascript.const;
    setUIKeyboardAnimationDurationUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardislocaluserinfokey
    UIKeyboardIsLocalUserInfoKey(): cocoascript.const;
    setUIKeyboardIsLocalUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardcenterbeginuserinfokey
    UIKeyboardCenterBeginUserInfoKey(): cocoascript.const;
    setUIKeyboardCenterBeginUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardcenterenduserinfokey
    UIKeyboardCenterEndUserInfoKey(): cocoascript.const;
    setUIKeyboardCenterEndUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardboundsuserinfokey
    UIKeyboardBoundsUserInfoKey(): cocoascript.const;
    setUIKeyboardBoundsUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardframebeginuserinfokey
    UIKeyboardFrameBeginUserInfoKey(): cocoascript.const;
    setUIKeyboardFrameBeginUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardframeenduserinfokey
    UIKeyboardFrameEndUserInfoKey(): cocoascript.const;
    setUIKeyboardFrameEndUserInfoKey(): void;
    //
    alloc():cocoascript.UIWindow;
    //
    init():cocoascript.UIWindow;
  }
}

declare const UIWindow: cocoascript.UIWindow;
