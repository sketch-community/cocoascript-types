declare namespace cocoascript {
  /**
   * A control that offers a binary choice, such as on/off.
   * doc://com.apple.documentation/documentation/uikit/uiswitch
   */
  interface UISwitch extends UIControl {
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623682-initwithframe
    initWithFrame(frame: cocoascript.CGRect):cocoascript.UISwitch;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623685-initwithcoder
    initWithCoder(coder: cocoascript.NSCoder):cocoascript.UISwitch;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623690-on
    on(): cocoascript.BOOL;
    setOn(): void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623686-seton
    setOn_animated(on: cocoascript.BOOL, animated: cocoascript.BOOL):void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/3621874-preferredstyle
    preferredStyle(): cocoascript.UISwitchStyle;
    setPreferredStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/3621875-style
    style(): cocoascript.UISwitchStyle;
    setStyle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/3621876-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623687-ontintcolor
    onTintColor(): cocoascript.UIColor;
    setOnTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623684-thumbtintcolor
    thumbTintColor(): cocoascript.UIColor;
    setThumbTintColor(): void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623689-onimage
    onImage(): cocoascript.UIImage;
    setOnImage(): void;
    // doc://com.apple.documentation/documentation/uikit/uiswitch/1623683-offimage
    offImage(): cocoascript.UIImage;
    setOffImage(): void;
    //
    alloc():cocoascript.UISwitch;
    //
    init():cocoascript.UISwitch;
  }
}

declare const UISwitch: cocoascript.UISwitch;
