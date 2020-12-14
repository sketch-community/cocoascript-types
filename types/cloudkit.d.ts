declare namespace cocoascript {
  /**
   * A protocol for managing the key-value pairs of a CloudKit record.
   * doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting
   */
  interface CKRecordKeyValueSetting extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976185-objectforkey
    objectForKey(key: CKRecordFieldKey):CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976186-objectforkeyedsubscript
    objectForKeyedSubscript(key: CKRecordFieldKey):CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976187-setobject
    setObject_forKey(object: CKRecordValue, key: CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976188-setobject
    setObject_forKeyedSubscript(object: CKRecordValue, key: CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976183-allkeys
    allKeys():CKRecordFieldKey;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordkeyvaluesetting/2976184-changedkeys
    changedKeys():CKRecordFieldKey;
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
    initWithCoder(aDecoder: NSCoder):CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640448-initwithrootrecord
    initWithRootRecord(rootRecord: CKRecord):CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640381-initwithrootrecord
    initWithRootRecord_shareID(rootRecord: CKRecord, shareID: CKRecordID):CKShare;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640494-publicpermission
    publicPermission(): CKShareParticipantPermission;
    setPublicPermission(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640443-addparticipant
    addParticipant(participant: CKShareParticipant):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640523-removeparticipant
    removeParticipant(participant: CKShareParticipant):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640503-owner
    owner(): CKShareParticipant;
    setOwner(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640453-participants
    participants(): CKShareParticipant;
    setParticipants(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640441-currentuserparticipant
    currentUserParticipant(): CKShareParticipant;
    setCurrentUserParticipant(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshare/1640465-url
    URL(): NSURL;
    setURL(): void;
    //
    alloc():CKShare;
    //
    init():CKShare;
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
    init():CKAcceptSharesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1823506-initwithsharemetadatas
    initWithShareMetadatas(shareMetadatas: CKShareMetadata):CKAcceptSharesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1823508-sharemetadatas
    shareMetadatas(): CKShareMetadata;
    setShareMetadatas(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640426-persharecompletionblock
    perShareCompletionBlock(): NSError;
    setPerShareCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckacceptsharesoperation/1640442-acceptsharescompletionblock
    acceptSharesCompletionBlock(): NSError;
    setAcceptSharesCompletionBlock(): void;
    //
    alloc():CKAcceptSharesOperation;
    //
    init():CKAcceptSharesOperation;
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
    share(): CKShare;
    setShare(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640400-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640498-owneridentity
    ownerIdentity(): CKUserIdentity;
    setOwnerIdentity(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640366-rootrecord
    rootRecord(): CKRecord;
    setRootRecord(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640410-rootrecordid
    rootRecordID(): CKRecordID;
    setRootRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/2980666-participantrole
    participantRole(): CKShareParticipantRole;
    setParticipantRole(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640483-participantpermission
    participantPermission(): CKShareParticipantPermission;
    setParticipantPermission(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640420-participantstatus
    participantStatus(): CKShareParticipantAcceptanceStatus;
    setParticipantStatus(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksharemetadata/1640518-participanttype
    participantType(): CKShareParticipantType;
    setParticipantType(): void;
    //
    alloc():CKShareMetadata;
    //
    init():CKShareMetadata;
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
    initWithRecordType_predicate(recordType: CKRecordType, predicate: NSPredicate):CKQuery;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413111-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKQuery;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413117-recordtype
    recordType(): CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413112-predicate
    predicate(): NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquery/1413121-sortdescriptors
    sortDescriptors(): NSSortDescriptor;
    setSortDescriptors(): void;
    //
    alloc():CKQuery;
    //
    init():CKQuery;
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
    alloc():CKNotificationID;
    //
    init():CKNotificationID;
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
    initWithRecordType(recordType: CKRecordType):CKRecord;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462202-initwithrecordtype
    initWithRecordType_zoneID(recordType: CKRecordType, zoneID: CKRecordZoneID):CKRecord;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462204-initwithrecordtype
    initWithRecordType_recordID(recordType: CKRecordType, recordID: CKRecordID):CKRecord;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462216-objectforkey
    objectForKey(key: CKRecordFieldKey):CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462210-objectforkeyedsubscript
    objectForKeyedSubscript(key: CKRecordFieldKey):CKRecordValue;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462231-setobject
    setObject_forKey(object: CKRecordValue, key: CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462221-setobject
    setObject_forKeyedSubscript(object: CKRecordValue, key: CKRecordFieldKey):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462220-allkeys
    allKeys():CKRecordFieldKey;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462197-changedkeys
    changedKeys():CKRecordFieldKey;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462229-recordid
    recordID(): CKRecordID;
    setRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462206-recordtype
    recordType(): CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462223-creationdate
    creationDate(): NSDate;
    setCreationDate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462208-creatoruserrecordid
    creatorUserRecordID(): CKRecordID;
    setCreatorUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462227-modificationdate
    modificationDate(): NSDate;
    setModificationDate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462212-lastmodifieduserrecordid
    lastModifiedUserRecordID(): CKRecordID;
    setLastModifiedUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462195-recordchangetag
    recordChangeTag(): string | cocoascript.NSString;
    setRecordChangeTag(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462199-alltokens
    allTokens():string | cocoascript.NSString;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1462200-encodesystemfieldswithcoder
    encodeSystemFieldsWithCoder(coder: NSCoder):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1640527-parent
    parent(): CKReference;
    setParent(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1640378-share
    share(): CKReference;
    setShare(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1690507-setparentreferencefromrecord
    setParentReferenceFromRecord(parentRecord: CKRecord):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecord/1690508-setparentreferencefromrecordid
    setParentReferenceFromRecordID(parentRecordID: CKRecordID):void;
    //
    alloc():CKRecord;
    //
    init():CKRecord;
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
    initWithRecordName(recordName: string | cocoascript.NSString):CKRecordID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500967-initwithrecordname
    initWithRecordName_zoneID(recordName: string | cocoascript.NSString, zoneID: CKRecordZoneID):CKRecordID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500973-recordname
    recordName(): string | cocoascript.NSString;
    setRecordName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordid/1500969-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():CKRecordID;
    //
    init():CKRecordID;
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
    initWithZoneName_ownerName(zoneName: string | cocoascript.NSString, ownerName: string | cocoascript.NSString):CKRecordZoneID;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508094-zonename
    zoneName(): string | cocoascript.NSString;
    setZoneName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzoneid/1508096-ownername
    ownerName(): string | cocoascript.NSString;
    setOwnerName(): void;
    //
    alloc():CKRecordZoneID;
    //
    init():CKRecordZoneID;
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
    alloc():CKQueryCursor;
    //
    init():CKQueryCursor;
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
    notificationInfo(): CKNotificationInfo;
    setNotificationInfo(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1515199-subscriptionid
    subscriptionID(): CKSubscriptionID;
    setSubscriptionID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cksubscription/1515250-subscriptiontype
    subscriptionType(): CKSubscriptionType;
    setSubscriptionType(): void;
    //
    alloc():CKSubscription;
    //
    init():CKSubscription;
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
    category(): string | cocoascript.NSString;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2887430-collapseidkey
    collapseIDKey(): string | cocoascript.NSString;
    setCollapseIDKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514996-shouldbadge
    shouldBadge(): BOOL;
    setShouldBadge(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515270-alertbody
    alertBody(): string | cocoascript.NSString;
    setAlertBody(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514968-alertlocalizationkey
    alertLocalizationKey(): string | cocoascript.NSString;
    setAlertLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515182-alertlocalizationargs
    alertLocalizationArgs(): CKRecordFieldKey;
    setAlertLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514945-alertactionlocalizationkey
    alertActionLocalizationKey(): string | cocoascript.NSString;
    setAlertActionLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515075-alertlaunchimage
    alertLaunchImage(): string | cocoascript.NSString;
    setAlertLaunchImage(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514987-soundname
    soundName(): string | cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1515110-shouldsendcontentavailable
    shouldSendContentAvailable(): BOOL;
    setShouldSendContentAvailable(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2868500-shouldsendmutablecontent
    shouldSendMutableContent(): BOOL;
    setShouldSendMutableContent(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/1514931-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869870-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869865-titlelocalizationkey
    titleLocalizationKey(): string | cocoascript.NSString;
    setTitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869866-titlelocalizationargs
    titleLocalizationArgs(): CKRecordFieldKey;
    setTitleLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869863-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869864-subtitlelocalizationkey
    subtitleLocalizationKey(): string | cocoascript.NSString;
    setSubtitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotificationinfo/2869869-subtitlelocalizationargs
    subtitleLocalizationArgs(): CKRecordFieldKey;
    setSubtitleLocalizationArgs(): void;
    //
    alloc():CKNotificationInfo;
    //
    init():CKNotificationInfo;
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
    initWithZoneName(zoneName: string | cocoascript.NSString):CKRecordZone;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515207-initwithzoneid
    initWithZoneID(zoneID: CKRecordZoneID):CKRecordZone;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1514919-defaultrecordzone
    defaultRecordZone():CKRecordZone;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1514917-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzone/1515194-capabilities
    capabilities(): CKRecordZoneCapabilities;
    setCapabilities(): void;
    //
    alloc():CKRecordZone;
    //
    init():CKRecordZone;
  }
}

declare const CKRecordZone: cocoascript.CKRecordZone;
// doc://com.apple.documentation/documentation/cloudkit/ckrecordzonedefaultname
declare const CKRecordZoneDefaultName: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that identifies a specific version of a record.
   * doc://com.apple.documentation/documentation/cloudkit/ckserverchangetoken
   */
  interface CKServerChangeToken extends NSObject {
    //
    alloc():CKServerChangeToken;
    //
    init():CKServerChangeToken;
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
    initWithRecordID_action(recordID: CKRecordID, action: CKReferenceAction):CKReference;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1515312-initwithrecord
    initWithRecord_action(record: CKRecord, action: CKReferenceAction):CKReference;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1514900-referenceaction
    referenceAction(): CKReferenceAction;
    setReferenceAction(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckreference/1514956-recordid
    recordID(): CKRecordID;
    setRecordID(): void;
    //
    alloc():CKReference;
    //
    init():CKReference;
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
    hasiCloudAccount(): BOOL;
    setHasiCloudAccount(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640371-lookupinfo
    lookupInfo(): CKUserIdentityLookupInfo;
    setLookupInfo(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640504-userrecordid
    userRecordID(): CKRecordID;
    setUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/2866227-contactidentifiers
    contactIdentifiers(): string | cocoascript.NSString;
    setContactIdentifiers(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentity/1640458-namecomponents
    nameComponents(): NSPersonNameComponents;
    setNameComponents(): void;
    //
    alloc():CKUserIdentity;
    //
    init():CKUserIdentity;
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
    initWithEmailAddress(emailAddress: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640402-initwithphonenumber
    initWithPhoneNumber(phoneNumber: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640419-initwithuserrecordid
    initWithUserRecordID(userRecordID: CKRecordID):CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640439-lookupinfoswithemails
    lookupInfosWithEmails(emails: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640429-lookupinfoswithphonenumbers
    lookupInfosWithPhoneNumbers(phoneNumbers: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640407-lookupinfoswithrecordids
    lookupInfosWithRecordIDs(recordIDs: CKRecordID):CKUserIdentityLookupInfo;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640462-emailaddress
    emailAddress(): string | cocoascript.NSString;
    setEmailAddress(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640482-phonenumber
    phoneNumber(): string | cocoascript.NSString;
    setPhoneNumber(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckuseridentitylookupinfo/1640405-userrecordid
    userRecordID(): CKRecordID;
    setUserRecordID(): void;
    //
    alloc():CKUserIdentityLookupInfo;
    //
    init():CKUserIdentityLookupInfo;
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
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640389-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640481-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(): void;
    //
    alloc():CKFetchRecordZoneChangesOptions;
    //
    init():CKFetchRecordZoneChangesOptions;
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
    initWithRecordType_predicate_options(recordType: CKRecordType, predicate: NSPredicate, querySubscriptionOptions: CKQuerySubscriptionOptions):CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640505-initwithrecordtype
    initWithRecordType_predicate_subscriptionID_options(recordType: CKRecordType, predicate: NSPredicate, subscriptionID: CKSubscriptionID, querySubscriptionOptions: CKQuerySubscriptionOptions):CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/3547081-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKQuerySubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640485-predicate
    predicate(): NSPredicate;
    setPredicate(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640414-querysubscriptionoptions
    querySubscriptionOptions(): CKQuerySubscriptionOptions;
    setQuerySubscriptionOptions(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640393-recordtype
    recordType(): CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerysubscription/1640390-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():CKQuerySubscription;
    //
    init():CKQuerySubscription;
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
    initWithZoneID(zoneID: CKRecordZoneID):CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640415-initwithzoneid
    initWithZoneID_subscriptionID(zoneID: CKRecordZoneID, subscriptionID: CKSubscriptionID):CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/3547082-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKRecordZoneSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640479-recordtype
    recordType(): CKRecordType;
    setRecordType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonesubscription/1640367-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(): void;
    //
    alloc():CKRecordZoneSubscription;
    //
    init():CKRecordZoneSubscription;
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
    init():CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640530-initwithsubscriptionid
    initWithSubscriptionID(subscriptionID: CKSubscriptionID):CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/3547080-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/2976439-new
    new():CKDatabaseSubscription;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabasesubscription/1640418-recordtype
    recordType(): CKRecordType;
    setRecordType(): void;
    //
    alloc():CKDatabaseSubscription;
    //
    init():CKDatabaseSubscription;
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
    acceptanceStatus(): CKShareParticipantAcceptanceStatus;
    setAcceptanceStatus(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant/1640488-useridentity
    userIdentity(): CKUserIdentity;
    setUserIdentity(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant/1640433-permission
    permission(): CKShareParticipantPermission;
    setPermission(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckshareparticipant/2980667-role
    role(): CKShareParticipantRole;
    setRole(): void;
    //
    alloc():CKShareParticipant;
    //
    init():CKShareParticipant;
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
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980663-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980661-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(): void;
    //
    alloc():CKFetchRecordZoneChangesConfiguration;
    //
    init():CKFetchRecordZoneChangesConfiguration;
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
    initWithKey_relativeLocation(key: string | cocoascript.NSString, relativeLocation: CLLocation):CKLocationSortDescriptor;
    // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1515257-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKLocationSortDescriptor;
    // doc://com.apple.documentation/documentation/cloudkit/cklocationsortdescriptor/1514915-relativelocation
    relativeLocation(): CLLocation;
    setRelativeLocation(): void;
    //
    alloc():CKLocationSortDescriptor;
    //
    init():CKLocationSortDescriptor;
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
    init():CKOperationGroup;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866202-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKOperationGroup;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866240-defaultconfiguration
    defaultConfiguration(): CKOperationConfiguration;
    setDefaultConfiguration(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866229-expectedreceivesize
    expectedReceiveSize(): CKOperationGroupTransferSize;
    setExpectedReceiveSize(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866235-expectedsendsize
    expectedSendSize(): CKOperationGroupTransferSize;
    setExpectedSendSize(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866233-name
    name(): string | cocoascript.NSString;
    setName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866238-operationgroupid
    operationGroupID(): string | cocoascript.NSString;
    setOperationGroupID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationgroup/2866220-quantity
    quantity(): NSUInteger;
    setQuantity(): void;
    //
    alloc():CKOperationGroup;
    //
    init():CKOperationGroup;
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
    initWithRecordsToSave_recordIDsToDelete(records: CKRecord, recordIDs: CKRecordID):CKModifyRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447466-init
    init():CKModifyRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447482-recordstosave
    recordsToSave(): CKRecord;
    setRecordsToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447479-recordidstodelete
    recordIDsToDelete(): CKRecordID;
    setRecordIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447472-clientchangetokendata
    clientChangeTokenData(): NSData;
    setClientChangeTokenData(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447484-atomic
    atomic(): BOOL;
    setAtomic(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447488-savepolicy
    savePolicy(): CKRecordSavePolicy;
    setSavePolicy(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447477-perrecordprogressblock
    perRecordProgressBlock(): number;
    setPerRecordProgressBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447470-perrecordcompletionblock
    perRecordCompletionBlock(): NSError;
    setPerRecordCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordsoperation/1447486-modifyrecordscompletionblock
    modifyRecordsCompletionBlock(): NSError;
    setModifyRecordsCompletionBlock(): void;
    //
    alloc():CKModifyRecordsOperation;
    //
    init():CKModifyRecordsOperation;
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
    initWithFileURL(fileURL: NSURL):CKAsset;
    // doc://com.apple.documentation/documentation/cloudkit/ckasset/1515050-fileurl
    fileURL(): NSURL;
    setFileURL(): void;
    //
    alloc():CKAsset;
    //
    init():CKAsset;
  }
}

declare const CKAsset: cocoascript.CKAsset;
// doc://com.apple.documentation/documentation/cloudkit/cksharetypekey
declare const CKShareTypeKey: CKRecordFieldKey;
// doc://com.apple.documentation/documentation/cloudkit/cksharetitlekey
declare const CKShareTitleKey: CKRecordFieldKey;
// doc://com.apple.documentation/documentation/cloudkit/cksharethumbnailimagedatakey
declare const CKShareThumbnailImageDataKey: CKRecordFieldKey;
declare namespace cocoascript {
  /**
   * An operation that fetches metadata for one or more shares.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation
   */
  interface CKFetchShareMetadataOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/2715836-init
    init():CKFetchShareMetadataOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640495-initwithshareurls
    initWithShareURLs(shareURLs: NSURL):CKFetchShareMetadataOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640375-rootrecorddesiredkeys
    rootRecordDesiredKeys(): CKRecordFieldKey;
    setRootRecordDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640508-shareurls
    shareURLs(): NSURL;
    setShareURLs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640519-shouldfetchrootrecord
    shouldFetchRootRecord(): BOOL;
    setShouldFetchRootRecord(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640447-persharemetadatablock
    perShareMetadataBlock(): NSError;
    setPerShareMetadataBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsharemetadataoperation/1640457-fetchsharemetadatacompletionbloc
    fetchShareMetadataCompletionBlock(): NSError;
    setFetchShareMetadataCompletionBlock(): void;
    //
    alloc():CKFetchShareMetadataOperation;
    //
    init():CKFetchShareMetadataOperation;
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
    init():CKOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452362-operationid
    operationID(): CKOperationID;
    setOperationID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/2866213-configuration
    configuration(): CKOperationConfiguration;
    setConfiguration(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/2866228-group
    group(): CKOperationGroup;
    setGroup(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperation/1452366-longlivedoperationwaspersistedbl
    longLivedOperationWasPersistedBlock(): void;
    setLongLivedOperationWasPersistedBlock(): void;
    //
    alloc():CKOperation;
    //
    init():CKOperation;
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
    initWithQuery(query: CKQuery):CKQueryOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515033-initwithcursor
    initWithCursor(cursor: CKQueryCursor):CKQueryOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515115-init
    init():CKQueryOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515127-query
    query(): CKQuery;
    setQuery(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1514975-cursor
    cursor(): CKQueryCursor;
    setCursor(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515269-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515078-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515268-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515283-recordfetchedblock
    recordFetchedBlock(): CKRecord;
    setRecordFetchedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckqueryoperation/1515067-querycompletionblock
    queryCompletionBlock(): NSError;
    setQueryCompletionBlock(): void;
    //
    alloc():CKQueryOperation;
    //
    init():CKQueryOperation;
  }
}

declare const CKQueryOperation: cocoascript.CKQueryOperation;
declare namespace cocoascript {
  /**
   * An encapsulation of content for an app.
   * doc://com.apple.documentation/documentation/cloudkit/ckcontainer
   */
  interface CKContainer extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399189-defaultcontainer
    defaultContainer():CKContainer;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399193-containerwithidentifier
    containerWithIdentifier(containerIdentifier: string | cocoascript.NSString):CKContainer;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399205-privateclouddatabase
    privateCloudDatabase(): CKDatabase;
    setPrivateCloudDatabase(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399166-publicclouddatabase
    publicCloudDatabase(): CKDatabase;
    setPublicCloudDatabase(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640408-sharedclouddatabase
    sharedCloudDatabase(): CKDatabase;
    setSharedCloudDatabase(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640475-databasewithdatabasescope
    databaseWithDatabaseScope(databaseScope: CKDatabaseScope):CKDatabase;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399182-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399180-accountstatuswithcompletionhandl
    accountStatusWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399174-requestapplicationpermission
    requestApplicationPermission_completionHandler(applicationPermission: CKApplicationPermissions, completionHandler: CKApplicationPermissionBlock):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399195-statusforapplicationpermission
    statusForApplicationPermission_completionHandler(applicationPermission: CKApplicationPermissions, completionHandler: CKApplicationPermissionBlock):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399215-addoperation
    addOperation(operation: CKOperation):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640421-discoverallidentitieswithcomplet
    discoverAllIdentitiesWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640430-discoveruseridentitywithemailadd
    discoverUserIdentityWithEmailAddress_completionHandler(email: string | cocoascript.NSString, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640516-discoveruseridentitywithphonenum
    discoverUserIdentityWithPhoneNumber_completionHandler(phoneNumber: string | cocoascript.NSString, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640517-discoveruseridentitywithuserreco
    discoverUserIdentityWithUserRecordID_completionHandler(userRecordID: CKRecordID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640489-fetchshareparticipantwithemailad
    fetchShareParticipantWithEmailAddress_completionHandler(emailAddress: string | cocoascript.NSString, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640493-fetchshareparticipantwithphonenu
    fetchShareParticipantWithPhoneNumber_completionHandler(phoneNumber: string | cocoascript.NSString, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1640387-fetchshareparticipantwithuserrec
    fetchShareParticipantWithUserRecordID_completionHandler(userRecordID: CKRecordID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399191-fetchuserrecordidwithcompletionh
    fetchUserRecordIDWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399160-fetchalllonglivedoperationidswit
    fetchAllLongLivedOperationIDsWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/1399164-fetchlonglivedoperationwithid
    fetchLongLivedOperationWithID_completionHandler(operationID: CKOperationID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/2113666-fetchsharemetadatawithurl
    fetchShareMetadataWithURL_completionHandler(url: NSURL, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckcontainer/2113667-acceptsharemetadata
    acceptShareMetadata_completionHandler(metadata: CKShareMetadata, completionHandler: NSError):void;
    //
    alloc():CKContainer;
    //
    init():CKContainer;
  }
}

declare const CKContainer: cocoascript.CKContainer;
// doc://com.apple.documentation/documentation/cloudkit/ckcurrentuserdefaultname
declare const CKCurrentUserDefaultName: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/cloudkit/ckownerdefaultname
declare const CKOwnerDefaultName: string | cocoascript.NSString;
// doc://com.apple.documentation/documentation/cloudkit/ckaccountchangednotification
declare const CKAccountChangedNotification: string | cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A conduit for accessing and performing operations on the data of an app container.
   * doc://com.apple.documentation/documentation/cloudkit/ckdatabase
   */
  interface CKDatabase extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449127-performquery
    performQuery_inZoneWithID_completionHandler(query: CKQuery, zoneID: CKRecordZoneID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449116-addoperation
    addOperation(operation: CKDatabaseOperation):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449126-fetchrecordwithid
    fetchRecordWithID_completionHandler(recordID: CKRecordID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449114-saverecord
    saveRecord_completionHandler(record: CKRecord, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449122-deleterecordwithid
    deleteRecordWithID_completionHandler(recordID: CKRecordID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449112-fetchallrecordzoneswithcompletio
    fetchAllRecordZonesWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449104-fetchrecordzonewithid
    fetchRecordZoneWithID_completionHandler(zoneID: CKRecordZoneID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449108-saverecordzone
    saveRecordZone_completionHandler(zone: CKRecordZone, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449118-deleterecordzonewithid
    deleteRecordZoneWithID_completionHandler(zoneID: CKRecordZoneID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449110-fetchallsubscriptionswithcomplet
    fetchAllSubscriptionsWithCompletionHandler(completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449106-fetchsubscriptionwithid
    fetchSubscriptionWithID_completionHandler(subscriptionID: CKSubscriptionID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449102-savesubscription
    saveSubscription_completionHandler(subscription: CKSubscription, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1449120-deletesubscriptionwithid
    deleteSubscriptionWithID_completionHandler(subscriptionID: CKSubscriptionID, completionHandler: NSError):void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdatabase/1640398-databasescope
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():CKDatabase;
    //
    init():CKDatabase;
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
    initWithAPIToken(APIToken: string | cocoascript.NSString):CKFetchWebAuthTokenOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/2715839-init
    init():CKFetchWebAuthTokenOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1515095-apitoken
    APIToken(): string | cocoascript.NSString;
    setAPIToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchwebauthtokenoperation/1514980-fetchwebauthtokencompletionblock
    fetchWebAuthTokenCompletionBlock(): NSError;
    setFetchWebAuthTokenCompletionBlock(): void;
    //
    alloc():CKFetchWebAuthTokenOperation;
    //
    init():CKFetchWebAuthTokenOperation;
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
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428130-notificationfromremotenotificati
    notificationFromRemoteNotificationDictionary(notificationDictionary: NSDictionary):CKNotification;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428080-notificationid
    notificationID(): CKNotificationID;
    setNotificationID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428078-notificationtype
    notificationType(): CKNotificationType;
    setNotificationType(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428119-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428088-ispruned
    isPruned(): BOOL;
    setIsPruned(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428084-alertbody
    alertBody(): string | cocoascript.NSString;
    setAlertBody(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428095-alertlocalizationkey
    alertLocalizationKey(): string | cocoascript.NSString;
    setAlertLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428105-alertlocalizationargs
    alertLocalizationArgs(): string | cocoascript.NSString;
    setAlertLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428109-alertactionlocalizationkey
    alertActionLocalizationKey(): string | cocoascript.NSString;
    setAlertActionLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428103-alertlaunchimage
    alertLaunchImage(): string | cocoascript.NSString;
    setAlertLaunchImage(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428077-soundname
    soundName(): string | cocoascript.NSString;
    setSoundName(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428082-badge
    badge(): NSNumber;
    setBadge(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428107-category
    category(): string | cocoascript.NSString;
    setCategory(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/1428118-subscriptionid
    subscriptionID(): CKSubscriptionID;
    setSubscriptionID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/3577533-subscriptionowneruserrecordid
    subscriptionOwnerUserRecordID(): CKRecordID;
    setSubscriptionOwnerUserRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868440-title
    title(): string | cocoascript.NSString;
    setTitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868436-titlelocalizationkey
    titleLocalizationKey(): string | cocoascript.NSString;
    setTitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868437-titlelocalizationargs
    titleLocalizationArgs(): string | cocoascript.NSString;
    setTitleLocalizationArgs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868435-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868438-subtitlelocalizationkey
    subtitleLocalizationKey(): string | cocoascript.NSString;
    setSubtitleLocalizationKey(): void;
    // doc://com.apple.documentation/documentation/cloudkit/cknotification/2868439-subtitlelocalizationargs
    subtitleLocalizationArgs(): string | cocoascript.NSString;
    setSubtitleLocalizationArgs(): void;
    //
    alloc():CKNotification;
    //
    init():CKNotification;
  }
}

declare const CKNotification: cocoascript.CKNotification;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/cknotificationtype
  type CKNotificationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordtype
  type CKRecordType = string | cocoascript.NSString;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckrecordfieldkey
  type CKRecordFieldKey = string | cocoascript.NSString;
}
// doc://com.apple.documentation/documentation/cloudkit/ckrecordparentkey
declare const CKRecordParentKey: CKRecordFieldKey;
// doc://com.apple.documentation/documentation/cloudkit/ckrecordsharekey
declare const CKRecordShareKey: CKRecordFieldKey;
// doc://com.apple.documentation/documentation/cloudkit/ckrecordtypeshare
declare const CKRecordTypeShare: CKRecordType;
// doc://com.apple.documentation/documentation/cloudkit/ckrecordtypeuserrecord
declare const CKRecordTypeUserRecord: CKRecordType;
declare namespace cocoascript {
  /**
   * An operation for retrieving records from CloudKit.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation
   */
  interface CKFetchRecordsOperation extends CKDatabaseOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476074-initwithrecordids
    initWithRecordIDs(recordIDs: CKRecordID):CKFetchRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476072-init
    init():CKFetchRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476070-fetchcurrentuserrecordoperation
    fetchCurrentUserRecordOperation():CKFetchRecordsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476076-recordids
    recordIDs(): CKRecordID;
    setRecordIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476088-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476080-perrecordprogressblock
    perRecordProgressBlock(): number;
    setPerRecordProgressBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476082-perrecordcompletionblock
    perRecordCompletionBlock(): NSError;
    setPerRecordCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordsoperation/1476078-fetchrecordscompletionblock
    fetchRecordsCompletionBlock(): NSError;
    setFetchRecordsCompletionBlock(): void;
    //
    alloc():CKFetchRecordsOperation;
    //
    init():CKFetchRecordsOperation;
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
    initWithRecordZoneIDs(zoneIDs: CKRecordZoneID):CKFetchRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515256-init
    init():CKFetchRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1514890-fetchallrecordzonesoperation
    fetchAllRecordZonesOperation():CKFetchRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515084-recordzoneids
    recordZoneIDs(): CKRecordZoneID;
    setRecordZoneIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonesoperation/1515145-fetchrecordzonescompletionblock
    fetchRecordZonesCompletionBlock(): NSError;
    setFetchRecordZonesCompletionBlock(): void;
    //
    alloc():CKFetchRecordZonesOperation;
    //
    init():CKFetchRecordZonesOperation;
  }
}

declare const CKFetchRecordZonesOperation: cocoascript.CKFetchRecordZonesOperation;
// doc://com.apple.documentation/documentation/cloudkit/ckqueryoperationmaximumresults
declare const CKQueryOperationMaximumResults: NSUInteger;
declare namespace cocoascript {
  /**
   * An operation that retrieves unread notifications from a CloudKit container.
   * doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation
   */
  interface CKFetchNotificationChangesOperation extends CKOperation {
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515141-initwithpreviousserverchangetoke
    initWithPreviousServerChangeToken(previousServerChangeToken: CKServerChangeToken):CKFetchNotificationChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/2715837-init
    init():CKFetchNotificationChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515139-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515275-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515108-morecoming
    moreComing(): BOOL;
    setMoreComing(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515253-notificationchangedblock
    notificationChangedBlock(): CKNotification;
    setNotificationChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchnotificationchangesoperation/1515125-fetchnotificationchangescompleti
    fetchNotificationChangesCompletionBlock(): NSError;
    setFetchNotificationChangesCompletionBlock(): void;
    //
    alloc():CKFetchNotificationChangesOperation;
    //
    init():CKFetchNotificationChangesOperation;
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
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428123-querynotificationreason
    queryNotificationReason(): CKQueryNotificationReason;
    setQueryNotificationReason(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428134-recordid
    recordID(): CKRecordID;
    setRecordID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckquerynotification/1428114-recordfields
    recordFields(): id;
    setRecordFields(): void;
    //
    alloc():CKQueryNotification;
    //
    init():CKQueryNotification;
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
    recordZoneID(): CKRecordZoneID;
    setRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckrecordzonenotification/1640394-databasescope
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():CKRecordZoneNotification;
    //
    init():CKRecordZoneNotification;
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
    initWithSubscriptionsToSave_subscriptionIDsToDelete(subscriptionsToSave: CKSubscription, subscriptionIDsToDelete: CKSubscriptionID):CKModifySubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/2715835-init
    init():CKModifySubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515135-subscriptionstosave
    subscriptionsToSave(): CKSubscription;
    setSubscriptionsToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1514892-subscriptionidstodelete
    subscriptionIDsToDelete(): CKSubscriptionID;
    setSubscriptionIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifysubscriptionsoperation/1515288-modifysubscriptionscompletionblo
    modifySubscriptionsCompletionBlock(): NSError;
    setModifySubscriptionsCompletionBlock(): void;
    //
    alloc():CKModifySubscriptionsOperation;
    //
    init():CKModifySubscriptionsOperation;
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
    initWithRecordZonesToSave_recordZoneIDsToDelete(recordZonesToSave: CKRecordZone, recordZoneIDsToDelete: CKRecordZoneID):CKModifyRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415169-init
    init():CKModifyRecordZonesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415171-recordzonestosave
    recordZonesToSave(): CKRecordZone;
    setRecordZonesToSave(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415173-recordzoneidstodelete
    recordZoneIDsToDelete(): CKRecordZoneID;
    setRecordZoneIDsToDelete(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifyrecordzonesoperation/1415164-modifyrecordzonescompletionblock
    modifyRecordZonesCompletionBlock(): NSError;
    setModifyRecordZonesCompletionBlock(): void;
    //
    alloc():CKModifyRecordZonesOperation;
    //
    init():CKModifyRecordZonesOperation;
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
    initWithRecordZoneID_previousServerChangeToken(recordZoneID: CKRecordZoneID, previousServerChangeToken: CKServerChangeToken):CKFetchRecordChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/2715828-init
    init():CKFetchRecordChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515018-recordzoneid
    recordZoneID(): CKRecordZoneID;
    setRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515209-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515230-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1514891-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515322-morecoming
    moreComing(): BOOL;
    setMoreComing(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515155-recordchangedblock
    recordChangedBlock(): CKRecord;
    setRecordChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515054-recordwithidwasdeletedblock
    recordWithIDWasDeletedBlock(): CKRecordID;
    setRecordWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordchangesoperation/1515267-fetchrecordchangescompletionbloc
    fetchRecordChangesCompletionBlock(): NSError;
    setFetchRecordChangesCompletionBlock(): void;
    //
    alloc():CKFetchRecordChangesOperation;
    //
    init():CKFetchRecordChangesOperation;
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
    database(): CKDatabase;
    setDatabase(): void;
    //
    alloc():CKDatabaseOperation;
    //
    init():CKDatabaseOperation;
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
    init():CKDiscoverAllUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640416-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): CKUserIdentity;
    setUserIdentityDiscoveredBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640497-discoveralluseridentitiescomplet
    discoverAllUserIdentitiesCompletionBlock(): NSError;
    setDiscoverAllUserIdentitiesCompletionBlock(): void;
    //
    alloc():CKDiscoverAllUserIdentitiesOperation;
    //
    init():CKDiscoverAllUserIdentitiesOperation;
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
    init():CKDiscoverUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640521-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: CKUserIdentityLookupInfo):CKDiscoverUserIdentitiesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640450-useridentitylookupinfos
    userIdentityLookupInfos(): CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640524-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): CKUserIdentityLookupInfo;
    setUserIdentityDiscoveredBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640500-discoveruseridentitiescompletion
    discoverUserIdentitiesCompletionBlock(): NSError;
    setDiscoverUserIdentitiesCompletionBlock(): void;
    //
    alloc():CKDiscoverUserIdentitiesOperation;
    //
    init():CKDiscoverUserIdentitiesOperation;
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
    initWithRecordZoneIDs_configurationsByRecordZoneID(recordZoneIDs: CKRecordZoneID, configurationsByRecordZoneID: CKFetchRecordZoneChangesConfiguration):CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2715840-init
    init():CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640509-initwithrecordzoneids
    initWithRecordZoneIDs_optionsByRecordZoneID(recordZoneIDs: CKRecordZoneID, optionsByRecordZoneID: CKFetchRecordZoneChangesOptions):CKFetchRecordZoneChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/2980664-configurationsbyrecordzoneid
    configurationsByRecordZoneID(): CKFetchRecordZoneChangesConfiguration;
    setConfigurationsByRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640386-fetchallchanges
    fetchAllChanges(): BOOL;
    setFetchAllChanges(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640463-recordzoneids
    recordZoneIDs(): CKRecordZoneID;
    setRecordZoneIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640452-optionsbyrecordzoneid
    optionsByRecordZoneID(): CKFetchRecordZoneChangesOptions;
    setOptionsByRecordZoneID(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640417-recordchangedblock
    recordChangedBlock(): CKRecord;
    setRecordChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640470-recordwithidwasdeletedblock
    recordWithIDWasDeletedBlock(): CKRecordType;
    setRecordWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640422-recordzonechangetokensupdatedblo
    recordZoneChangeTokensUpdatedBlock(): NSData;
    setRecordZoneChangeTokensUpdatedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640411-recordzonefetchcompletionblock
    recordZoneFetchCompletionBlock(): NSError;
    setRecordZoneFetchCompletionBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640409-fetchrecordzonechangescompletion
    fetchRecordZoneChangesCompletionBlock(): NSError;
    setFetchRecordZoneChangesCompletionBlock(): void;
    //
    alloc():CKFetchRecordZoneChangesOperation;
    //
    init():CKFetchRecordZoneChangesOperation;
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
    initWithPreviousServerChangeToken(previousServerChangeToken: CKServerChangeToken):CKFetchDatabaseChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/2715838-init
    init():CKFetchDatabaseChangesOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640473-fetchallchanges
    fetchAllChanges(): BOOL;
    setFetchAllChanges(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640522-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640520-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640391-recordzonewithidchangedblock
    recordZoneWithIDChangedBlock(): CKRecordZoneID;
    setRecordZoneWithIDChangedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640428-recordzonewithidwasdeletedblock
    recordZoneWithIDWasDeletedBlock(): CKRecordZoneID;
    setRecordZoneWithIDWasDeletedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/2866207-recordzonewithidwaspurgedblock
    recordZoneWithIDWasPurgedBlock(): CKRecordZoneID;
    setRecordZoneWithIDWasPurgedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640467-changetokenupdatedblock
    changeTokenUpdatedBlock(): CKServerChangeToken;
    setChangeTokenUpdatedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchdatabasechangesoperation/1640434-fetchdatabasechangescompletionbl
    fetchDatabaseChangesCompletionBlock(): NSError;
    setFetchDatabaseChangesCompletionBlock(): void;
    //
    alloc():CKFetchDatabaseChangesOperation;
    //
    init():CKFetchDatabaseChangesOperation;
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
    init():CKFetchShareParticipantsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640471-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: CKUserIdentityLookupInfo):CKFetchShareParticipantsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640380-useridentitylookupinfos
    userIdentityLookupInfos(): CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640451-shareparticipantfetchedblock
    shareParticipantFetchedBlock(): CKShareParticipant;
    setShareParticipantFetchedBlock(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchshareparticipantsoperation/1640529-fetchshareparticipantscompletion
    fetchShareParticipantsCompletionBlock(): NSError;
    setFetchShareParticipantsCompletionBlock(): void;
    //
    alloc():CKFetchShareParticipantsOperation;
    //
    init():CKFetchShareParticipantsOperation;
  }
}

declare const CKFetchShareParticipantsOperation: cocoascript.CKFetchShareParticipantsOperation;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckoperationid
  type CKOperationID = string | cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that describes how a CloudKit operation behaves.
   * doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration
   */
  interface CKOperationConfiguration extends NSObject {
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866217-allowscellularaccess
    allowsCellularAccess(): BOOL;
    setAllowsCellularAccess(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866232-container
    container(): CKContainer;
    setContainer(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866225-longlived
    longLived(): BOOL;
    setLongLived(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866201-qualityofservice
    qualityOfService(): NSQualityOfService;
    setQualityOfService(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866210-timeoutintervalforrequest
    timeoutIntervalForRequest(): NSTimeInterval;
    setTimeoutIntervalForRequest(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckoperationconfiguration/2866221-timeoutintervalforresource
    timeoutIntervalForResource(): NSTimeInterval;
    setTimeoutIntervalForResource(): void;
    //
    alloc():CKOperationConfiguration;
    //
    init():CKOperationConfiguration;
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
    initWithSubscriptionIDs(subscriptionIDs: CKSubscriptionID):CKFetchSubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515123-init
    init():CKFetchSubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515282-fetchallsubscriptionsoperation
    fetchAllSubscriptionsOperation():CKFetchSubscriptionsOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515011-subscriptionids
    subscriptionIDs(): CKSubscriptionID;
    setSubscriptionIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckfetchsubscriptionsoperation/1515261-fetchsubscriptioncompletionblock
    fetchSubscriptionCompletionBlock(): NSError;
    setFetchSubscriptionCompletionBlock(): void;
    //
    alloc():CKFetchSubscriptionsOperation;
    //
    init():CKFetchSubscriptionsOperation;
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
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(): void;
    //
    alloc():CKDatabaseNotification;
    //
    init():CKDatabaseNotification;
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
    init():CKModifyBadgeOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391676-initwithbadgevalue
    initWithBadgeValue(badgeValue: NSUInteger):CKModifyBadgeOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391674-badgevalue
    badgeValue(): NSUInteger;
    setBadgeValue(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmodifybadgeoperation/1391682-modifybadgecompletionblock
    modifyBadgeCompletionBlock(): NSError;
    setModifyBadgeCompletionBlock(): void;
    //
    alloc():CKModifyBadgeOperation;
    //
    init():CKModifyBadgeOperation;
  }
}

declare const CKModifyBadgeOperation: cocoascript.CKModifyBadgeOperation;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/NULL
  type CKShareParticipantRole = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/cksubscriptionid
  type CKSubscriptionID = string | cocoascript.NSString;
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
    initWithNotificationIDsToMarkRead(notificationIDs: CKNotificationID):CKMarkNotificationsReadOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1640383-init
    init():CKMarkNotificationsReadOperation;
    // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515056-notificationids
    notificationIDs(): CKNotificationID;
    setNotificationIDs(): void;
    // doc://com.apple.documentation/documentation/cloudkit/ckmarknotificationsreadoperation/1515317-marknotificationsreadcompletionb
    markNotificationsReadCompletionBlock(): NSError;
    setMarkNotificationsReadCompletionBlock(): void;
    //
    alloc():CKMarkNotificationsReadOperation;
    //
    init():CKMarkNotificationsReadOperation;
  }
}

declare const CKMarkNotificationsReadOperation: cocoascript.CKMarkNotificationsReadOperation;
declare namespace cocoascript {
  // doc://com.apple.documentation/documentation/cloudkit/ckquerynotificationreason
  type CKQueryNotificationReason = cocoascript.NSInteger;
}
