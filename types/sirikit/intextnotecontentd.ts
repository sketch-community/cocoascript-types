declare namespace cocoascript {
/**
 * The textual content of a note.
 * doc://com.apple.documentation/documentation/sirikit/intextnotecontent
 */
interface INTextNoteContent extends INNoteContent {
  // doc://com.apple.documentation/documentation/sirikit/intextnotecontent/2878142-initwithtext
  initWithText(text: cocoascript.NSString):cocoascript.INTextNoteContent;
  // doc://com.apple.documentation/documentation/sirikit/intextnotecontent/2874035-text
  text(): cocoascript.NSString;
  setText(): void;
  // 
  alloc():cocoascript.INTextNoteContent;
  // 
  init():cocoascript.INTextNoteContent;
}
}
declare const INTextNoteContent: cocoascript.INTextNoteContent;

