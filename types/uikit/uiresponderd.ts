declare namespace cocoascript {
  /**
   * An abstract interface for responding to and handling events.
   * doc://com.apple.documentation/documentation/uikit/uiresponder
   */
  interface UIResponder extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621099-nextresponder
    nextResponder(): cocoascript.UIResponder;
    setNextResponder(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621145-isfirstresponder
    isFirstResponder(): cocoascript.BOOL;
    setIsFirstResponder(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621130-canbecomefirstresponder
    canBecomeFirstResponder(): cocoascript.BOOL;
    setCanBecomeFirstResponder(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621113-becomefirstresponder
    becomeFirstResponder():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621125-canresignfirstresponder
    canResignFirstResponder(): cocoascript.BOOL;
    setCanResignFirstResponder(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621097-resignfirstresponder
    resignFirstResponder():cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621142-touchesbegan
    touchesBegan_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621107-touchesmoved
    touchesMoved_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621084-touchesended
    touchesEnded_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621116-touchescancelled
    touchesCancelled_withEvent(touches: cocoascript.UITouch, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621147-touchesestimatedpropertiesupdate
    touchesEstimatedPropertiesUpdated(touches: cocoascript.UITouch):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621120-motionbegan
    motionBegan_withEvent(motion: cocoascript.UIEventSubtype, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621090-motionended
    motionEnded_withEvent(motion: cocoascript.UIEventSubtype, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621087-motioncancelled
    motionCancelled_withEvent(motion: cocoascript.UIEventSubtype, event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621134-pressesbegan
    pressesBegan_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621150-presseschanged
    pressesChanged_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621128-pressesended
    pressesEnded_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621148-pressescancelled
    pressesCancelled_withEvent(presses: cocoascript.UIPress, event: cocoascript.UIPressesEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621118-remotecontrolreceivedwithevent
    remoteControlReceivedWithEvent(event: cocoascript.UIEvent):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621092-inputview
    inputView(): cocoascript.UIView;
    setInputView(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621117-inputviewcontroller
    inputViewController(): cocoascript.UIInputViewController;
    setInputViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621119-inputaccessoryview
    inputAccessoryView(): cocoascript.UIView;
    setInputAccessoryView(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621124-inputaccessoryviewcontroller
    inputAccessoryViewController(): cocoascript.UIInputViewController;
    setInputAccessoryViewController(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621110-reloadinputviews
    reloadInputViews():void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621122-undomanager
    undoManager(): cocoascript.NSUndoManager;
    setUndoManager(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/3327317-buildmenuwithbuilder
    buildMenuWithBuilder(builder: cocoascript.UIMenuBuilder):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/3229892-validatecommand
    validateCommand(command: cocoascript.UICommand):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621105-canperformaction
    canPerformAction_withSender(action: cocoascript.SEL, sender: cocoascript.UIResponder):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621146-targetforaction
    targetForAction_withSender(action: cocoascript.SEL, sender: cocoascript.UIResponder):cocoascript.UIResponder;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621141-keycommands
    keyCommands(): cocoascript.UIKeyCommand;
    setKeyCommands(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621133-textinputmode
    textInputMode(): cocoascript.UITextInputMode;
    setTextInputMode(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621091-textinputcontextidentifier
    textInputContextIdentifier(): cocoascript.NSString;
    setTextInputContextIdentifier(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621135-inputassistantitem
    inputAssistantItem(): cocoascript.UITextInputAssistantItem;
    setInputAssistantItem(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621089-useractivity
    userActivity(): cocoascript.NSUserActivity;
    setUserActivity(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621111-restoreuseractivitystate
    restoreUserActivityState(activity: cocoascript.NSUserActivity):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/1621095-updateuseractivitystate
    updateUserActivityState(activity: cocoascript.NSUserActivity):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/3368158-activityitemsconfiguration
    activityItemsConfiguration(): cocoascript.UIActivityItemsConfigurationReading;
    setActivityItemsConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/3327318-editinginteractionconfiguration
    editingInteractionConfiguration(): cocoascript.UIEditingInteractionConfiguration;
    setEditingInteractionConfiguration(): void;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/3375808-maketouchbar
    makeTouchBar():cocoascript.NSTouchBar;
    // doc://com.apple.documentation/documentation/uikit/uiresponder/3375809-touchbar
    touchBar(): cocoascript.NSTouchBar;
    setTouchBar(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardanimationcurveuserinfokey
    UIKeyboardAnimationCurveUserInfoKey(): cocoascript.const;
    setUIKeyboardAnimationCurveUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardanimationdurationuserinfokey
    UIKeyboardAnimationDurationUserInfoKey(): cocoascript.const;
    setUIKeyboardAnimationDurationUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardframebeginuserinfokey
    UIKeyboardFrameBeginUserInfoKey(): cocoascript.const;
    setUIKeyboardFrameBeginUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardframeenduserinfokey
    UIKeyboardFrameEndUserInfoKey(): cocoascript.const;
    setUIKeyboardFrameEndUserInfoKey(): void;
    // doc://com.apple.documentation/documentation/uikit/uikeyboardislocaluserinfokey
    UIKeyboardIsLocalUserInfoKey(): cocoascript.const;
    setUIKeyboardIsLocalUserInfoKey(): void;
    //
    alloc():cocoascript.UIResponder;
    //
    init():cocoascript.UIResponder;
  }
}

declare const UIResponder: cocoascript.UIResponder;
