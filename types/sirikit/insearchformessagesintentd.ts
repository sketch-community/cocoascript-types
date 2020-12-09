declare namespace cocoascript {
/**
 * A request to list the messages matching the specified criteria.
 * doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent
 */
interface INSearchForMessagesIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2983197-initwithrecipients
  initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_speakableGroupNames_conversationIdentifiers(recipients: cocoascript.INPerson, senders: cocoascript.INPerson, searchTerms: cocoascript.NSString, attributes: cocoascript.INMessageAttributeOptions, dateTimeRange: cocoascript.INDateComponentsRange, identifiers: cocoascript.NSString, notificationIdentifiers: cocoascript.NSString, speakableGroupNames: cocoascript.INSpeakableString, conversationIdentifiers: cocoascript.NSString):cocoascript.INSearchForMessagesIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638455-recipients
  recipients(): cocoascript.INPerson;
  setRecipients(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638624-recipientsoperator
  recipientsOperator(): cocoascript.INConditionalOperator;
  setRecipientsOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638436-senders
  senders(): cocoascript.INPerson;
  setSenders(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639394-sendersoperator
  sendersOperator(): cocoascript.INConditionalOperator;
  setSendersOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2867287-speakablegroupnames
  speakableGroupNames(): cocoascript.INSpeakableString;
  setSpeakableGroupNames(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2867288-speakablegroupnamesoperator
  speakableGroupNamesOperator(): cocoascript.INConditionalOperator;
  setSpeakableGroupNamesOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639353-searchterms
  searchTerms(): cocoascript.NSString;
  setSearchTerms(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639002-searchtermsoperator
  searchTermsOperator(): cocoascript.INConditionalOperator;
  setSearchTermsOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638192-datetimerange
  dateTimeRange(): cocoascript.INDateComponentsRange;
  setDateTimeRange(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639482-attributes
  attributes(): cocoascript.INMessageAttributeOptions;
  setAttributes(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638976-identifiers
  identifiers(): cocoascript.NSString;
  setIdentifiers(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1638746-identifiersoperator
  identifiersOperator(): cocoascript.INConditionalOperator;
  setIdentifiersOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2983195-conversationidentifiers
  conversationIdentifiers(): cocoascript.NSString;
  setConversationIdentifiers(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2983196-conversationidentifiersoperator
  conversationIdentifiersOperator(): cocoascript.INConditionalOperator;
  setConversationIdentifiersOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639365-notificationidentifiers
  notificationIdentifiers(): cocoascript.NSString;
  setNotificationIdentifiers(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1639253-notificationidentifiersoperator
  notificationIdentifiersOperator(): cocoascript.INConditionalOperator;
  setNotificationIdentifiersOperator(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/2867286-initwithrecipients
  initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_speakableGroupNames(recipients: cocoascript.INPerson, senders: cocoascript.INPerson, searchTerms: cocoascript.NSString, attributes: cocoascript.INMessageAttributeOptions, dateTimeRange: cocoascript.INDateComponentsRange, identifiers: cocoascript.NSString, notificationIdentifiers: cocoascript.NSString, speakableGroupNames: cocoascript.INSpeakableString):cocoascript.INSearchForMessagesIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1902435-initwithrecipients
  initWithRecipients_senders_searchTerms_attributes_dateTimeRange_identifiers_notificationIdentifiers_groupNames(recipients: cocoascript.INPerson, senders: cocoascript.INPerson, searchTerms: cocoascript.NSString, attributes: cocoascript.INMessageAttributeOptions, dateTimeRange: cocoascript.INDateComponentsRange, identifiers: cocoascript.NSString, notificationIdentifiers: cocoascript.NSString, groupNames: cocoascript.NSString):cocoascript.INSearchForMessagesIntent;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1778236-groupnames
  groupNames(): cocoascript.NSString;
  setGroupNames(): void;
  // doc://com.apple.documentation/documentation/sirikit/insearchformessagesintent/1778193-groupnamesoperator
  groupNamesOperator(): cocoascript.INConditionalOperator;
  setGroupNamesOperator(): void;
  // 
  alloc():cocoascript.INSearchForMessagesIntent;
  // 
  init():cocoascript.INSearchForMessagesIntent;
}
}
declare const INSearchForMessagesIntent: cocoascript.INSearchForMessagesIntent;

