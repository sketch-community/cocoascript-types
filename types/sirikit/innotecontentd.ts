declare namespace cocoascript {
/**
 * An abstract class that defines the types of content contained in notes.
 * doc://com.apple.documentation/documentation/sirikit/innotecontent
 */
interface INNoteContent extends NSObject {
  // 
  alloc():cocoascript.INNoteContent;
  // 
  init():cocoascript.INNoteContent;
}
}
declare const INNoteContent: cocoascript.INNoteContent;

