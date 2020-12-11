declare namespace cocoascript {
  /**
   * An object that displays an alert message to the user.
   * doc://com.apple.documentation/documentation/uikit/uialertcontroller
   */
  interface UIAlertController extends UIViewController {
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620103-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620106-message
    message(): cocoascript.NSString;
    setMessage(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620096-preferredstyle
    preferredStyle(): cocoascript.UIAlertControllerStyle;
    setPreferredStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620094-addaction
    addAction(action: cocoascript.UIAlertAction):void;
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620099-actions
    actions(): cocoascript.UIAlertAction;
    setActions(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620102-preferredaction
    preferredAction(): cocoascript.UIAlertAction;
    setPreferredAction(): void;
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620093-addtextfieldwithconfigurationhan
    addTextFieldWithConfigurationHandler(configurationHandler: cocoascript.UITextField):void;
    // doc://com.apple.documentation/documentation/uikit/uialertcontroller/1620104-textfields
    textFields(): cocoascript.UITextField;
    setTextFields(): void;
    //
    alloc():cocoascript.UIAlertController;
    //
    init():cocoascript.UIAlertController;
  }
}

declare const UIAlertController: cocoascript.UIAlertController;
