declare namespace cocoascript {
/**
 * Information about a message managed by your app.
 * doc://com.apple.documentation/documentation/sirikit/inmessage
 */
interface INMessage extends NSObject {
  // doc://com.apple.documentation/documentation/sirikit/inmessage/2882886-initwithidentifier
  initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_messageType(identifier: cocoascript.NSString, conversationIdentifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson, messageType: cocoascript.INMessageType):cocoascript.INMessage;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/2919433-initwithidentifier
  initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_groupName_messageType(identifier: cocoascript.NSString, conversationIdentifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson, groupName: cocoascript.INSpeakableString, messageType: cocoascript.INMessageType):cocoascript.INMessage;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/1687606-initwithidentifier
  initWithIdentifier_content_dateSent_sender_recipients(identifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson):cocoascript.INMessage;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/3392958-initwithidentifier
  initWithIdentifier_conversationIdentifier_content_dateSent_sender_recipients_groupName_messageType_serviceName(identifier: cocoascript.NSString, conversationIdentifier: cocoascript.NSString, content: cocoascript.NSString, dateSent: cocoascript.NSDate, sender: cocoascript.INPerson, recipients: cocoascript.INPerson, groupName: cocoascript.INSpeakableString, messageType: cocoascript.INMessageType, serviceName: cocoascript.NSString):cocoascript.INMessage;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/1638230-identifier
  identifier(): cocoascript.NSString;
  setIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/2867834-conversationidentifier
  conversationIdentifier(): cocoascript.NSString;
  setConversationIdentifier(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/2882867-messagetype
  messageType(): cocoascript.INMessageType;
  setMessageType(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/1638778-sender
  sender(): cocoascript.INPerson;
  setSender(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/1638938-recipients
  recipients(): cocoascript.INPerson;
  setRecipients(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/2919432-groupname
  groupName(): cocoascript.INSpeakableString;
  setGroupName(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/1638554-content
  content(): cocoascript.NSString;
  setContent(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/1639255-datesent
  dateSent(): cocoascript.NSDate;
  setDateSent(): void;
  // doc://com.apple.documentation/documentation/sirikit/inmessage/3392959-servicename
  serviceName(): cocoascript.NSString;
  setServiceName(): void;
  // 
  alloc():cocoascript.INMessage;
  // 
  init():cocoascript.INMessage;
}
}
declare const INMessage: cocoascript.INMessage;

