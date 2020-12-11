declare namespace cocoascript {
  /**
   * A protocol for managing the key-value pairs of a CloudKit record.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting
   */
  interface CKRecordKeyValueSetting extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976185-objectforkey
    objectForKey(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976186-objectforkeyedsubscript
    objectForKeyedSubscript(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976187-setobject
    setObject_forKey(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976188-setobject
    setObject_forKeyedSubscript(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976183-allkeys
    allKeys():cocoascript.CKRecordFieldKey;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976184-changedkeys
    changedKeys():cocoascript.CKRecordFieldKey;
  }
}
declare namespace cocoascript {
  /**
   * The protocol that provides strong type-checking for objects that the CloudKit framework stores on the server.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordvalue
   */
  interface CKRecordValue extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * A reference to a share record.
   * doc://com.apple.documentation/documentation/cloudkit/ckshare
   */
  interface CKShare extends CKRecord {
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640432-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640448-initwithrootrecord
    initWithRootRecord(rootRecord: cocoascript.CKRecord):cocoascript.CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640381-initwithrootrecord
    initWithRootRecord_shareID(rootRecord: cocoascript.CKRecord, shareID: cocoascript.CKRecordID):cocoascript.CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640494-publicpermission
    publicPermission(): cocoascript.CKShareParticipantPermission;
    setPublicPermission(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640443-addparticipant
    addParticipant(participant: cocoascript.CKShareParticipant):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640523-removeparticipant
    removeParticipant(participant: cocoascript.CKShareParticipant):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640503-owner
    owner(): cocoascript.CKShareParticipant;
    setOwner(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640453-participants
    participants(): cocoascript.CKShareParticipant;
    setParticipants(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640441-currentuserparticipant
    currentUserParticipant(): cocoascript.CKShareParticipant;
    setCurrentUserParticipant(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640465-url
    URL(): cocoascript.NSURL;
    setURL(): void;
    //
    alloc():cocoascript.CKShare;
    //
    init():cocoascript.CKShare;
  }
}

declare const CKShare: cocoascript.CKShare;
declare namespace cocoascript {
  /**
   * An operation that accepts shared records.
   * doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation
   */
  interface CKAcceptSharesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640506-init
    init():cocoascript.CKAcceptSharesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1823506-initwithsharemetadatas
    initWithShareMetadatas(shareMetadatas: cocoascript.CKShareMetadata):cocoascript.CKAcceptSharesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1823508-sharemetadatas
    shareMetadatas(): cocoascript.CKShareMetadata;
    setShareMetadatas(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640426-persharecompletionblock
    perShareCompletionBlock(): cocoascript.NSError;
    setPerShareCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640442-acceptsharescompletionblock
    acceptSharesCompletionBlock(): cocoascript.NSError;
    setAcceptSharesCompletionBlock(): void;
    //
    alloc():cocoascript.CKAcceptSharesOperation;
    //
    init():cocoascript.CKAcceptSharesOperation;
  }
}

declare const CKAcceptSharesOperation: cocoascript.CKAcceptSharesOperation;
declare namespace cocoascript {
  /**
   * An object that decribes a shared record’s metadata.
   * doc://com.apple.documentation/documentation/cloudkit/cksharemetadata
   */
  interface CKShareMetadata extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640412-share
    share(): cocoascript.CKShare;
    setShare(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640400-containeridentifier
    containerIdentifier(): cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640498-owneridentity
    ownerIdentity(): cocoascript.CKUserIdentity;
    setOwnerIdentity(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640366-rootrecord
    rootRecord(): cocoascript.CKRecord;
    setRootRecord(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640410-rootrecordid
    rootRecordID(): cocoascript.CKRecordID;
    setRootRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/2980666-participantrole
    participantRole(): cocoascript.CKShareParticipantRole;
    setParticipantRole(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640483-participantpermission
    participantPermission(): cocoascript.CKShareParticipantPermission;
    setParticipantPermission(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640420-participantstatus
    participantStatus(): cocoascript.CKShareParticipantAcceptanceStatus;
    setParticipantStatus(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640518-participanttype
    participantType(): cocoascript.CKShareParticipantType;
    setParticipantType(): void;
    //
    alloc():cocoascript.CKShareMetadata;
    //
    init():cocoascript.CKShareMetadata;
  }
}

declare const CKShareMetadata: cocoascript.CKShareMetadata;
declare namespace cocoascript {
  /**
   * A query that describes the criteria to apply when searching for records in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckquery
   */
  interface CKQuery extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413119-initwithrecordtype
    initWithRecordType_predicate(recordType: cocoascript.CKRecordType, predicate: cocoascript.NSPredicate):cocoascript.CKQuery;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413111-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKQuery;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413117-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413112-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413121-sortdescriptors
    sortDescriptors(): cocoascript.NSSortDescriptor;
    setSortDescriptors(): void;
    //
    alloc():cocoascript.CKQuery;
    //
    init():cocoascript.CKQuery;
  }
}

declare const CKQuery: cocoascript.CKQuery;
declare namespace cocoascript {
  /**
   * An object that uniquely identifies a push notification that a container sends.
   * doc://com.apple.documentation/documentation/cloudkit/cknotificationid
   */
  interface CKNotificationID extends NSObject {
    //
    alloc():cocoascript.CKNotificationID;
    //
    init():cocoascript.CKNotificationID;
  }
}

declare const CKNotificationID: cocoascript.CKNotificationID;
declare namespace cocoascript {
  /**
   * A dictionary of key-value pairs for persisting your app’s data.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecord
   */
  interface CKRecord extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462225-initwithrecordtype
    initWithRecordType(recordType: cocoascript.CKRecordType):cocoascript.CKRecord;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462202-initwithrecordtype
    initWithRecordType_zoneID(recordType: cocoascript.CKRecordType, zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecord;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462204-initwithrecordtype
    initWithRecordType_recordID(recordType: cocoascript.CKRecordType, recordID: cocoascript.CKRecordID):cocoascript.CKRecord;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462216-objectforkey
    objectForKey(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462210-objectforkeyedsubscript
    objectForKeyedSubscript(key: cocoascript.CKRecordFieldKey):cocoascript.CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462231-setobject
    setObject_forKey(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462221-setobject
    setObject_forKeyedSubscript(object: cocoascript.CKRecordValue, key: cocoascript.CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462220-allkeys
    allKeys():cocoascript.CKRecordFieldKey;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462197-changedkeys
    changedKeys():cocoascript.CKRecordFieldKey;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462229-recordid
    recordID(): cocoascript.CKRecordID;
    setRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462206-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462223-creationdate
    creationDate(): cocoascript.NSDate;
    setCreationDate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462208-creatoruserrecordid
    creatorUserRecordID(): cocoascript.CKRecordID;
    setCreatorUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462227-modificationdate
    modificationDate(): cocoascript.NSDate;
    setModificationDate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462212-lastmodifieduserrecordid
    lastModifiedUserRecordID(): cocoascript.CKRecordID;
    setLastModifiedUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462195-recordchangetag
    recordChangeTag(): cocoascript.NSString;
    setRecordChangeTag(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462199-alltokens
    allTokens():cocoascript.NSString;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462200-encodesystemfieldswithcoder
    encodeSystemFieldsWithCoder(coder: cocoascript.NSCoder):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1640527-parent
    parent(): cocoascript.CKReference;
    setParent(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1640378-share
    share(): cocoascript.CKReference;
    setShare(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1690507-setparentreferencefromrecord
    setParentReferenceFromRecord(parentRecord: cocoascript.CKRecord):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1690508-setparentreferencefromrecordid
    setParentReferenceFromRecordID(parentRecordID: cocoascript.CKRecordID):void;
    //
    alloc():cocoascript.CKRecord;
    //
    init():cocoascript.CKRecord;
  }
}

declare const CKRecord: cocoascript.CKRecord;
declare namespace cocoascript {
  /**
   * An object that uniquely identifies a record in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordid
   */
  interface CKRecordID extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500975-initwithrecordname
    initWithRecordName(recordName: cocoascript.NSString):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500967-initwithrecordname
    initWithRecordName_zoneID(recordName: cocoascript.NSString, zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecordID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500973-recordname
    recordName(): cocoascript.NSString;
    setRecordName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500969-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():cocoascript.CKRecordID;
    //
    init():cocoascript.CKRecordID;
  }
}

declare const CKRecordID: cocoascript.CKRecordID;
declare namespace cocoascript {
  /**
   * An object that uniquely identifies a record zone in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid
   */
  interface CKRecordZoneID extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508089-initwithzonename
    initWithZoneName_ownerName(zoneName: cocoascript.NSString, ownerName: cocoascript.NSString):cocoascript.CKRecordZoneID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508094-zonename
    zoneName(): cocoascript.NSString;
    setZoneName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508096-ownername
    ownerName(): cocoascript.NSString;
    setOwnerName(): void;
    //
    alloc():cocoascript.CKRecordZoneID;
    //
    init():cocoascript.CKRecordZoneID;
  }
}

declare const CKRecordZoneID: cocoascript.CKRecordZoneID;
declare namespace cocoascript {
  /**
   * An object that marks the stopping point for a query and the starting point for retrieving the remaining results.
   * doc://com.apple.documentation/documentation/cloudkit/ckquerycursor
   */
  interface CKQueryCursor extends NSObject {
    //
    alloc():cocoascript.CKQueryCursor;
    //
    init():cocoascript.CKQueryCursor;
  }
}

declare const CKQueryCursor: cocoascript.CKQueryCursor;
declare namespace cocoascript {
  /**
   * An abstract base class for subscriptions.
   * doc://com.apple.documentation/documentation/cloudkit/cksubscription
   */
  interface CKSubscription extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1514948-notificationinfo
    notificationInfo(): cocoascript.CKNotificationInfo;
    setNotificationInfo(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1515199-subscriptionid
    subscriptionID(): cocoascript.CKSubscriptionID;
    setSubscriptionID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1515250-subscriptiontype
    subscriptionType(): cocoascript.CKSubscriptionType;
    setSubscriptionType(): void;
    //
    alloc():cocoascript.CKSubscription;
    //
    init():cocoascript.CKSubscription;
  }
}

declare const CKSubscription: cocoascript.CKSubscription;
declare namespace cocoascript {
  /**
   * An object that describes the configuration of a subscription’s push notifications.
   * doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo
   */
  interface CKNotificationInfo extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515082-category
    category(): cocoascript.NSString;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2887430-collapseidkey
    collapseIDKey(): cocoascript.NSString;
    setCollapseIDKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514996-shouldbadge
    shouldBadge(): cocoascript.BOOL;
    setShouldBadge(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515270-alertbody
    alertBody(): cocoascript.NSString;
    setAlertBody(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514968-alertlocalizationkey
    alertLocalizationKey(): cocoascript.NSString;
    setAlertLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515182-alertlocalizationargs
    alertLocalizationArgs(): cocoascript.CKRecordFieldKey;
    setAlertLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514945-alertactionlocalizationkey
    alertActionLocalizationKey(): cocoascript.NSString;
    setAlertActionLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515075-alertlaunchimage
    alertLaunchImage(): cocoascript.NSString;
    setAlertLaunchImage(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514987-soundname
    soundName(): cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515110-shouldsendcontentavailable
    shouldSendContentAvailable(): cocoascript.BOOL;
    setShouldSendContentAvailable(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2868500-shouldsendmutablecontent
    shouldSendMutableContent(): cocoascript.BOOL;
    setShouldSendMutableContent(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514931-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869870-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869865-titlelocalizationkey
    titleLocalizationKey(): cocoascript.NSString;
    setTitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869866-titlelocalizationargs
    titleLocalizationArgs(): cocoascript.CKRecordFieldKey;
    setTitleLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869863-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869864-subtitlelocalizationkey
    subtitleLocalizationKey(): cocoascript.NSString;
    setSubtitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869869-subtitlelocalizationargs
    subtitleLocalizationArgs(): cocoascript.CKRecordFieldKey;
    setSubtitleLocalizationArgs(): void;
    //
    alloc():cocoascript.CKNotificationInfo;
    //
    init():cocoascript.CKNotificationInfo;
  }
}

declare const CKNotificationInfo: cocoascript.CKNotificationInfo;
declare namespace cocoascript {
  /**
   * The definition of a custom area for organizing related records in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordzone
   */
  interface CKRecordZone extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515102-initwithzonename
    initWithZoneName(zoneName: cocoascript.NSString):cocoascript.CKRecordZone;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515207-initwithzoneid
    initWithZoneID(zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecordZone;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonedefaultname
    CKRecordZoneDefaultName(): cocoascript.const;
    setCKRecordZoneDefaultName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1514917-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515194-capabilities
    capabilities(): cocoascript.CKRecordZoneCapabilities;
    setCapabilities(): void;
    //
    alloc():cocoascript.CKRecordZone;
    //
    init():cocoascript.CKRecordZone;
  }
}

declare const CKRecordZone: cocoascript.CKRecordZone;
declare namespace cocoascript {
  /**
   * An object that identifies a specific version of a record.
   * doc://com.apple.documentation/documentation/cloudkit/ckserverchangetoken
   */
  interface CKServerChangeToken extends NSObject {
    //
    alloc():cocoascript.CKServerChangeToken;
    //
    init():cocoascript.CKServerChangeToken;
  }
}

declare const CKServerChangeToken: cocoascript.CKServerChangeToken;
declare namespace cocoascript {
  /**
   * An object that describes a many-to-one relationship between records in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckreference
   */
  interface CKReference extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1515280-initwithrecordid
    initWithRecordID_action(recordID: cocoascript.CKRecordID, action: cocoascript.CKReferenceAction):cocoascript.CKReference;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1515312-initwithrecord
    initWithRecord_action(record: cocoascript.CKRecord, action: cocoascript.CKReferenceAction):cocoascript.CKReference;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1514900-referenceaction
    referenceAction(): cocoascript.CKReferenceAction;
    setReferenceAction(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1514956-recordid
    recordID(): cocoascript.CKRecordID;
    setRecordID(): void;
    //
    alloc():cocoascript.CKReference;
    //
    init():cocoascript.CKReference;
  }
}

declare const CKReference: cocoascript.CKReference;
declare namespace cocoascript {
  /**
   * An object that represents a user’s identity.
   * doc://com.apple.documentation/documentation/cloudkit/ckuseridentity
   */
  interface CKUserIdentity extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640513-hasicloudaccount
    hasiCloudAccount(): cocoascript.BOOL;
    setHasiCloudAccount(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640371-lookupinfo
    lookupInfo(): cocoascript.CKUserIdentityLookupInfo;
    setLookupInfo(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640504-userrecordid
    userRecordID(): cocoascript.CKRecordID;
    setUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/2866227-contactidentifiers
    contactIdentifiers(): cocoascript.NSString;
    setContactIdentifiers(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640458-namecomponents
    nameComponents(): cocoascript.NSPersonNameComponents;
    setNameComponents(): void;
    //
    alloc():cocoascript.CKUserIdentity;
    //
    init():cocoascript.CKUserIdentity;
  }
}

declare const CKUserIdentity: cocoascript.CKUserIdentity;
declare namespace cocoascript {
  /**
   * An object that represents the criteria CloudKit uses when fetching user identities.
   * doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo
   */
  interface CKUserIdentityLookupInfo extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640484-initwithemailaddress
    initWithEmailAddress(emailAddress: cocoascript.NSString):cocoascript.CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640402-initwithphonenumber
    initWithPhoneNumber(phoneNumber: cocoascript.NSString):cocoascript.CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640419-initwithuserrecordid
    initWithUserRecordID(userRecordID: cocoascript.CKRecordID):cocoascript.CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640462-emailaddress
    emailAddress(): cocoascript.NSString;
    setEmailAddress(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640482-phonenumber
    phoneNumber(): cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640405-userrecordid
    userRecordID(): cocoascript.CKRecordID;
    setUserRecordID(): void;
    //
    alloc():cocoascript.CKUserIdentityLookupInfo;
    //
    init():cocoascript.CKUserIdentityLookupInfo;
  }
}

declare const CKUserIdentityLookupInfo: cocoascript.CKUserIdentityLookupInfo;
declare namespace cocoascript {
  /**
   * A configuration object that describes the information to fetch from a record zone.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions
   */
  interface CKFetchRecordZoneChangesOptions extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640472-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640389-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640481-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    //
    alloc():cocoascript.CKFetchRecordZoneChangesOptions;
    //
    init():cocoascript.CKFetchRecordZoneChangesOptions;
  }
}

declare const CKFetchRecordZoneChangesOptions: cocoascript.CKFetchRecordZoneChangesOptions;
declare namespace cocoascript {
  /**
   * A subscription that creates push notifications when CloudKit makes changes to records that match a predicate.
   * doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription
   */
  interface CKQuerySubscription extends CKSubscription {
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640466-initwithrecordtype
    initWithRecordType_predicate_options(recordType: cocoascript.CKRecordType, predicate: cocoascript.NSPredicate, querySubscriptionOptions: cocoascript.CKQuerySubscriptionOptions):cocoascript.CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640505-initwithrecordtype
    initWithRecordType_predicate_subscriptionID_options(recordType: cocoascript.CKRecordType, predicate: cocoascript.NSPredicate, subscriptionID: cocoascript.CKSubscriptionID, querySubscriptionOptions: cocoascript.CKQuerySubscriptionOptions):cocoascript.CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/3547081-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640485-predicate
    predicate(): cocoascript.NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640414-querysubscriptionoptions
    querySubscriptionOptions(): cocoascript.CKQuerySubscriptionOptions;
    setQuerySubscriptionOptions(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640393-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640390-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():cocoascript.CKQuerySubscription;
    //
    init():cocoascript.CKQuerySubscription;
  }
}

declare const CKQuerySubscription: cocoascript.CKQuerySubscription;
declare namespace cocoascript {
  /**
   * A subscription that creates push notifications when CloudKit makes changes to records in a record zone.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription
   */
  interface CKRecordZoneSubscription extends CKSubscription {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640392-initwithzoneid
    initWithZoneID(zoneID: cocoascript.CKRecordZoneID):cocoascript.CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640415-initwithzoneid
    initWithZoneID_subscriptionID(zoneID: cocoascript.CKRecordZoneID, subscriptionID: cocoascript.CKSubscriptionID):cocoascript.CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/3547082-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640479-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640367-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():cocoascript.CKRecordZoneSubscription;
    //
    init():cocoascript.CKRecordZoneSubscription;
  }
}

declare const CKRecordZoneSubscription: cocoascript.CKRecordZoneSubscription;
declare namespace cocoascript {
  /**
   * A subscription that creates push notifications when CloudKit makes changes to records in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription
   */
  interface CKDatabaseSubscription extends CKSubscription {
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640456-init
    init():cocoascript.CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640530-initwithsubscriptionid
    initWithSubscriptionID(subscriptionID: cocoascript.CKSubscriptionID):cocoascript.CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/3547080-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640418-recordtype
    recordType(): cocoascript.CKRecordType;
    setRecordType(): void;
    //
    alloc():cocoascript.CKDatabaseSubscription;
    //
    init():cocoascript.CKDatabaseSubscription;
  }
}

declare const CKDatabaseSubscription: cocoascript.CKDatabaseSubscription;
declare namespace cocoascript {
  /**
   * A reference to the user who accepts a shared record.
   * doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant
   */
  interface CKShareParticipant extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant/1640395-acceptancestatus
    acceptanceStatus(): cocoascript.CKShareParticipantAcceptanceStatus;
    setAcceptanceStatus(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant/1640488-useridentity
    userIdentity(): cocoascript.CKUserIdentity;
    setUserIdentity(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant/1640433-permission
    permission(): cocoascript.CKShareParticipantPermission;
    setPermission(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant/2980667-role
    role(): cocoascript.CKShareParticipantRole;
    setRole(): void;
    //
    alloc():cocoascript.CKShareParticipant;
    //
    init():cocoascript.CKShareParticipant;
  }
}

declare const CKShareParticipant: cocoascript.CKShareParticipant;
declare namespace cocoascript {
  /**
   * A configuration object that describes the information to fetch from a record zone.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration
   */
  interface CKFetchRecordZoneChangesConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980662-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980663-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980661-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    //
    alloc():cocoascript.CKFetchRecordZoneChangesConfiguration;
    //
    init():cocoascript.CKFetchRecordZoneChangesConfiguration;
  }
}

declare const CKFetchRecordZoneChangesConfiguration: cocoascript.CKFetchRecordZoneChangesConfiguration;
declare namespace cocoascript {
  /**
   * An object for sorting records that contain location data.
   * doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor
   */
  interface CKLocationSortDescriptor extends NSSortDescriptor {
    // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1515071-initwithkey
    initWithKey_relativeLocation(key: cocoascript.NSString, relativeLocation: cocoascript.CLLocation):cocoascript.CKLocationSortDescriptor;
    // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1515257-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKLocationSortDescriptor;
    // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1514915-relativelocation
    relativeLocation(): cocoascript.CLLocation;
    setRelativeLocation(): void;
    //
    alloc():cocoascript.CKLocationSortDescriptor;
    //
    init():cocoascript.CKLocationSortDescriptor;
  }
}

declare const CKLocationSortDescriptor: cocoascript.CKLocationSortDescriptor;
declare namespace cocoascript {
  /**
   * An object for grouping CloudKit operations to align with user interactions.
   * doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup
   */
  interface CKOperationGroup extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866236-init
    init():cocoascript.CKOperationGroup;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866202-initwithcoder
    initWithCoder(aDecoder: cocoascript.NSCoder):cocoascript.CKOperationGroup;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866240-defaultconfiguration
    defaultConfiguration(): cocoascript.CKOperationConfiguration;
    setDefaultConfiguration(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866229-expectedreceivesize
    expectedReceiveSize(): cocoascript.CKOperationGroupTransferSize;
    setExpectedReceiveSize(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866235-expectedsendsize
    expectedSendSize(): cocoascript.CKOperationGroupTransferSize;
    setExpectedSendSize(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866233-name
    name(): cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866238-operationgroupid
    operationGroupID(): cocoascript.NSString;
    setOperationGroupID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866220-quantity
    quantity(): cocoascript.NSUInteger;
    setQuantity(): void;
    //
    alloc():cocoascript.CKOperationGroup;
    //
    init():cocoascript.CKOperationGroup;
  }
}

declare const CKOperationGroup: cocoascript.CKOperationGroup;
declare namespace cocoascript {
  /**
   * An operation that modifies one or more records.
   * doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation
   */
  interface CKModifyRecordsOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447464-initwithrecordstosave
    initWithRecordsToSave_recordIDsToDelete(records: cocoascript.CKRecord, recordIDs: cocoascript.CKRecordID):cocoascript.CKModifyRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447466-init
    init():cocoascript.CKModifyRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447482-recordstosave
    recordsToSave(): cocoascript.CKRecord;
    setRecordsToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447479-recordidstodelete
    recordIDsToDelete(): cocoascript.CKRecordID;
    setRecordIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447472-clientchangetokendata
    clientChangeTokenData(): cocoascript.NSData;
    setClientChangeTokenData(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447484-atomic
    atomic(): cocoascript.BOOL;
    setAtomic(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447488-savepolicy
    savePolicy(): cocoascript.CKRecordSavePolicy;
    setSavePolicy(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447477-perrecordprogressblock
    perRecordProgressBlock(): number;
    setPerRecordProgressBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447470-perrecordcompletionblock
    perRecordCompletionBlock(): cocoascript.NSError;
    setPerRecordCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447486-modifyrecordscompletionblock
    modifyRecordsCompletionBlock(): cocoascript.NSError;
    setModifyRecordsCompletionBlock(): void;
    //
    alloc():cocoascript.CKModifyRecordsOperation;
    //
    init():cocoascript.CKModifyRecordsOperation;
  }
}

declare const CKModifyRecordsOperation: cocoascript.CKModifyRecordsOperation;
declare namespace cocoascript {
  /**
   * An object that represents a large file for a record.
   * doc://com.apple.documentation/documentation/cloudkit/ckasset
   */
  interface CKAsset extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckasset/1514990-initwithfileurl
    initWithFileURL(fileURL: cocoascript.NSURL):cocoascript.CKAsset;
    // doc://com.apple.documentation/documentation/cloudkit/ckasset/1515050-fileurl
    fileURL(): cocoascript.NSURL;
    setFileURL(): void;
    //
    alloc():cocoascript.CKAsset;
    //
    init():cocoascript.CKAsset;
  }
}

declare const CKAsset: cocoascript.CKAsset;
declare namespace cocoascript {
  /**
   * An operation that fetches metadata for one or more shares.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation
   */
  interface CKFetchShareMetadataOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/2715836-init
    init():cocoascript.CKFetchShareMetadataOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640495-initwithshareurls
    initWithShareURLs(shareURLs: cocoascript.NSURL):cocoascript.CKFetchShareMetadataOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640375-rootrecorddesiredkeys
    rootRecordDesiredKeys(): cocoascript.CKRecordFieldKey;
    setRootRecordDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640508-shareurls
    shareURLs(): cocoascript.NSURL;
    setShareURLs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640519-shouldfetchrootrecord
    shouldFetchRootRecord(): cocoascript.BOOL;
    setShouldFetchRootRecord(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640447-persharemetadatablock
    perShareMetadataBlock(): cocoascript.NSError;
    setPerShareMetadataBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640457-fetchsharemetadatacompletionbloc
    fetchShareMetadataCompletionBlock(): cocoascript.NSError;
    setFetchShareMetadataCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchShareMetadataOperation;
    //
    init():cocoascript.CKFetchShareMetadataOperation;
  }
}

declare const CKFetchShareMetadataOperation: cocoascript.CKFetchShareMetadataOperation;
declare namespace cocoascript {
  /**
   * The abstract base class for all operations that execute in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckoperation
   */
  interface CKOperation extends NSOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452370-init
    init():cocoascript.CKOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452362-operationid
    operationID(): cocoascript.CKOperationID;
    setOperationID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/2866213-configuration
    configuration(): cocoascript.CKOperationConfiguration;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/2866228-group
    group(): cocoascript.CKOperationGroup;
    setGroup(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452366-longlivedoperationwaspersistedbl
    longLivedOperationWasPersistedBlock(): void;
    setLongLivedOperationWasPersistedBlock(): void;
    //
    alloc():cocoascript.CKOperation;
    //
    init():cocoascript.CKOperation;
  }
}

declare const CKOperation: cocoascript.CKOperation;
declare namespace cocoascript {
  /**
   * An operation for executing queries in a database.
   * doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation
   */
  interface CKQueryOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1514958-initwithquery
    initWithQuery(query: cocoascript.CKQuery):cocoascript.CKQueryOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515033-initwithcursor
    initWithCursor(cursor: cocoascript.CKQueryCursor):cocoascript.CKQueryOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515115-init
    init():cocoascript.CKQueryOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515127-query
    query(): cocoascript.CKQuery;
    setQuery(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1514975-cursor
    cursor(): cocoascript.CKQueryCursor;
    setCursor(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515269-zoneid
    zoneID(): cocoascript.CKRecordZoneID;
    setZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515078-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515268-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515283-recordfetchedblock
    recordFetchedBlock(): cocoascript.CKRecord;
    setRecordFetchedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515067-querycompletionblock
    queryCompletionBlock(): cocoascript.NSError;
    setQueryCompletionBlock(): void;
    //
    alloc():cocoascript.CKQueryOperation;
    //
    init():cocoascript.CKQueryOperation;
  }
}

declare const CKQueryOperation: cocoascript.CKQueryOperation;
declare namespace cocoascript {
  /**
   * An encapsulation of content for an app.
   * doc://com.apple.documentation/documentation/cloudkit/ckcontainer
   */
  interface CKContainer extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399205-privateclouddatabase
    privateCloudDatabase(): cocoascript.CKDatabase;
    setPrivateCloudDatabase(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399166-publicclouddatabase
    publicCloudDatabase(): cocoascript.CKDatabase;
    setPublicCloudDatabase(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640408-sharedclouddatabase
    sharedCloudDatabase(): cocoascript.CKDatabase;
    setSharedCloudDatabase(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640475-databasewithdatabasescope
    databaseWithDatabaseScope(databaseScope: cocoascript.CKDatabaseScope):cocoascript.CKDatabase;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399182-containeridentifier
    containerIdentifier(): cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399180-accountstatuswithcompletionhandl
    accountStatusWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399174-requestapplicationpermission
    requestApplicationPermission_completionHandler(applicationPermission: cocoascript.CKApplicationPermissions, completionHandler: cocoascript.CKApplicationPermissionBlock):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399195-statusforapplicationpermission
    statusForApplicationPermission_completionHandler(applicationPermission: cocoascript.CKApplicationPermissions, completionHandler: cocoascript.CKApplicationPermissionBlock):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399215-addoperation
    addOperation(operation: cocoascript.CKOperation):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640421-discoverallidentitieswithcomplet
    discoverAllIdentitiesWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640430-discoveruseridentitywithemailadd
    discoverUserIdentityWithEmailAddress_completionHandler(email: cocoascript.NSString, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640516-discoveruseridentitywithphonenum
    discoverUserIdentityWithPhoneNumber_completionHandler(phoneNumber: cocoascript.NSString, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640517-discoveruseridentitywithuserreco
    discoverUserIdentityWithUserRecordID_completionHandler(userRecordID: cocoascript.CKRecordID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640489-fetchshareparticipantwithemailad
    fetchShareParticipantWithEmailAddress_completionHandler(emailAddress: cocoascript.NSString, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640493-fetchshareparticipantwithphonenu
    fetchShareParticipantWithPhoneNumber_completionHandler(phoneNumber: cocoascript.NSString, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640387-fetchshareparticipantwithuserrec
    fetchShareParticipantWithUserRecordID_completionHandler(userRecordID: cocoascript.CKRecordID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399191-fetchuserrecordidwithcompletionh
    fetchUserRecordIDWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcurrentuserdefaultname
    CKCurrentUserDefaultName(): cocoascript.const;
    setCKCurrentUserDefaultName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckownerdefaultname
    CKOwnerDefaultName(): cocoascript.const;
    setCKOwnerDefaultName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399160-fetchalllonglivedoperationidswit
    fetchAllLongLivedOperationIDsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399164-fetchlonglivedoperationwithid
    fetchLongLivedOperationWithID_completionHandler(operationID: cocoascript.CKOperationID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/2113666-fetchsharemetadatawithurl
    fetchShareMetadataWithURL_completionHandler(url: cocoascript.NSURL, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/2113667-acceptsharemetadata
    acceptShareMetadata_completionHandler(metadata: cocoascript.CKShareMetadata, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckaccountchangednotification
    CKAccountChangedNotification(): cocoascript.const;
    setCKAccountChangedNotification(): void;
    //
    alloc():cocoascript.CKContainer;
    //
    init():cocoascript.CKContainer;
  }
}

declare const CKContainer: cocoascript.CKContainer;
declare namespace cocoascript {
  /**
   * A conduit for accessing and performing operations on the data of an app container.
   * doc://com.apple.documentation/documentation/cloudkit/ckdatabase
   */
  interface CKDatabase extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449127-performquery
    performQuery_inZoneWithID_completionHandler(query: cocoascript.CKQuery, zoneID: cocoascript.CKRecordZoneID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449116-addoperation
    addOperation(operation: cocoascript.CKDatabaseOperation):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449126-fetchrecordwithid
    fetchRecordWithID_completionHandler(recordID: cocoascript.CKRecordID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449114-saverecord
    saveRecord_completionHandler(record: cocoascript.CKRecord, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449122-deleterecordwithid
    deleteRecordWithID_completionHandler(recordID: cocoascript.CKRecordID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449112-fetchallrecordzoneswithcompletio
    fetchAllRecordZonesWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449104-fetchrecordzonewithid
    fetchRecordZoneWithID_completionHandler(zoneID: cocoascript.CKRecordZoneID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449108-saverecordzone
    saveRecordZone_completionHandler(zone: cocoascript.CKRecordZone, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449118-deleterecordzonewithid
    deleteRecordZoneWithID_completionHandler(zoneID: cocoascript.CKRecordZoneID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449110-fetchallsubscriptionswithcomplet
    fetchAllSubscriptionsWithCompletionHandler(completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449106-fetchsubscriptionwithid
    fetchSubscriptionWithID_completionHandler(subscriptionID: cocoascript.CKSubscriptionID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449102-savesubscription
    saveSubscription_completionHandler(subscription: cocoascript.CKSubscription, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449120-deletesubscriptionwithid
    deleteSubscriptionWithID_completionHandler(subscriptionID: cocoascript.CKSubscriptionID, completionHandler: cocoascript.NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1640398-databasescope
    databaseScope(): cocoascript.CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():cocoascript.CKDatabase;
    //
    init():cocoascript.CKDatabase;
  }
}

declare const CKDatabase: cocoascript.CKDatabase;
declare namespace cocoascript {
  /**
   * An operation that fetches the web authentication token for an API token.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation
   */
  interface CKFetchWebAuthTokenOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1515266-initwithapitoken
    initWithAPIToken(APIToken: cocoascript.NSString):cocoascript.CKFetchWebAuthTokenOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/2715839-init
    init():cocoascript.CKFetchWebAuthTokenOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1515095-apitoken
    APIToken(): cocoascript.NSString;
    setAPIToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1514980-fetchwebauthtokencompletionblock
    fetchWebAuthTokenCompletionBlock(): cocoascript.NSError;
    setFetchWebAuthTokenCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchWebAuthTokenOperation;
    //
    init():cocoascript.CKFetchWebAuthTokenOperation;
  }
}

declare const CKFetchWebAuthTokenOperation: cocoascript.CKFetchWebAuthTokenOperation;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckerrorcode
type CKErrorCode = cocoascript.NSInteger;
}

declare namespace cocoascript {
  /**
   * The abstract base class for CloudKit notifications.
   * doc://com.apple.documentation/documentation/cloudkit/cknotification
   */
  interface CKNotification extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428080-notificationid
    notificationID(): cocoascript.CKNotificationID;
    setNotificationID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428078-notificationtype
    notificationType(): cocoascript.CKNotificationType;
    setNotificationType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428119-containeridentifier
    containerIdentifier(): cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428088-ispruned
    isPruned(): cocoascript.BOOL;
    setIsPruned(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428084-alertbody
    alertBody(): cocoascript.NSString;
    setAlertBody(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428095-alertlocalizationkey
    alertLocalizationKey(): cocoascript.NSString;
    setAlertLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428105-alertlocalizationargs
    alertLocalizationArgs(): cocoascript.NSString;
    setAlertLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428109-alertactionlocalizationkey
    alertActionLocalizationKey(): cocoascript.NSString;
    setAlertActionLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428103-alertlaunchimage
    alertLaunchImage(): cocoascript.NSString;
    setAlertLaunchImage(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428077-soundname
    soundName(): cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428082-badge
    badge(): cocoascript.NSNumber;
    setBadge(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428107-category
    category(): cocoascript.NSString;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428118-subscriptionid
    subscriptionID(): cocoascript.CKSubscriptionID;
    setSubscriptionID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/3577533-subscriptionowneruserrecordid
    subscriptionOwnerUserRecordID(): cocoascript.CKRecordID;
    setSubscriptionOwnerUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868440-title
    title(): cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868436-titlelocalizationkey
    titleLocalizationKey(): cocoascript.NSString;
    setTitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868437-titlelocalizationargs
    titleLocalizationArgs(): cocoascript.NSString;
    setTitleLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868435-subtitle
    subtitle(): cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868438-subtitlelocalizationkey
    subtitleLocalizationKey(): cocoascript.NSString;
    setSubtitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868439-subtitlelocalizationargs
    subtitleLocalizationArgs(): cocoascript.NSString;
    setSubtitleLocalizationArgs(): void;
    //
    alloc():cocoascript.CKNotification;
    //
    init():cocoascript.CKNotification;
  }
}

declare const CKNotification: cocoascript.CKNotification;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/cknotificationtype
type CKNotificationType = cocoascript.NSInteger;
}

declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordtype
  type CKRecordType = cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordfieldkey
  type CKRecordFieldKey = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An operation for retrieving records from CloudKit.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation
   */
  interface CKFetchRecordsOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476074-initwithrecordids
    initWithRecordIDs(recordIDs: cocoascript.CKRecordID):cocoascript.CKFetchRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476072-init
    init():cocoascript.CKFetchRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476076-recordids
    recordIDs(): cocoascript.CKRecordID;
    setRecordIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476088-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476080-perrecordprogressblock
    perRecordProgressBlock(): number;
    setPerRecordProgressBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476082-perrecordcompletionblock
    perRecordCompletionBlock(): cocoascript.NSError;
    setPerRecordCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476078-fetchrecordscompletionblock
    fetchRecordsCompletionBlock(): cocoascript.NSError;
    setFetchRecordsCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchRecordsOperation;
    //
    init():cocoascript.CKFetchRecordsOperation;
  }
}

declare const CKFetchRecordsOperation: cocoascript.CKFetchRecordsOperation;
declare namespace cocoascript {
  /**
   * An operation for retrieving zones from a CloudKit database.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation
   */
  interface CKFetchRecordZonesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515299-initwithrecordzoneids
    initWithRecordZoneIDs(zoneIDs: cocoascript.CKRecordZoneID):cocoascript.CKFetchRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515256-init
    init():cocoascript.CKFetchRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515084-recordzoneids
    recordZoneIDs(): cocoascript.CKRecordZoneID;
    setRecordZoneIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515145-fetchrecordzonescompletionblock
    fetchRecordZonesCompletionBlock(): cocoascript.NSError;
    setFetchRecordZonesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchRecordZonesOperation;
    //
    init():cocoascript.CKFetchRecordZonesOperation;
  }
}

declare const CKFetchRecordZonesOperation: cocoascript.CKFetchRecordZonesOperation;
declare namespace cocoascript {
  /**
   * An operation that retrieves unread notifications from a CloudKit container.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation
   */
  interface CKFetchNotificationChangesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515141-initwithpreviousserverchangetoke
    initWithPreviousServerChangeToken(previousServerChangeToken: cocoascript.CKServerChangeToken):cocoascript.CKFetchNotificationChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/2715837-init
    init():cocoascript.CKFetchNotificationChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515139-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515275-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515108-morecoming
    moreComing(): cocoascript.BOOL;
    setMoreComing(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515253-notificationchangedblock
    notificationChangedBlock(): cocoascript.CKNotification;
    setNotificationChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515125-fetchnotificationchangescompleti
    fetchNotificationChangesCompletionBlock(): cocoascript.NSError;
    setFetchNotificationChangesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchNotificationChangesOperation;
    //
    init():cocoascript.CKFetchNotificationChangesOperation;
  }
}

declare const CKFetchNotificationChangesOperation: cocoascript.CKFetchNotificationChangesOperation;
declare namespace cocoascript {
  /**
   * An object that represents a push notification that a query subscription generates.
   * doc://com.apple.documentation/documentation/cloudkit/ckquerynotification
   */
  interface CKQueryNotification extends CKNotification {
    // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1640449-databasescope
    databaseScope(): cocoascript.CKDatabaseScope;
    setDatabaseScope(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428123-querynotificationreason
    queryNotificationReason(): cocoascript.CKQueryNotificationReason;
    setQueryNotificationReason(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428134-recordid
    recordID(): cocoascript.CKRecordID;
    setRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428114-recordfields
    recordFields(): cocoascript.id;
    setRecordFields(): void;
    //
    alloc():cocoascript.CKQueryNotification;
    //
    init():cocoascript.CKQueryNotification;
  }
}

declare const CKQueryNotification: cocoascript.CKQueryNotification;
declare namespace cocoascript {
  /**
   * A notification that triggers when the contents of a record zone change.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordzonenotification
   */
  interface CKRecordZoneNotification extends CKNotification {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonenotification/1428086-recordzoneid
    recordZoneID(): cocoascript.CKRecordZoneID;
    setRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonenotification/1640394-databasescope
    databaseScope(): cocoascript.CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():cocoascript.CKRecordZoneNotification;
    //
    init():cocoascript.CKRecordZoneNotification;
  }
}

declare const CKRecordZoneNotification: cocoascript.CKRecordZoneNotification;
declare namespace cocoascript {
  /**
   * An operation for modifying one or more subscriptions.
   * doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation
   */
  interface CKModifySubscriptionsOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515015-initwithsubscriptionstosave
    initWithSubscriptionsToSave_subscriptionIDsToDelete(subscriptionsToSave: cocoascript.CKSubscription, subscriptionIDsToDelete: cocoascript.CKSubscriptionID):cocoascript.CKModifySubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/2715835-init
    init():cocoascript.CKModifySubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515135-subscriptionstosave
    subscriptionsToSave(): cocoascript.CKSubscription;
    setSubscriptionsToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1514892-subscriptionidstodelete
    subscriptionIDsToDelete(): cocoascript.CKSubscriptionID;
    setSubscriptionIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515288-modifysubscriptionscompletionblo
    modifySubscriptionsCompletionBlock(): cocoascript.NSError;
    setModifySubscriptionsCompletionBlock(): void;
    //
    alloc():cocoascript.CKModifySubscriptionsOperation;
    //
    init():cocoascript.CKModifySubscriptionsOperation;
  }
}

declare const CKModifySubscriptionsOperation: cocoascript.CKModifySubscriptionsOperation;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/cksubscriptiontype
type CKSubscriptionType = cocoascript.NSInteger;
}

declare namespace cocoascript {
  /**
   * An operation that modifies one or more record zones.
   * doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation
   */
  interface CKModifyRecordZonesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415167-initwithrecordzonestosave
    initWithRecordZonesToSave_recordZoneIDsToDelete(recordZonesToSave: cocoascript.CKRecordZone, recordZoneIDsToDelete: cocoascript.CKRecordZoneID):cocoascript.CKModifyRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415169-init
    init():cocoascript.CKModifyRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415171-recordzonestosave
    recordZonesToSave(): cocoascript.CKRecordZone;
    setRecordZonesToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415173-recordzoneidstodelete
    recordZoneIDsToDelete(): cocoascript.CKRecordZoneID;
    setRecordZoneIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415164-modifyrecordzonescompletionblock
    modifyRecordZonesCompletionBlock(): cocoascript.NSError;
    setModifyRecordZonesCompletionBlock(): void;
    //
    alloc():cocoascript.CKModifyRecordZonesOperation;
    //
    init():cocoascript.CKModifyRecordZonesOperation;
  }
}

declare const CKModifyRecordZonesOperation: cocoascript.CKModifyRecordZonesOperation;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckrecordzonecapabilities
type CKRecordZoneCapabilities = cocoascript.NSUInteger;
}

declare namespace cocoascript {
  /**
   * An operation that reports on the changed and deleted records in the specified record zone.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation
   */
  interface CKFetchRecordChangesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515224-initwithrecordzoneid
    initWithRecordZoneID_previousServerChangeToken(recordZoneID: cocoascript.CKRecordZoneID, previousServerChangeToken: cocoascript.CKServerChangeToken):cocoascript.CKFetchRecordChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/2715828-init
    init():cocoascript.CKFetchRecordChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515018-recordzoneid
    recordZoneID(): cocoascript.CKRecordZoneID;
    setRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515209-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515230-desiredkeys
    desiredKeys(): cocoascript.CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1514891-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515322-morecoming
    moreComing(): cocoascript.BOOL;
    setMoreComing(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515155-recordchangedblock
    recordChangedBlock(): cocoascript.CKRecord;
    setRecordChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515054-recordwithidwasdeletedblock
    recordWithIDWasDeletedBlock(): cocoascript.CKRecordID;
    setRecordWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515267-fetchrecordchangescompletionbloc
    fetchRecordChangesCompletionBlock(): cocoascript.NSError;
    setFetchRecordChangesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchRecordChangesOperation;
    //
    init():cocoascript.CKFetchRecordChangesOperation;
  }
}

declare const CKFetchRecordChangesOperation: cocoascript.CKFetchRecordChangesOperation;
declare namespace cocoascript {
  /**
   * The abstract base class for operations that act upon databases in CloudKit.
   * doc://com.apple.documentation/documentation/cloudkit/ckdatabaseoperation
   */
  interface CKDatabaseOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabaseoperation/1515274-database
    database(): cocoascript.CKDatabase;
    setDatabase(): void;
    //
    alloc():cocoascript.CKDatabaseOperation;
    //
    init():cocoascript.CKDatabaseOperation;
  }
}

declare const CKDatabaseOperation: cocoascript.CKDatabaseOperation;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckreferenceaction
type CKReferenceAction = cocoascript.NSUInteger;
}

declare namespace cocoascript {
  /**
   * An operation that fetches all discoverable user identities in the device’s Contacts.
   * doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation
   */
  interface CKDiscoverAllUserIdentitiesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640435-init
    init():cocoascript.CKDiscoverAllUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640416-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): cocoascript.CKUserIdentity;
    setUserIdentityDiscoveredBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640497-discoveralluseridentitiescomplet
    discoverAllUserIdentitiesCompletionBlock(): cocoascript.NSError;
    setDiscoverAllUserIdentitiesCompletionBlock(): void;
    //
    alloc():cocoascript.CKDiscoverAllUserIdentitiesOperation;
    //
    init():cocoascript.CKDiscoverAllUserIdentitiesOperation;
  }
}

declare const CKDiscoverAllUserIdentitiesOperation: cocoascript.CKDiscoverAllUserIdentitiesOperation;
declare namespace cocoascript {
  /**
   * An operation that fetches user identities.
   * doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation
   */
  interface CKDiscoverUserIdentitiesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640525-init
    init():cocoascript.CKDiscoverUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640521-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: cocoascript.CKUserIdentityLookupInfo):cocoascript.CKDiscoverUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640450-useridentitylookupinfos
    userIdentityLookupInfos(): cocoascript.CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640524-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): cocoascript.CKUserIdentityLookupInfo;
    setUserIdentityDiscoveredBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640500-discoveruseridentitiescompletion
    discoverUserIdentitiesCompletionBlock(): cocoascript.NSError;
    setDiscoverUserIdentitiesCompletionBlock(): void;
    //
    alloc():cocoascript.CKDiscoverUserIdentitiesOperation;
    //
    init():cocoascript.CKDiscoverUserIdentitiesOperation;
  }
}

declare const CKDiscoverUserIdentitiesOperation: cocoascript.CKDiscoverUserIdentitiesOperation;
declare namespace cocoascript {
  /**
   * An operation that fetches record zone changes.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation
   */
  interface CKFetchRecordZoneChangesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2980665-initwithrecordzoneids
    initWithRecordZoneIDs_configurationsByRecordZoneID(recordZoneIDs: cocoascript.CKRecordZoneID, configurationsByRecordZoneID: cocoascript.CKFetchRecordZoneChangesConfiguration):cocoascript.CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2715840-init
    init():cocoascript.CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640509-initwithrecordzoneids
    initWithRecordZoneIDs_optionsByRecordZoneID(recordZoneIDs: cocoascript.CKRecordZoneID, optionsByRecordZoneID: cocoascript.CKFetchRecordZoneChangesOptions):cocoascript.CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2980664-configurationsbyrecordzoneid
    configurationsByRecordZoneID(): cocoascript.CKFetchRecordZoneChangesConfiguration;
    setConfigurationsByRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640386-fetchallchanges
    fetchAllChanges(): cocoascript.BOOL;
    setFetchAllChanges(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640463-recordzoneids
    recordZoneIDs(): cocoascript.CKRecordZoneID;
    setRecordZoneIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640452-optionsbyrecordzoneid
    optionsByRecordZoneID(): cocoascript.CKFetchRecordZoneChangesOptions;
    setOptionsByRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640417-recordchangedblock
    recordChangedBlock(): cocoascript.CKRecord;
    setRecordChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640470-recordwithidwasdeletedblock
    recordWithIDWasDeletedBlock(): cocoascript.CKRecordType;
    setRecordWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640422-recordzonechangetokensupdatedblo
    recordZoneChangeTokensUpdatedBlock(): cocoascript.NSData;
    setRecordZoneChangeTokensUpdatedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640411-recordzonefetchcompletionblock
    recordZoneFetchCompletionBlock(): cocoascript.NSError;
    setRecordZoneFetchCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640409-fetchrecordzonechangescompletion
    fetchRecordZoneChangesCompletionBlock(): cocoascript.NSError;
    setFetchRecordZoneChangesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchRecordZoneChangesOperation;
    //
    init():cocoascript.CKFetchRecordZoneChangesOperation;
  }
}

declare const CKFetchRecordZoneChangesOperation: cocoascript.CKFetchRecordZoneChangesOperation;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckquerysubscriptionoptions
type CKQuerySubscriptionOptions = cocoascript.NSUInteger;
}

declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckshareparticipantacceptancestatus
type CKShareParticipantAcceptanceStatus = cocoascript.NSInteger;
}

declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckshareparticipantpermission
type CKShareParticipantPermission = cocoascript.NSInteger;
}

declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckoperationgrouptransfersize
type CKOperationGroupTransferSize = cocoascript.NSInteger;
}

declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckrecordsavepolicy
type CKRecordSavePolicy = cocoascript.NSInteger;
}

declare namespace cocoascript {
  /**
   * An operation that fetches database changes.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation
   */
  interface CKFetchDatabaseChangesOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640502-initwithpreviousserverchangetoke
    initWithPreviousServerChangeToken(previousServerChangeToken: cocoascript.CKServerChangeToken):cocoascript.CKFetchDatabaseChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/2715838-init
    init():cocoascript.CKFetchDatabaseChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640473-fetchallchanges
    fetchAllChanges(): cocoascript.BOOL;
    setFetchAllChanges(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640522-previousserverchangetoken
    previousServerChangeToken(): cocoascript.CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640520-resultslimit
    resultsLimit(): cocoascript.NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640391-recordzonewithidchangedblock
    recordZoneWithIDChangedBlock(): cocoascript.CKRecordZoneID;
    setRecordZoneWithIDChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640428-recordzonewithidwasdeletedblock
    recordZoneWithIDWasDeletedBlock(): cocoascript.CKRecordZoneID;
    setRecordZoneWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/2866207-recordzonewithidwaspurgedblock
    recordZoneWithIDWasPurgedBlock(): cocoascript.CKRecordZoneID;
    setRecordZoneWithIDWasPurgedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640467-changetokenupdatedblock
    changeTokenUpdatedBlock(): cocoascript.CKServerChangeToken;
    setChangeTokenUpdatedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640434-fetchdatabasechangescompletionbl
    fetchDatabaseChangesCompletionBlock(): cocoascript.NSError;
    setFetchDatabaseChangesCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchDatabaseChangesOperation;
    //
    init():cocoascript.CKFetchDatabaseChangesOperation;
  }
}

declare const CKFetchDatabaseChangesOperation: cocoascript.CKFetchDatabaseChangesOperation;
declare namespace cocoascript {
  /**
   * An operation that fetches a share’s participants.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation
   */
  interface CKFetchShareParticipantsOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640478-init
    init():cocoascript.CKFetchShareParticipantsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640471-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: cocoascript.CKUserIdentityLookupInfo):cocoascript.CKFetchShareParticipantsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640380-useridentitylookupinfos
    userIdentityLookupInfos(): cocoascript.CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640451-shareparticipantfetchedblock
    shareParticipantFetchedBlock(): cocoascript.CKShareParticipant;
    setShareParticipantFetchedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640529-fetchshareparticipantscompletion
    fetchShareParticipantsCompletionBlock(): cocoascript.NSError;
    setFetchShareParticipantsCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchShareParticipantsOperation;
    //
    init():cocoascript.CKFetchShareParticipantsOperation;
  }
}

declare const CKFetchShareParticipantsOperation: cocoascript.CKFetchShareParticipantsOperation;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationid
  type CKOperationID = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that describes how a CloudKit operation behaves.
   * doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration
   */
  interface CKOperationConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866217-allowscellularaccess
    allowsCellularAccess(): cocoascript.BOOL;
    setAllowsCellularAccess(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866232-container
    container(): cocoascript.CKContainer;
    setContainer(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866225-longlived
    longLived(): cocoascript.BOOL;
    setLongLived(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866201-qualityofservice
    qualityOfService(): cocoascript.NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866210-timeoutintervalforrequest
    timeoutIntervalForRequest(): cocoascript.NSTimeInterval;
    setTimeoutIntervalForRequest(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866221-timeoutintervalforresource
    timeoutIntervalForResource(): cocoascript.NSTimeInterval;
    setTimeoutIntervalForResource(): void;
    //
    alloc():cocoascript.CKOperationConfiguration;
    //
    init():cocoascript.CKOperationConfiguration;
  }
}

declare const CKOperationConfiguration: cocoascript.CKOperationConfiguration;
declare namespace cocoascript {
  /**
   * An operation for fetching subscriptions.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation
   */
  interface CKFetchSubscriptionsOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515157-initwithsubscriptionids
    initWithSubscriptionIDs(subscriptionIDs: cocoascript.CKSubscriptionID):cocoascript.CKFetchSubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515123-init
    init():cocoascript.CKFetchSubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515011-subscriptionids
    subscriptionIDs(): cocoascript.CKSubscriptionID;
    setSubscriptionIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515261-fetchsubscriptioncompletionblock
    fetchSubscriptionCompletionBlock(): cocoascript.NSError;
    setFetchSubscriptionCompletionBlock(): void;
    //
    alloc():cocoascript.CKFetchSubscriptionsOperation;
    //
    init():cocoascript.CKFetchSubscriptionsOperation;
  }
}

declare const CKFetchSubscriptionsOperation: cocoascript.CKFetchSubscriptionsOperation;
declare namespace cocoascript {
  /**
   * A notification that triggers when the contents of a database change.
   * doc://com.apple.documentation/documentation/cloudkit/ckdatabasenotification
   */
  interface CKDatabaseNotification extends CKNotification {
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasenotification/1640510-databasescope
    databaseScope(): cocoascript.CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():cocoascript.CKDatabaseNotification;
    //
    init():cocoascript.CKDatabaseNotification;
  }
}

declare const CKDatabaseNotification: cocoascript.CKDatabaseNotification;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckaccountstatus
type CKAccountStatus = cocoascript.NSInteger;
}

declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckapplicationpermissions
type CKApplicationPermissions = cocoascript.NSUInteger;
}

declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckapplicationpermissionblock
  type CKApplicationPermissionBlock = cocoascript.NSError;
}
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckapplicationpermissionstatus
type CKApplicationPermissionStatus = cocoascript.NSInteger;
}

declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckdatabasescope
type CKDatabaseScope = cocoascript.NSInteger;
}

declare namespace cocoascript {
  /**
   * An operation that sets the value of the app icon’s badge.
   * doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation
   */
  interface CKModifyBadgeOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391678-init
    init():cocoascript.CKModifyBadgeOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391676-initwithbadgevalue
    initWithBadgeValue(badgeValue: cocoascript.NSUInteger):cocoascript.CKModifyBadgeOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391674-badgevalue
    badgeValue(): cocoascript.NSUInteger;
    setBadgeValue(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391682-modifybadgecompletionblock
    modifyBadgeCompletionBlock(): cocoascript.NSError;
    setModifyBadgeCompletionBlock(): void;
    //
    alloc():cocoascript.CKModifyBadgeOperation;
    //
    init():cocoascript.CKModifyBadgeOperation;
  }
}

declare const CKModifyBadgeOperation: cocoascript.CKModifyBadgeOperation;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/NULL
type CKShareParticipantRole = cocoascript.NSInteger;
}

declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/cksubscriptionid
  type CKSubscriptionID = cocoascript.NSString;
}
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckshareparticipanttype
type CKShareParticipantType = cocoascript.NSInteger;
}

declare namespace cocoascript {
  /**
   * An operation that marks push notifications as read by your app.
   * doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation
   */
  interface CKMarkNotificationsReadOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515228-initwithnotificationidstomarkrea
    initWithNotificationIDsToMarkRead(notificationIDs: cocoascript.CKNotificationID):cocoascript.CKMarkNotificationsReadOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1640383-init
    init():cocoascript.CKMarkNotificationsReadOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515056-notificationids
    notificationIDs(): cocoascript.CKNotificationID;
    setNotificationIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515317-marknotificationsreadcompletionb
    markNotificationsReadCompletionBlock(): cocoascript.NSError;
    setMarkNotificationsReadCompletionBlock(): void;
    //
    alloc():cocoascript.CKMarkNotificationsReadOperation;
    //
    init():cocoascript.CKMarkNotificationsReadOperation;
  }
}

declare const CKMarkNotificationsReadOperation: cocoascript.CKMarkNotificationsReadOperation;
declare namespace cocoascript {
// doc://com.apple.documentation/documentation/cloudkit/ckquerynotificationreason
type CKQueryNotificationReason = cocoascript.NSInteger;
}

