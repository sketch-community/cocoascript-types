declare namespace cocoascript {
  /**
   * A set of methods that provides basic behavior for a color picker.
   * doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault
   */
  interface NSColorPickingDefault {
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1528432-initwithpickermask
    initWithPickerMask_colorPanel(mask: cocoascript.NSUInteger, owningColorPanel: cocoascript.NSColorPanel):cocoascript.NSColorPickingDefault;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1525088-setmode
    setMode(mode: cocoascript.NSColorPanelMode):void;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1525078-insertnewbuttonimage
    insertNewButtonImage_in(newButtonImage: cocoascript.NSImage, buttonCell: cocoascript.NSButtonCell):void;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1534615-providenewbuttonimage
    provideNewButtonImage():cocoascript.NSImage;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1535437-mincontentsize
    minContentSize():cocoascript.NSSize;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1535160-buttontooltip
    buttonToolTip():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1535478-alphacontroladdedorremoved
    alphaControlAddedOrRemoved(sender: cocoascript.NSColorPickingDefault):void;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1535866-viewsizechanged
    viewSizeChanged(sender: cocoascript.NSColorPickingDefault):void;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1531650-attachcolorlist
    attachColorList(colorList: cocoascript.NSColorList):void;
    // doc://com.apple.documentation/documentation/appkit/nscolorpickingdefault/1532761-detachcolorlist
    detachColorList(colorList: cocoascript.NSColorList):void;
  }
}
