declare namespace cocoascript {
  /**
   * A request to send a message to the designated recipients.
   * doc://com.apple.documentation/documentation/sirikit/insendmessageintent
   */
  interface INSendMessageIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/2866587-initwithrecipients
    initWithRecipients_content_speakableGroupName_conversationIdentifier_serviceName_sender(recipients: cocoascript.INPerson, content: cocoascript.NSString, speakableGroupName: cocoascript.INSpeakableString, conversationIdentifier: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1778238-initwithrecipients
    initWithRecipients_content_groupName_serviceName_sender(recipients: cocoascript.INPerson, content: cocoascript.NSString, groupName: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639316-recipients
    recipients(): cocoascript.INPerson;
    setRecipients(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/2866586-conversationidentifier
    conversationIdentifier(): cocoascript.NSString;
    setConversationIdentifier(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/2866589-speakablegroupname
    speakableGroupName(): cocoascript.INSpeakableString;
    setSpeakableGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639106-content
    content(): cocoascript.NSString;
    setContent(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639342-servicename
    serviceName(): cocoascript.NSString;
    setServiceName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1639248-sender
    sender(): cocoascript.INPerson;
    setSender(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/1778199-groupname
    groupName(): cocoascript.NSString;
    setGroupName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3552231-initwithrecipients
    initWithRecipients_outgoingMessageType_content_speakableGroupName_conversationIdentifier_serviceName_sender(recipients: cocoascript.INPerson, outgoingMessageType: cocoascript.INOutgoingMessageType, content: cocoascript.NSString, speakableGroupName: cocoascript.INSpeakableString, conversationIdentifier: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3621863-initwithrecipients
    initWithRecipients_outgoingMessageType_content_speakableGroupName_conversationIdentifier_serviceName_sender_attachments(recipients: cocoascript.INPerson, outgoingMessageType: cocoascript.INOutgoingMessageType, content: cocoascript.NSString, speakableGroupName: cocoascript.INSpeakableString, conversationIdentifier: cocoascript.NSString, serviceName: cocoascript.NSString, sender: cocoascript.INPerson, attachments: cocoascript.INSendMessageAttachment):cocoascript.INSendMessageIntent;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3621862-attachments
    attachments(): cocoascript.INSendMessageAttachment;
    setAttachments(): void;
    // doc://com.apple.documentation/documentation/sirikit/insendmessageintent/3552232-outgoingmessagetype
    outgoingMessageType(): cocoascript.INOutgoingMessageType;
    setOutgoingMessageType(): void;
    //
    alloc():cocoascript.INSendMessageIntent;
    //
    init():cocoascript.INSendMessageIntent;
  }
}

declare const INSendMessageIntent: cocoascript.INSendMessageIntent;
