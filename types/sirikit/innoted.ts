declare namespace cocoascript {
/**
 * The content and metadata associated with a single note entry in your app.
 * doc://com.apple.documentation/documentation/sirikit/innote
 */
interface INNote extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/innote/2878109-initwithtitle
  initWithTitle_contents_groupName_createdDateComponents_modifiedDateComponents_identifier(title: cocoascript.INSpeakableString, contents: cocoascript.INNoteContent, groupName: cocoascript.INSpeakableString, createdDateComponents: cocoascript.NSDateComponents, modifiedDateComponents: cocoascript.NSDateComponents, identifier: cocoascript.NSString):cocoascript.INNote;
  // doc://com.apple.documentation/documentation/sirikit/innote/2873614-title
  title(): cocoascript.INSpeakableString;
  setTitle(): void;
  // doc://com.apple.documentation/documentation/sirikit/innote/2873617-contents
  contents(): cocoascript.INNoteContent;
  setContents(): void;
  // doc://com.apple.documentation/documentation/sirikit/innote/2873615-groupname
  groupName(): cocoascript.INSpeakableString;
  setGroupName(): void;
  // doc://com.apple.documentation/documentation/sirikit/innote/2873616-createddatecomponents
  createdDateComponents(): cocoascript.NSDateComponents;
  setCreatedDateComponents(): void;
  // doc://com.apple.documentation/documentation/sirikit/innote/2873611-modifieddatecomponents
  modifiedDateComponents(): cocoascript.NSDateComponents;
  setModifiedDateComponents(): void;
  // doc://com.apple.documentation/documentation/sirikit/innote/2873612-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // 
  alloc():cocoascript.INNote;
  // 
  init():cocoascript.INNote;
}
}
declare const INNote: cocoascript.INNote;

