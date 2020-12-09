declare namespace cocoascript {
/**
 * An image contained in a note.
 * doc://com.apple.documentation/documentation/sirikit/inimagenotecontent
 */
interface INImageNoteContent extends INNoteContent {
  // doc://com.apple.documentation/documentation/sirikit/inimagenotecontent/2880150-initwithimage
  initWithImage(image: cocoascript.INImage):cocoascript.INImageNoteContent;
  // doc://com.apple.documentation/documentation/sirikit/inimagenotecontent/2873670-image
  image(): cocoascript.INImage;
  setImage(): void;
  // 
  alloc():cocoascript.INImageNoteContent;
  // 
  init():cocoascript.INImageNoteContent;
}
}
declare const INImageNoteContent: cocoascript.INImageNoteContent;

