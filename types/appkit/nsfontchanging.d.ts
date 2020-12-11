declare namespace cocoascript {
  /**
   * doc://com.apple.documentation/documentation/appkit/nsfontchanging
   */
  interface NSFontChanging extends NSObject {
    // doc://com.apple.documentation/documentation/appkit/nsfontchanging/3005180-changefont
    changeFont(sender: cocoascript.NSFontManager):void;
    // doc://com.apple.documentation/documentation/appkit/nsfontchanging/3005181-validmodesforfontpanel
    validModesForFontPanel(fontPanel: cocoascript.NSFontPanel):cocoascript.NSFontPanelModeMask;
  }
}
