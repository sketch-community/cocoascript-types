declare namespace cocoascript {
/**
 * The values for the attachment attributes of attributed strings and related objects.
 * doc://com.apple.documentation/documentation/uikit/nstextattachment
 */
interface NSTextAttachment extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nstextattachment/1508373-initwithfilewrapper
  initWithFileWrapper(fileWrapper: cocoascript.NSFileWrapper):cocoascript.NSTextAttachment;
  // doc://com.apple.documentation/documentation/uikit/nstextattachment/1508374-initwithdata
  initWithData_ofType(contentData: cocoascript.NSData, uti: cocoascript.NSString):cocoascript.NSTextAttachment;
  // doc://com.apple.documentation/documentation/uikit/nstextattachment/1508394-bounds
  bounds(): cocoascript.CGRect;
  setBounds(): void;
  // doc://com.apple.documentation/documentation/uikit/nstextattachment/1508401-contents
  contents(): cocoascript.NSData;
  setContents(): void;
  // doc://com.apple.documentation/documentation/uikit/nstextattachment/1508416-filetype
  fileType(): cocoascript.NSString;
  setFileType(): void;
  // doc://com.apple.documentation/documentation/uikit/nstextattachment/1508378-image
  image(): cocoascript.UIImage;
  setImage(): void;
  // doc://com.apple.documentation/documentation/uikit/nstextattachment/1508398-filewrapper
  fileWrapper(): cocoascript.NSFileWrapper;
  setFileWrapper(): void;
  // doc://com.apple.documentation/documentation/appkit/nstextattachment/1508413-attachmentcell
  attachmentCell(): cocoascript.NSTextAttachmentCell;
  setAttachmentCell(): void;
  // 
  alloc():cocoascript.NSTextAttachment;
  // 
  init():cocoascript.NSTextAttachment;
}
}
declare const NSTextAttachment: cocoascript.NSTextAttachment;

