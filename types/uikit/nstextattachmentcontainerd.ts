declare namespace cocoascript {
/**
 * A set of methods that defines the interface to text attachment objects from a layout manager.
 * doc://com.apple.documentation/documentation/uikit/nstextattachmentcontainer
 */
interface NSTextAttachmentContainer extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nstextattachmentcontainer/1508382-attachmentboundsfortextcontainer
  attachmentBoundsForTextContainer_proposedLineFragment_glyphPosition_characterIndex(textContainer: cocoascript.NSTextContainer, lineFrag: cocoascript.CGRect, position: cocoascript.CGPoint, charIndex: cocoascript.NSUInteger):cocoascript.CGRect;
  // doc://com.apple.documentation/documentation/uikit/nstextattachmentcontainer/1508386-imageforbounds
  imageForBounds_textContainer_characterIndex(imageBounds: cocoascript.CGRect, textContainer: cocoascript.NSTextContainer, charIndex: cocoascript.NSUInteger):cocoascript.UIImage;
}
}

