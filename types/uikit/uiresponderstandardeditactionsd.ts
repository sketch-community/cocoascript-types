declare namespace cocoascript {
  /**
   * A set of standard methods that apps can adopt to support editing.
   * doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions
   */
  interface UIResponderStandardEditActions extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354193-cut
    cut(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354191-copy
    copy(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354189-paste
    paste(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354197-delete
    delete(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354190-select
    select(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354200-selectall
    selectAll(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354196-toggleboldface
    toggleBoldface(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354187-toggleitalics
    toggleItalics(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354194-toggleunderline
    toggleUnderline(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354198-maketextwritingdirectionlefttori
    makeTextWritingDirectionLeftToRight(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354195-maketextwritingdirectionrighttol
    makeTextWritingDirectionRightToLeft(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354199-increasesize
    increaseSize(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/2354192-decreasesize
    decreaseSize(sender: cocoascript.UIResponderStandardEditActions):void;
    // doc://com.apple.documentation/documentation/uikit/uiresponderstandardeditactions/3261459-updatetextattributeswithconversi
    updateTextAttributesWithConversionHandler(conversionHandler: cocoascript.UITextAttributesConversionHandler):void;
  }
}
