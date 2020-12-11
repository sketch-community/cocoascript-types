declare namespace cocoascript {
  /**
   * The interface for obtaining information about, and interacting with, a text item for pasting or dropping.
   * doc://com.apple.documentation/documentation/uikit/uitextpasteitem
   */
  interface UITextPasteItem extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2887489-itemprovider
    itemProvider(): cocoascript.NSItemProvider;
    setItemProvider(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2887485-localobject
    localObject(): cocoascript.id;
    setLocalObject(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2887486-defaultattributes
    defaultAttributes(): cocoascript.id;
    setDefaultAttributes(): void;
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2887487-setstringresult
    setStringResult(string: cocoascript.NSString):void;
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2887482-setattributedstringresult
    setAttributedStringResult(string: cocoascript.NSAttributedString):void;
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2887484-setattachmentresult
    setAttachmentResult(textAttachment: cocoascript.NSTextAttachment):void;
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2919974-setdefaultresult
    setDefaultResult():void;
    // doc://com.apple.documentation/documentation/uikit/uitextpasteitem/2887491-setnoresult
    setNoResult():void;
  }
}
