declare namespace cocoascript {
  /**
   * A specialized record type that manages a collection of shared records.
   * https://developer.apple.com/documentation/cloudkit/ckshare
   */
  interface CKShare extends CKRecord {
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640432-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKShare;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640448-initwithrootrecord
    initWithRootRecord(rootRecord: CKRecord):CKShare;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640381-initwithrootrecord
    initWithRootRecord_shareID(rootRecord: CKRecord, shareID: CKRecordID):CKShare;
    // https://developer.apple.com/documentation/cloudkit/ckshare/3746825-initwithrecordzoneid
    initWithRecordZoneID(recordZoneID: CKRecordZoneID):CKShare;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640503-owner
    owner(): CKShareParticipant;
    setOwner(value: CKShareParticipant): void;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640441-currentuserparticipant
    currentUserParticipant(): CKShareParticipant;
    setCurrentUserParticipant(value: CKShareParticipant): void;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640453-participants
    participants(): CKShareParticipant;
    setParticipants(value: CKShareParticipant): void;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640465-url
    URL(): NSURL;
    setURL(value: NSURL): void;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640494-publicpermission
    publicPermission(): CKShareParticipantPermission;
    setPublicPermission(value: CKShareParticipantPermission): void;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640443-addparticipant
    addParticipant(participant: CKShareParticipant):void;
    // https://developer.apple.com/documentation/cloudkit/ckshare/1640523-removeparticipant
    removeParticipant(participant: CKShareParticipant):void;
    //
    alloc():CKShare;
    //
    init():CKShare;
  }
}

declare const CKShare: cocoascript.CKShare;
declare namespace cocoascript {
  /**
   * A protocol for managing the key-value pairs of a CloudKit record.
   * https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting
   */
  interface CKRecordKeyValueSetting extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/2976185-objectforkey
    objectForKey(key: CKRecordFieldKey):CKRecordValue;
    // https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/2976186-objectforkeyedsubscript
    objectForKeyedSubscript(key: CKRecordFieldKey):CKRecordValue;
    // https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/2976187-setobject
    setObject_forKey(object: CKRecordValue, key: CKRecordFieldKey):void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/2976188-setobject
    setObject_forKeyedSubscript(object: CKRecordValue, key: CKRecordFieldKey):void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/2976183-allkeys
    allKeys():CKRecordFieldKey;
    // https://developer.apple.com/documentation/cloudkit/ckrecordkeyvaluesetting/2976184-changedkeys
    changedKeys():CKRecordFieldKey;
  }
}
declare namespace cocoascript {
  /**
   * The protocol that provides strong type-checking for objects that the CloudKit framework stores on the server.
   * https://developer.apple.com/documentation/cloudkit/ckrecordvalue
   */
  interface CKRecordValue extends NSObject {
  }
}
declare namespace cocoascript {
  /**
   * An operation that confirms a user’s participation in a share.
   * https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation
   */
  interface CKAcceptSharesOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/1640506-init
    init():CKAcceptSharesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/1823506-initwithsharemetadatas
    initWithShareMetadatas(shareMetadatas: CKShareMetadata):CKAcceptSharesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/1823508-sharemetadatas
    shareMetadatas(): CKShareMetadata;
    setShareMetadatas(value: CKShareMetadata): void;
    // https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/1640426-persharecompletionblock
    perShareCompletionBlock(): NSError;
    setPerShareCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckacceptsharesoperation/1640442-acceptsharescompletionblock
    acceptSharesCompletionBlock(): NSError;
    setAcceptSharesCompletionBlock(value: NSError): void;
    //
    alloc():CKAcceptSharesOperation;
    //
    init():CKAcceptSharesOperation;
  }
}

declare const CKAcceptSharesOperation: cocoascript.CKAcceptSharesOperation;
declare namespace cocoascript {
  /**
   * An object that describes a shared record’s metadata.
   * https://developer.apple.com/documentation/cloudkit/cksharemetadata
   */
  interface CKShareMetadata extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640412-share
    share(): CKShare;
    setShare(value: CKShare): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640400-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640498-owneridentity
    ownerIdentity(): CKUserIdentity;
    setOwnerIdentity(value: CKUserIdentity): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/3793709-hierarchicalrootrecordid
    hierarchicalRootRecordID(): CKRecordID;
    setHierarchicalRootRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640366-rootrecord
    rootRecord(): CKRecord;
    setRootRecord(value: CKRecord): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640410-rootrecordid
    rootRecordID(): CKRecordID;
    setRootRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/2980666-participantrole
    participantRole(): CKShareParticipantRole;
    setParticipantRole(value: CKShareParticipantRole): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640483-participantpermission
    participantPermission(): CKShareParticipantPermission;
    setParticipantPermission(value: CKShareParticipantPermission): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640420-participantstatus
    participantStatus(): CKShareParticipantAcceptanceStatus;
    setParticipantStatus(value: CKShareParticipantAcceptanceStatus): void;
    // https://developer.apple.com/documentation/cloudkit/cksharemetadata/1640518-participanttype
    participantType(): CKShareParticipantType;
    setParticipantType(value: CKShareParticipantType): void;
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
   * https://developer.apple.com/documentation/cloudkit/ckquery
   */
  interface CKQuery extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckquery/1413119-initwithrecordtype
    initWithRecordType_predicate(recordType: CKRecordType, predicate: NSPredicate):CKQuery;
    // https://developer.apple.com/documentation/cloudkit/ckquery/1413111-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKQuery;
    // https://developer.apple.com/documentation/cloudkit/ckquery/1413117-recordtype
    recordType(): CKRecordType;
    setRecordType(value: CKRecordType): void;
    // https://developer.apple.com/documentation/cloudkit/ckquery/1413112-predicate
    predicate(): NSPredicate;
    setPredicate(value: NSPredicate): void;
    // https://developer.apple.com/documentation/cloudkit/ckquery/1413121-sortdescriptors
    sortDescriptors(): NSSortDescriptor;
    setSortDescriptors(value: NSSortDescriptor): void;
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
   * https://developer.apple.com/documentation/cloudkit/cknotificationid
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
   * A collection of key-value pairs that store your app’s data.
   * https://developer.apple.com/documentation/cloudkit/ckrecord
   */
  interface CKRecord extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462225-initwithrecordtype
    initWithRecordType(recordType: CKRecordType):CKRecord;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462202-initwithrecordtype
    initWithRecordType_zoneID(recordType: CKRecordType, zoneID: CKRecordZoneID):CKRecord;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462204-initwithrecordtype
    initWithRecordType_recordID(recordType: CKRecordType, recordID: CKRecordID):CKRecord;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462216-objectforkey
    objectForKey(key: CKRecordFieldKey):CKRecordValue;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462210-objectforkeyedsubscript
    objectForKeyedSubscript(key: CKRecordFieldKey):CKRecordValue;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462231-setobject
    setObject_forKey(object: CKRecordValue, key: CKRecordFieldKey):void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462221-setobject
    setObject_forKeyedSubscript(object: CKRecordValue, key: CKRecordFieldKey):void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462220-allkeys
    allKeys():CKRecordFieldKey;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462197-changedkeys
    changedKeys():CKRecordFieldKey;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462229-recordid
    recordID(): CKRecordID;
    setRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462206-recordtype
    recordType(): CKRecordType;
    setRecordType(value: CKRecordType): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462223-creationdate
    creationDate(): NSDate;
    setCreationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462208-creatoruserrecordid
    creatorUserRecordID(): CKRecordID;
    setCreatorUserRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462227-modificationdate
    modificationDate(): NSDate;
    setModificationDate(value: NSDate): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462212-lastmodifieduserrecordid
    lastModifiedUserRecordID(): CKRecordID;
    setLastModifiedUserRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462195-recordchangetag
    recordChangeTag(): string | cocoascript.NSString;
    setRecordChangeTag(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/3746821-encryptedvalues
    encryptedValues(): CKRecordKeyValueSetting;
    setEncryptedValues(value: CKRecordKeyValueSetting): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462199-alltokens
    allTokens():NSString;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1462200-encodesystemfieldswithcoder
    encodeSystemFieldsWithCoder(coder: NSCoder):void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1640527-parent
    parent(): CKReference;
    setParent(value: CKReference): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1640378-share
    share(): CKReference;
    setShare(value: CKReference): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1690507-setparentreferencefromrecord
    setParentReferenceFromRecord(parentRecord: CKRecord):void;
    // https://developer.apple.com/documentation/cloudkit/ckrecord/1690508-setparentreferencefromrecordid
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
   * https://developer.apple.com/documentation/cloudkit/ckrecordid
   */
  interface CKRecordID extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckrecordid/1500975-initwithrecordname
    initWithRecordName(recordName: string | cocoascript.NSString):CKRecordID;
    // https://developer.apple.com/documentation/cloudkit/ckrecordid/1500967-initwithrecordname
    initWithRecordName_zoneID(recordName: string | cocoascript.NSString, zoneID: CKRecordZoneID):CKRecordID;
    // https://developer.apple.com/documentation/cloudkit/ckrecordid/1500973-recordname
    recordName(): string | cocoascript.NSString;
    setRecordName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordid/1500969-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(value: CKRecordZoneID): void;
    //
    alloc():CKRecordID;
    //
    init():CKRecordID;
  }
}

declare const CKRecordID: cocoascript.CKRecordID;
// https://developer.apple.com/documentation/cloudkit/ckrecordnamezonewideshare
declare const CKRecordNameZoneWideShare: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An object that uniquely identifies a record zone in a database.
   * https://developer.apple.com/documentation/cloudkit/ckrecordzoneid
   */
  interface CKRecordZoneID extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckrecordzoneid/1508089-initwithzonename
    initWithZoneName_ownerName(zoneName: string | cocoascript.NSString, ownerName: string | cocoascript.NSString):CKRecordZoneID;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzoneid/1508094-zonename
    zoneName(): string | cocoascript.NSString;
    setZoneName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzoneid/1508096-ownername
    ownerName(): string | cocoascript.NSString;
    setOwnerName(value: string | cocoascript.NSString): void;
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
   * https://developer.apple.com/documentation/cloudkit/ckquerycursor
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
   * https://developer.apple.com/documentation/cloudkit/cksubscription
   */
  interface CKSubscription extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/cksubscription/1514948-notificationinfo
    notificationInfo(): CKNotificationInfo;
    setNotificationInfo(value: CKNotificationInfo): void;
    // https://developer.apple.com/documentation/cloudkit/cksubscription/1515199-subscriptionid
    subscriptionID(): CKSubscriptionID;
    setSubscriptionID(value: CKSubscriptionID): void;
    // https://developer.apple.com/documentation/cloudkit/cksubscription/1515250-subscriptiontype
    subscriptionType(): CKSubscriptionType;
    setSubscriptionType(value: CKSubscriptionType): void;
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
   * https://developer.apple.com/documentation/cloudkit/cknotificationinfo
   */
  interface CKNotificationInfo extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1515082-category
    category(): string | cocoascript.NSString;
    setCategory(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2887430-collapseidkey
    collapseIDKey(): string | cocoascript.NSString;
    setCollapseIDKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1514996-shouldbadge
    shouldBadge(): boolean;
    setShouldBadge(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1515270-alertbody
    alertBody(): string | cocoascript.NSString;
    setAlertBody(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1514968-alertlocalizationkey
    alertLocalizationKey(): string | cocoascript.NSString;
    setAlertLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1515182-alertlocalizationargs
    alertLocalizationArgs(): CKRecordFieldKey;
    setAlertLocalizationArgs(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1514945-alertactionlocalizationkey
    alertActionLocalizationKey(): string | cocoascript.NSString;
    setAlertActionLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1515075-alertlaunchimage
    alertLaunchImage(): string | cocoascript.NSString;
    setAlertLaunchImage(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1514987-soundname
    soundName(): string | cocoascript.NSString;
    setSoundName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1515110-shouldsendcontentavailable
    shouldSendContentAvailable(): boolean;
    setShouldSendContentAvailable(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2868500-shouldsendmutablecontent
    shouldSendMutableContent(): boolean;
    setShouldSendMutableContent(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/1514931-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2869870-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2869865-titlelocalizationkey
    titleLocalizationKey(): string | cocoascript.NSString;
    setTitleLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2869866-titlelocalizationargs
    titleLocalizationArgs(): CKRecordFieldKey;
    setTitleLocalizationArgs(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2869863-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2869864-subtitlelocalizationkey
    subtitleLocalizationKey(): string | cocoascript.NSString;
    setSubtitleLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotificationinfo/2869869-subtitlelocalizationargs
    subtitleLocalizationArgs(): CKRecordFieldKey;
    setSubtitleLocalizationArgs(value: CKRecordFieldKey): void;
    //
    alloc():CKNotificationInfo;
    //
    init():CKNotificationInfo;
  }
}

declare const CKNotificationInfo: cocoascript.CKNotificationInfo;
declare namespace cocoascript {
  /**
   * A database partition that contains related records.
   * https://developer.apple.com/documentation/cloudkit/ckrecordzone
   */
  interface CKRecordZone extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckrecordzone/1515102-initwithzonename
    initWithZoneName(zoneName: string | cocoascript.NSString):CKRecordZone;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzone/1515207-initwithzoneid
    initWithZoneID(zoneID: CKRecordZoneID):CKRecordZone;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzone/1514919-defaultrecordzone
    defaultRecordZone():CKRecordZone;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzone/1514917-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzone/1515194-capabilities
    capabilities(): CKRecordZoneCapabilities;
    setCapabilities(value: CKRecordZoneCapabilities): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzone/3746822-share
    share(): CKReference;
    setShare(value: CKReference): void;
    //
    alloc():CKRecordZone;
    //
    init():CKRecordZone;
  }
}

declare const CKRecordZone: cocoascript.CKRecordZone;
// https://developer.apple.com/documentation/cloudkit/ckrecordzonedefaultname
declare const CKRecordZoneDefaultName: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * An opaque token that represents a specific point in a database’s history.
   * https://developer.apple.com/documentation/cloudkit/ckserverchangetoken
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
   * A relationship between two records in a record zone.
   * https://developer.apple.com/documentation/cloudkit/ckreference
   */
  interface CKReference extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckreference/1515280-initwithrecordid
    initWithRecordID_action(recordID: CKRecordID, action: CKReferenceAction):CKReference;
    // https://developer.apple.com/documentation/cloudkit/ckreference/1515312-initwithrecord
    initWithRecord_action(record: CKRecord, action: CKReferenceAction):CKReference;
    // https://developer.apple.com/documentation/cloudkit/ckreference/1514900-referenceaction
    referenceAction(): CKReferenceAction;
    setReferenceAction(value: CKReferenceAction): void;
    // https://developer.apple.com/documentation/cloudkit/ckreference/1514956-recordid
    recordID(): CKRecordID;
    setRecordID(value: CKRecordID): void;
    //
    alloc():CKReference;
    //
    init():CKReference;
  }
}

declare const CKReference: cocoascript.CKReference;
declare namespace cocoascript {
  /**
   * The identity of a user.
   * https://developer.apple.com/documentation/cloudkit/ckuseridentity
   */
  interface CKUserIdentity extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckuseridentity/1640513-hasicloudaccount
    hasiCloudAccount(): boolean;
    setHasiCloudAccount(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentity/1640371-lookupinfo
    lookupInfo(): CKUserIdentityLookupInfo;
    setLookupInfo(value: CKUserIdentityLookupInfo): void;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentity/1640504-userrecordid
    userRecordID(): CKRecordID;
    setUserRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentity/2866227-contactidentifiers
    contactIdentifiers(): string | cocoascript.NSString;
    setContactIdentifiers(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentity/1640458-namecomponents
    nameComponents(): NSPersonNameComponents;
    setNameComponents(value: NSPersonNameComponents): void;
    //
    alloc():CKUserIdentity;
    //
    init():CKUserIdentity;
  }
}

declare const CKUserIdentity: cocoascript.CKUserIdentity;
declare namespace cocoascript {
  /**
   * The criteria to use when searching for discoverable iCloud users.
   * https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo
   */
  interface CKUserIdentityLookupInfo extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640484-initwithemailaddress
    initWithEmailAddress(emailAddress: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640402-initwithphonenumber
    initWithPhoneNumber(phoneNumber: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640419-initwithuserrecordid
    initWithUserRecordID(userRecordID: CKRecordID):CKUserIdentityLookupInfo;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640439-lookupinfoswithemails
    lookupInfosWithEmails(emails: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640429-lookupinfoswithphonenumbers
    lookupInfosWithPhoneNumbers(phoneNumbers: string | cocoascript.NSString):CKUserIdentityLookupInfo;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640407-lookupinfoswithrecordids
    lookupInfosWithRecordIDs(recordIDs: CKRecordID):CKUserIdentityLookupInfo;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640462-emailaddress
    emailAddress(): string | cocoascript.NSString;
    setEmailAddress(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640482-phonenumber
    phoneNumber(): string | cocoascript.NSString;
    setPhoneNumber(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckuseridentitylookupinfo/1640405-userrecordid
    userRecordID(): CKRecordID;
    setUserRecordID(value: CKRecordID): void;
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
   * https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoptions
   */
  interface CKFetchRecordZoneChangesOptions extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640472-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640389-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(value: CKServerChangeToken): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoptions/1640481-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(value: NSUInteger): void;
    //
    alloc():CKFetchRecordZoneChangesOptions;
    //
    init():CKFetchRecordZoneChangesOptions;
  }
}

declare const CKFetchRecordZoneChangesOptions: cocoascript.CKFetchRecordZoneChangesOptions;
declare namespace cocoascript {
  /**
   * A subscription that generates push notifications when CloudKit modifies records that match a predicate.
   * https://developer.apple.com/documentation/cloudkit/ckquerysubscription
   */
  interface CKQuerySubscription extends CKSubscription {
    // https://developer.apple.com/documentation/cloudkit/ckquerysubscription/1640466-initwithrecordtype
    initWithRecordType_predicate_options(recordType: CKRecordType, predicate: NSPredicate, querySubscriptionOptions: CKQuerySubscriptionOptions):CKQuerySubscription;
    // https://developer.apple.com/documentation/cloudkit/ckquerysubscription/1640505-initwithrecordtype
    initWithRecordType_predicate_subscriptionID_options(recordType: CKRecordType, predicate: NSPredicate, subscriptionID: CKSubscriptionID, querySubscriptionOptions: CKQuerySubscriptionOptions):CKQuerySubscription;
    // https://developer.apple.com/documentation/cloudkit/ckquerysubscription/3547081-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKQuerySubscription;
    // https://developer.apple.com/documentation/cloudkit/ckquerysubscription/1640485-predicate
    predicate(): NSPredicate;
    setPredicate(value: NSPredicate): void;
    // https://developer.apple.com/documentation/cloudkit/ckquerysubscription/1640414-querysubscriptionoptions
    querySubscriptionOptions(): CKQuerySubscriptionOptions;
    setQuerySubscriptionOptions(value: CKQuerySubscriptionOptions): void;
    // https://developer.apple.com/documentation/cloudkit/ckquerysubscription/1640393-recordtype
    recordType(): CKRecordType;
    setRecordType(value: CKRecordType): void;
    // https://developer.apple.com/documentation/cloudkit/ckquerysubscription/1640390-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(value: CKRecordZoneID): void;
    //
    alloc():CKQuerySubscription;
    //
    init():CKQuerySubscription;
  }
}

declare const CKQuerySubscription: cocoascript.CKQuerySubscription;
declare namespace cocoascript {
  /**
   * A subscription that generates push notifications when CloudKit modifies records in a specific record zone.
   * https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription
   */
  interface CKRecordZoneSubscription extends CKSubscription {
    // https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/1640392-initwithzoneid
    initWithZoneID(zoneID: CKRecordZoneID):CKRecordZoneSubscription;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/1640415-initwithzoneid
    initWithZoneID_subscriptionID(zoneID: CKRecordZoneID, subscriptionID: CKSubscriptionID):CKRecordZoneSubscription;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/3547082-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKRecordZoneSubscription;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/1640479-recordtype
    recordType(): CKRecordType;
    setRecordType(value: CKRecordType): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzonesubscription/1640367-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(value: CKRecordZoneID): void;
    //
    alloc():CKRecordZoneSubscription;
    //
    init():CKRecordZoneSubscription;
  }
}

declare const CKRecordZoneSubscription: cocoascript.CKRecordZoneSubscription;
declare namespace cocoascript {
  /**
   * A subscription that generates push notifications when CloudKit modifies records in a database.
   * https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription
   */
  interface CKDatabaseSubscription extends CKSubscription {
    // https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/1640456-init
    init():CKDatabaseSubscription;
    // https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/1640530-initwithsubscriptionid
    initWithSubscriptionID(subscriptionID: CKSubscriptionID):CKDatabaseSubscription;
    // https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/3547080-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKDatabaseSubscription;
    // https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/2976439-new
    new():CKDatabaseSubscription;
    // https://developer.apple.com/documentation/cloudkit/ckdatabasesubscription/1640418-recordtype
    recordType(): CKRecordType;
    setRecordType(value: CKRecordType): void;
    //
    alloc():CKDatabaseSubscription;
    //
    init():CKDatabaseSubscription;
  }
}

declare const CKDatabaseSubscription: cocoascript.CKDatabaseSubscription;
declare namespace cocoascript {
  /**
   * An object that describes a user’s participation in a share.
   * https://developer.apple.com/documentation/cloudkit/ckshareparticipant
   */
  interface CKShareParticipant extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckshareparticipant/1640395-acceptancestatus
    acceptanceStatus(): CKShareParticipantAcceptanceStatus;
    setAcceptanceStatus(value: CKShareParticipantAcceptanceStatus): void;
    // https://developer.apple.com/documentation/cloudkit/ckshareparticipant/1640488-useridentity
    userIdentity(): CKUserIdentity;
    setUserIdentity(value: CKUserIdentity): void;
    // https://developer.apple.com/documentation/cloudkit/ckshareparticipant/1640433-permission
    permission(): CKShareParticipantPermission;
    setPermission(value: CKShareParticipantPermission): void;
    // https://developer.apple.com/documentation/cloudkit/ckshareparticipant/2980667-role
    role(): CKShareParticipantRole;
    setRole(value: CKShareParticipantRole): void;
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
   * https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesconfiguration
   */
  interface CKFetchRecordZoneChangesConfiguration extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980662-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(value: CKServerChangeToken): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980663-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(value: NSUInteger): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesconfiguration/2980661-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(value: CKRecordFieldKey): void;
    //
    alloc():CKFetchRecordZoneChangesConfiguration;
    //
    init():CKFetchRecordZoneChangesConfiguration;
  }
}

declare const CKFetchRecordZoneChangesConfiguration: cocoascript.CKFetchRecordZoneChangesConfiguration;
declare namespace cocoascript {
  /**
   * An operation that modifies one or more records.
   * https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation
   */
  interface CKModifyRecordsOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447464-initwithrecordstosave
    initWithRecordsToSave_recordIDsToDelete(records: CKRecord, recordIDs: CKRecordID):CKModifyRecordsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447466-init
    init():CKModifyRecordsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447482-recordstosave
    recordsToSave(): CKRecord;
    setRecordsToSave(value: CKRecord): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447479-recordidstodelete
    recordIDsToDelete(): CKRecordID;
    setRecordIDsToDelete(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447472-clientchangetokendata
    clientChangeTokenData(): NSData;
    setClientChangeTokenData(value: NSData): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447484-atomic
    atomic(): boolean;
    setAtomic(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447488-savepolicy
    savePolicy(): CKRecordSavePolicy;
    setSavePolicy(value: CKRecordSavePolicy): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447477-perrecordprogressblock
    perRecordProgressBlock(): number;
    setPerRecordProgressBlock(value: number): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447470-perrecordcompletionblock
    perRecordCompletionBlock(): NSError;
    setPerRecordCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/1447486-modifyrecordscompletionblock
    modifyRecordsCompletionBlock(): NSError;
    setModifyRecordsCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/3793704-perrecorddeleteblock
    perRecordDeleteBlock(): NSError;
    setPerRecordDeleteBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordsoperation/3793705-perrecordsaveblock
    perRecordSaveBlock(): NSError;
    setPerRecordSaveBlock(value: NSError): void;
    //
    alloc():CKModifyRecordsOperation;
    //
    init():CKModifyRecordsOperation;
  }
}

declare const CKModifyRecordsOperation: cocoascript.CKModifyRecordsOperation;
declare namespace cocoascript {
  /**
   * An operation that fetches metadata for one or more shares.
   * https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation
   */
  interface CKFetchShareMetadataOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/2715836-init
    init():CKFetchShareMetadataOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/1640495-initwithshareurls
    initWithShareURLs(shareURLs: NSURL):CKFetchShareMetadataOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/1640375-rootrecorddesiredkeys
    rootRecordDesiredKeys(): CKRecordFieldKey;
    setRootRecordDesiredKeys(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/1640508-shareurls
    shareURLs(): NSURL;
    setShareURLs(value: NSURL): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/1640519-shouldfetchrootrecord
    shouldFetchRootRecord(): boolean;
    setShouldFetchRootRecord(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/1640447-persharemetadatablock
    perShareMetadataBlock(): NSError;
    setPerShareMetadataBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsharemetadataoperation/1640457-fetchsharemetadatacompletionbloc
    fetchShareMetadataCompletionBlock(): NSError;
    setFetchShareMetadataCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchShareMetadataOperation;
    //
    init():CKFetchShareMetadataOperation;
  }
}

declare const CKFetchShareMetadataOperation: cocoascript.CKFetchShareMetadataOperation;
declare namespace cocoascript {
  /**
   * An operation that converts user identities into share participants.
   * https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation
   */
  interface CKFetchShareParticipantsOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/1640478-init
    init():CKFetchShareParticipantsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/1640471-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: CKUserIdentityLookupInfo):CKFetchShareParticipantsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/1640380-useridentitylookupinfos
    userIdentityLookupInfos(): CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(value: CKUserIdentityLookupInfo): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/1640451-shareparticipantfetchedblock
    shareParticipantFetchedBlock(): CKShareParticipant;
    setShareParticipantFetchedBlock(value: CKShareParticipant): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/1640529-fetchshareparticipantscompletion
    fetchShareParticipantsCompletionBlock(): NSError;
    setFetchShareParticipantsCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchshareparticipantsoperation/3793700-pershareparticipantcompletionblo
    perShareParticipantCompletionBlock(): NSError;
    setPerShareParticipantCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchShareParticipantsOperation;
    //
    init():CKFetchShareParticipantsOperation;
  }
}

declare const CKFetchShareParticipantsOperation: cocoascript.CKFetchShareParticipantsOperation;
// https://developer.apple.com/documentation/cloudkit/cksharetypekey
declare const CKShareTypeKey: cocoascript.CKRecordFieldKey;
// https://developer.apple.com/documentation/cloudkit/cksharetitlekey
declare const CKShareTitleKey: cocoascript.CKRecordFieldKey;
// https://developer.apple.com/documentation/cloudkit/cksharethumbnailimagedatakey
declare const CKShareThumbnailImageDataKey: cocoascript.CKRecordFieldKey;
declare namespace cocoascript {
  /**
   * The abstract base class for all operations that execute in a database.
   * https://developer.apple.com/documentation/cloudkit/ckoperation
   */
  interface CKOperation extends NSOperation {
    // https://developer.apple.com/documentation/cloudkit/ckoperation/1452370-init
    init():CKOperation;
    // https://developer.apple.com/documentation/cloudkit/ckoperation/1452362-operationid
    operationID(): CKOperationID;
    setOperationID(value: CKOperationID): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperation/2866213-configuration
    configuration(): CKOperationConfiguration;
    setConfiguration(value: CKOperationConfiguration): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperation/2866228-group
    group(): CKOperationGroup;
    setGroup(value: CKOperationGroup): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperation/1452366-longlivedoperationwaspersistedbl
    longLivedOperationWasPersistedBlock(): void;
    setLongLivedOperationWasPersistedBlock(value: void): void;
    //
    alloc():CKOperation;
    //
    init():CKOperation;
  }
}

declare const CKOperation: cocoascript.CKOperation;
declare namespace cocoascript {
  /**
   * An object for sorting records that contain location data.
   * https://developer.apple.com/documentation/cloudkit/cklocationsortdescriptor
   */
  interface CKLocationSortDescriptor extends NSSortDescriptor {
    // https://developer.apple.com/documentation/cloudkit/cklocationsortdescriptor/1515071-initwithkey
    initWithKey_relativeLocation(key: string | cocoascript.NSString, relativeLocation: CLLocation):CKLocationSortDescriptor;
    // https://developer.apple.com/documentation/cloudkit/cklocationsortdescriptor/1515257-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKLocationSortDescriptor;
    // https://developer.apple.com/documentation/cloudkit/cklocationsortdescriptor/1514915-relativelocation
    relativeLocation(): CLLocation;
    setRelativeLocation(value: CLLocation): void;
    //
    alloc():CKLocationSortDescriptor;
    //
    init():CKLocationSortDescriptor;
  }
}

declare const CKLocationSortDescriptor: cocoascript.CKLocationSortDescriptor;
declare namespace cocoascript {
  /**
   * An explicit association between two or more operations.
   * https://developer.apple.com/documentation/cloudkit/ckoperationgroup
   */
  interface CKOperationGroup extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866236-init
    init():CKOperationGroup;
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866202-initwithcoder
    initWithCoder(aDecoder: NSCoder):CKOperationGroup;
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866240-defaultconfiguration
    defaultConfiguration(): CKOperationConfiguration;
    setDefaultConfiguration(value: CKOperationConfiguration): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866229-expectedreceivesize
    expectedReceiveSize(): CKOperationGroupTransferSize;
    setExpectedReceiveSize(value: CKOperationGroupTransferSize): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866235-expectedsendsize
    expectedSendSize(): CKOperationGroupTransferSize;
    setExpectedSendSize(value: CKOperationGroupTransferSize): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866233-name
    name(): string | cocoascript.NSString;
    setName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866238-operationgroupid
    operationGroupID(): string | cocoascript.NSString;
    setOperationGroupID(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationgroup/2866220-quantity
    quantity(): NSUInteger;
    setQuantity(value: NSUInteger): void;
    //
    alloc():CKOperationGroup;
    //
    init():CKOperationGroup;
  }
}

declare const CKOperationGroup: cocoascript.CKOperationGroup;
declare namespace cocoascript {
  /**
   * An external file that belongs to a record.
   * https://developer.apple.com/documentation/cloudkit/ckasset
   */
  interface CKAsset extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckasset/1514990-initwithfileurl
    initWithFileURL(fileURL: NSURL):CKAsset;
    // https://developer.apple.com/documentation/cloudkit/ckasset/1515050-fileurl
    fileURL(): NSURL;
    setFileURL(value: NSURL): void;
    //
    alloc():CKAsset;
    //
    init():CKAsset;
  }
}

declare const CKAsset: cocoascript.CKAsset;
declare namespace cocoascript {
  /**
   * A conduit to your app’s databases.
   * https://developer.apple.com/documentation/cloudkit/ckcontainer
   */
  interface CKContainer extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399189-defaultcontainer
    defaultContainer():CKContainer;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399193-containerwithidentifier
    containerWithIdentifier(containerIdentifier: string | cocoascript.NSString):CKContainer;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399205-privateclouddatabase
    privateCloudDatabase(): CKDatabase;
    setPrivateCloudDatabase(value: CKDatabase): void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399166-publicclouddatabase
    publicCloudDatabase(): CKDatabase;
    setPublicCloudDatabase(value: CKDatabase): void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640408-sharedclouddatabase
    sharedCloudDatabase(): CKDatabase;
    setSharedCloudDatabase(value: CKDatabase): void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640475-databasewithdatabasescope
    databaseWithDatabaseScope(databaseScope: CKDatabaseScope):CKDatabase;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399182-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399180-accountstatuswithcompletionhandl
    accountStatusWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399174-requestapplicationpermission
    requestApplicationPermission_completionHandler(applicationPermission: CKApplicationPermissions, completionHandler: CKApplicationPermissionBlock):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399195-statusforapplicationpermission
    statusForApplicationPermission_completionHandler(applicationPermission: CKApplicationPermissions, completionHandler: CKApplicationPermissionBlock):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399215-addoperation
    addOperation(operation: CKOperation):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640421-discoverallidentitieswithcomplet
    discoverAllIdentitiesWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640430-discoveruseridentitywithemailadd
    discoverUserIdentityWithEmailAddress_completionHandler(email: string | cocoascript.NSString, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640516-discoveruseridentitywithphonenum
    discoverUserIdentityWithPhoneNumber_completionHandler(phoneNumber: string | cocoascript.NSString, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640517-discoveruseridentitywithuserreco
    discoverUserIdentityWithUserRecordID_completionHandler(userRecordID: CKRecordID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640489-fetchshareparticipantwithemailad
    fetchShareParticipantWithEmailAddress_completionHandler(emailAddress: string | cocoascript.NSString, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640493-fetchshareparticipantwithphonenu
    fetchShareParticipantWithPhoneNumber_completionHandler(phoneNumber: string | cocoascript.NSString, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1640387-fetchshareparticipantwithuserrec
    fetchShareParticipantWithUserRecordID_completionHandler(userRecordID: CKRecordID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399191-fetchuserrecordidwithcompletionh
    fetchUserRecordIDWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399160-fetchalllonglivedoperationidswit
    fetchAllLongLivedOperationIDsWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/1399164-fetchlonglivedoperationwithid
    fetchLongLivedOperationWithID_completionHandler(operationID: CKOperationID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/2113666-fetchsharemetadatawithurl
    fetchShareMetadataWithURL_completionHandler(url: NSURL, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckcontainer/2113667-acceptsharemetadata
    acceptShareMetadata_completionHandler(metadata: CKShareMetadata, completionHandler: NSError):void;
    //
    alloc():CKContainer;
    //
    init():CKContainer;
  }
}

declare const CKContainer: cocoascript.CKContainer;
// https://developer.apple.com/documentation/cloudkit/ckcurrentuserdefaultname
declare const CKCurrentUserDefaultName: cocoascript.NSString;
// https://developer.apple.com/documentation/cloudkit/ckownerdefaultname
declare const CKOwnerDefaultName: cocoascript.NSString;
// https://developer.apple.com/documentation/cloudkit/ckaccountchangednotification
declare const CKAccountChangedNotification: cocoascript.NSString;
declare namespace cocoascript {
  /**
   * A collection of record zones and subscriptions.
   * https://developer.apple.com/documentation/cloudkit/ckdatabase
   */
  interface CKDatabase extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449127-performquery
    performQuery_inZoneWithID_completionHandler(query: CKQuery, zoneID: CKRecordZoneID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449116-addoperation
    addOperation(operation: CKDatabaseOperation):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449126-fetchrecordwithid
    fetchRecordWithID_completionHandler(recordID: CKRecordID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449114-saverecord
    saveRecord_completionHandler(record: CKRecord, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449122-deleterecordwithid
    deleteRecordWithID_completionHandler(recordID: CKRecordID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449112-fetchallrecordzoneswithcompletio
    fetchAllRecordZonesWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449104-fetchrecordzonewithid
    fetchRecordZoneWithID_completionHandler(zoneID: CKRecordZoneID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449108-saverecordzone
    saveRecordZone_completionHandler(zone: CKRecordZone, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449118-deleterecordzonewithid
    deleteRecordZoneWithID_completionHandler(zoneID: CKRecordZoneID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449110-fetchallsubscriptionswithcomplet
    fetchAllSubscriptionsWithCompletionHandler(completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449106-fetchsubscriptionwithid
    fetchSubscriptionWithID_completionHandler(subscriptionID: CKSubscriptionID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449102-savesubscription
    saveSubscription_completionHandler(subscription: CKSubscription, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1449120-deletesubscriptionwithid
    deleteSubscriptionWithID_completionHandler(subscriptionID: CKSubscriptionID, completionHandler: NSError):void;
    // https://developer.apple.com/documentation/cloudkit/ckdatabase/1640398-databasescope
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(value: CKDatabaseScope): void;
    //
    alloc():CKDatabase;
    //
    init():CKDatabase;
  }
}

declare const CKDatabase: cocoascript.CKDatabase;
declare namespace cocoascript {
  /**
   * An operation that uses the device’s contacts to search for discoverable iCloud users.
   * https://developer.apple.com/documentation/cloudkit/ckdiscoveralluseridentitiesoperation
   */
  interface CKDiscoverAllUserIdentitiesOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640435-init
    init():CKDiscoverAllUserIdentitiesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640416-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): CKUserIdentity;
    setUserIdentityDiscoveredBlock(value: CKUserIdentity): void;
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveralluseridentitiesoperation/1640497-discoveralluseridentitiescomplet
    discoverAllUserIdentitiesCompletionBlock(): NSError;
    setDiscoverAllUserIdentitiesCompletionBlock(value: NSError): void;
    //
    alloc():CKDiscoverAllUserIdentitiesOperation;
    //
    init():CKDiscoverAllUserIdentitiesOperation;
  }
}

declare const CKDiscoverAllUserIdentitiesOperation: cocoascript.CKDiscoverAllUserIdentitiesOperation;
declare namespace cocoascript {
  /**
   * An operation that uses the provided criteria to search for discoverable iCloud users.
   * https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation
   */
  interface CKDiscoverUserIdentitiesOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640525-init
    init():CKDiscoverUserIdentitiesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640521-initwithuseridentitylookupinfos
    initWithUserIdentityLookupInfos(userIdentityLookupInfos: CKUserIdentityLookupInfo):CKDiscoverUserIdentitiesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640450-useridentitylookupinfos
    userIdentityLookupInfos(): CKUserIdentityLookupInfo;
    setUserIdentityLookupInfos(value: CKUserIdentityLookupInfo): void;
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640524-useridentitydiscoveredblock
    userIdentityDiscoveredBlock(): CKUserIdentityLookupInfo;
    setUserIdentityDiscoveredBlock(value: CKUserIdentityLookupInfo): void;
    // https://developer.apple.com/documentation/cloudkit/ckdiscoveruseridentitiesoperation/1640500-discoveruseridentitiescompletion
    discoverUserIdentitiesCompletionBlock(): NSError;
    setDiscoverUserIdentitiesCompletionBlock(value: NSError): void;
    //
    alloc():CKDiscoverUserIdentitiesOperation;
    //
    init():CKDiscoverUserIdentitiesOperation;
  }
}

declare const CKDiscoverUserIdentitiesOperation: cocoascript.CKDiscoverUserIdentitiesOperation;
declare namespace cocoascript {
  /**
   * An operation that creates an authentication token for use with CloudKit web services.
   * https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation
   */
  interface CKFetchWebAuthTokenOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation/1515266-initwithapitoken
    initWithAPIToken(APIToken: string | cocoascript.NSString):CKFetchWebAuthTokenOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation/2715839-init
    init():CKFetchWebAuthTokenOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation/1515095-apitoken
    APIToken(): string | cocoascript.NSString;
    setAPIToken(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchwebauthtokenoperation/1514980-fetchwebauthtokencompletionblock
    fetchWebAuthTokenCompletionBlock(): NSError;
    setFetchWebAuthTokenCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchWebAuthTokenOperation;
    //
    init():CKFetchWebAuthTokenOperation;
  }
}

declare const CKFetchWebAuthTokenOperation: cocoascript.CKFetchWebAuthTokenOperation;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckerrorcode
  type CKErrorCode = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An operation for executing queries in a database.
   * https://developer.apple.com/documentation/cloudkit/ckqueryoperation
   */
  interface CKQueryOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1514958-initwithquery
    initWithQuery(query: CKQuery):CKQueryOperation;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515033-initwithcursor
    initWithCursor(cursor: CKQueryCursor):CKQueryOperation;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515115-init
    init():CKQueryOperation;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515127-query
    query(): CKQuery;
    setQuery(value: CKQuery): void;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1514975-cursor
    cursor(): CKQueryCursor;
    setCursor(value: CKQueryCursor): void;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515269-zoneid
    zoneID(): CKRecordZoneID;
    setZoneID(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515078-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(value: NSUInteger): void;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515268-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515283-recordfetchedblock
    recordFetchedBlock(): CKRecord;
    setRecordFetchedBlock(value: CKRecord): void;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/1515067-querycompletionblock
    queryCompletionBlock(): NSError;
    setQueryCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckqueryoperation/3793708-recordmatchedblock
    recordMatchedBlock(): NSError;
    setRecordMatchedBlock(value: NSError): void;
    //
    alloc():CKQueryOperation;
    //
    init():CKQueryOperation;
  }
}

declare const CKQueryOperation: cocoascript.CKQueryOperation;
declare namespace cocoascript {
  /**
   * The abstract base class for CloudKit notifications.
   * https://developer.apple.com/documentation/cloudkit/cknotification
   */
  interface CKNotification extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428130-notificationfromremotenotificati
    notificationFromRemoteNotificationDictionary(notificationDictionary: NSDictionary):CKNotification;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428080-notificationid
    notificationID(): CKNotificationID;
    setNotificationID(value: CKNotificationID): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428078-notificationtype
    notificationType(): CKNotificationType;
    setNotificationType(value: CKNotificationType): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428119-containeridentifier
    containerIdentifier(): string | cocoascript.NSString;
    setContainerIdentifier(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428088-ispruned
    isPruned(): boolean;
    setIsPruned(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428084-alertbody
    alertBody(): string | cocoascript.NSString;
    setAlertBody(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428095-alertlocalizationkey
    alertLocalizationKey(): string | cocoascript.NSString;
    setAlertLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428105-alertlocalizationargs
    alertLocalizationArgs(): string | cocoascript.NSString;
    setAlertLocalizationArgs(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428109-alertactionlocalizationkey
    alertActionLocalizationKey(): string | cocoascript.NSString;
    setAlertActionLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428103-alertlaunchimage
    alertLaunchImage(): string | cocoascript.NSString;
    setAlertLaunchImage(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428077-soundname
    soundName(): string | cocoascript.NSString;
    setSoundName(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428082-badge
    badge(): NSNumber;
    setBadge(value: NSNumber): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428107-category
    category(): string | cocoascript.NSString;
    setCategory(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/1428118-subscriptionid
    subscriptionID(): CKSubscriptionID;
    setSubscriptionID(value: CKSubscriptionID): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/3577533-subscriptionowneruserrecordid
    subscriptionOwnerUserRecordID(): CKRecordID;
    setSubscriptionOwnerUserRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/2868440-title
    title(): string | cocoascript.NSString;
    setTitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/2868436-titlelocalizationkey
    titleLocalizationKey(): string | cocoascript.NSString;
    setTitleLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/2868437-titlelocalizationargs
    titleLocalizationArgs(): string | cocoascript.NSString;
    setTitleLocalizationArgs(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/2868435-subtitle
    subtitle(): string | cocoascript.NSString;
    setSubtitle(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/2868438-subtitlelocalizationkey
    subtitleLocalizationKey(): string | cocoascript.NSString;
    setSubtitleLocalizationKey(value: string | cocoascript.NSString): void;
    // https://developer.apple.com/documentation/cloudkit/cknotification/2868439-subtitlelocalizationargs
    subtitleLocalizationArgs(): string | cocoascript.NSString;
    setSubtitleLocalizationArgs(value: string | cocoascript.NSString): void;
    //
    alloc():CKNotification;
    //
    init():CKNotification;
  }
}

declare const CKNotification: cocoascript.CKNotification;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/cknotificationtype
  type CKNotificationType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckrecordtype
  type CKRecordType = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckrecordfieldkey
  type CKRecordFieldKey = cocoascript.NSString;
}
// https://developer.apple.com/documentation/cloudkit/ckrecordparentkey
declare const CKRecordParentKey: cocoascript.CKRecordFieldKey;
// https://developer.apple.com/documentation/cloudkit/ckrecordsharekey
declare const CKRecordShareKey: cocoascript.CKRecordFieldKey;
// https://developer.apple.com/documentation/cloudkit/ckrecordtypeshare
declare const CKRecordTypeShare: cocoascript.CKRecordType;
// https://developer.apple.com/documentation/cloudkit/ckrecordtypeuserrecord
declare const CKRecordTypeUserRecord: cocoascript.CKRecordType;
declare namespace cocoascript {
  /**
   * An operation for retrieving records from a database.
   * https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation
   */
  interface CKFetchRecordsOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476074-initwithrecordids
    initWithRecordIDs(recordIDs: CKRecordID):CKFetchRecordsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476072-init
    init():CKFetchRecordsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476070-fetchcurrentuserrecordoperation
    fetchCurrentUserRecordOperation():CKFetchRecordsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476076-recordids
    recordIDs(): CKRecordID;
    setRecordIDs(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476088-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476080-perrecordprogressblock
    perRecordProgressBlock(): number;
    setPerRecordProgressBlock(value: number): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476082-perrecordcompletionblock
    perRecordCompletionBlock(): NSError;
    setPerRecordCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordsoperation/1476078-fetchrecordscompletionblock
    fetchRecordsCompletionBlock(): NSError;
    setFetchRecordsCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchRecordsOperation;
    //
    init():CKFetchRecordsOperation;
  }
}

declare const CKFetchRecordsOperation: cocoascript.CKFetchRecordsOperation;
declare namespace cocoascript {
  /**
   * An operation for retrieving record zones from a database.
   * https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation
   */
  interface CKFetchRecordZonesOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/1515299-initwithrecordzoneids
    initWithRecordZoneIDs(zoneIDs: CKRecordZoneID):CKFetchRecordZonesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/1515256-init
    init():CKFetchRecordZonesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/1514890-fetchallrecordzonesoperation
    fetchAllRecordZonesOperation():CKFetchRecordZonesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/1515084-recordzoneids
    recordZoneIDs(): CKRecordZoneID;
    setRecordZoneIDs(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/1515145-fetchrecordzonescompletionblock
    fetchRecordZonesCompletionBlock(): NSError;
    setFetchRecordZonesCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonesoperation/3793699-perrecordzonecompletionblock
    perRecordZoneCompletionBlock(): NSError;
    setPerRecordZoneCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchRecordZonesOperation;
    //
    init():CKFetchRecordZonesOperation;
  }
}

declare const CKFetchRecordZonesOperation: cocoascript.CKFetchRecordZonesOperation;
// https://developer.apple.com/documentation/cloudkit/ckqueryoperationmaximumresults
declare const CKQueryOperationMaximumResults: cocoascript.NSUInteger;
declare namespace cocoascript {
  /**
   * An operation that retrieves unread notifications from a CloudKit container.
   * https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation
   */
  interface CKFetchNotificationChangesOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation/1515141-initwithpreviousserverchangetoke
    initWithPreviousServerChangeToken(previousServerChangeToken: CKServerChangeToken):CKFetchNotificationChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation/2715837-init
    init():CKFetchNotificationChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation/1515139-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(value: CKServerChangeToken): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation/1515275-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(value: NSUInteger): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation/1515108-morecoming
    moreComing(): boolean;
    setMoreComing(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation/1515253-notificationchangedblock
    notificationChangedBlock(): CKNotification;
    setNotificationChangedBlock(value: CKNotification): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchnotificationchangesoperation/1515125-fetchnotificationchangescompleti
    fetchNotificationChangesCompletionBlock(): NSError;
    setFetchNotificationChangesCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchNotificationChangesOperation;
    //
    init():CKFetchNotificationChangesOperation;
  }
}

declare const CKFetchNotificationChangesOperation: cocoascript.CKFetchNotificationChangesOperation;
declare namespace cocoascript {
  /**
   * A notification that triggers when a record that matches the subscription’s predicate changes.
   * https://developer.apple.com/documentation/cloudkit/ckquerynotification
   */
  interface CKQueryNotification extends CKNotification {
    // https://developer.apple.com/documentation/cloudkit/ckquerynotification/1640449-databasescope
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(value: CKDatabaseScope): void;
    // https://developer.apple.com/documentation/cloudkit/ckquerynotification/1428123-querynotificationreason
    queryNotificationReason(): CKQueryNotificationReason;
    setQueryNotificationReason(value: CKQueryNotificationReason): void;
    // https://developer.apple.com/documentation/cloudkit/ckquerynotification/1428134-recordid
    recordID(): CKRecordID;
    setRecordID(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckquerynotification/1428114-recordfields
    recordFields(): id;
    setRecordFields(value: id): void;
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
   * https://developer.apple.com/documentation/cloudkit/ckrecordzonenotification
   */
  interface CKRecordZoneNotification extends CKNotification {
    // https://developer.apple.com/documentation/cloudkit/ckrecordzonenotification/1428086-recordzoneid
    recordZoneID(): CKRecordZoneID;
    setRecordZoneID(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckrecordzonenotification/1640394-databasescope
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(value: CKDatabaseScope): void;
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
   * https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation
   */
  interface CKModifySubscriptionsOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/1515015-initwithsubscriptionstosave
    initWithSubscriptionsToSave_subscriptionIDsToDelete(subscriptionsToSave: CKSubscription, subscriptionIDsToDelete: CKSubscriptionID):CKModifySubscriptionsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/2715835-init
    init():CKModifySubscriptionsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/1515135-subscriptionstosave
    subscriptionsToSave(): CKSubscription;
    setSubscriptionsToSave(value: CKSubscription): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/1514892-subscriptionidstodelete
    subscriptionIDsToDelete(): CKSubscriptionID;
    setSubscriptionIDsToDelete(value: CKSubscriptionID): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/1515288-modifysubscriptionscompletionblo
    modifySubscriptionsCompletionBlock(): NSError;
    setModifySubscriptionsCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/3793706-persubscriptiondeleteblock
    perSubscriptionDeleteBlock(): NSError;
    setPerSubscriptionDeleteBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifysubscriptionsoperation/3793707-persubscriptionsaveblock
    perSubscriptionSaveBlock(): NSError;
    setPerSubscriptionSaveBlock(value: NSError): void;
    //
    alloc():CKModifySubscriptionsOperation;
    //
    init():CKModifySubscriptionsOperation;
  }
}

declare const CKModifySubscriptionsOperation: cocoascript.CKModifySubscriptionsOperation;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/cksubscriptionid
  type CKSubscriptionID = cocoascript.NSString;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/cksubscriptiontype
  type CKSubscriptionType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * The abstract base class for operations that act upon databases in CloudKit.
   * https://developer.apple.com/documentation/cloudkit/ckdatabaseoperation
   */
  interface CKDatabaseOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckdatabaseoperation/1515274-database
    database(): CKDatabase;
    setDatabase(value: CKDatabase): void;
    //
    alloc():CKDatabaseOperation;
    //
    init():CKDatabaseOperation;
  }
}

declare const CKDatabaseOperation: cocoascript.CKDatabaseOperation;
declare namespace cocoascript {
  /**
   * An operation that modifies one or more record zones.
   * https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation
   */
  interface CKModifyRecordZonesOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/1415167-initwithrecordzonestosave
    initWithRecordZonesToSave_recordZoneIDsToDelete(recordZonesToSave: CKRecordZone, recordZoneIDsToDelete: CKRecordZoneID):CKModifyRecordZonesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/1415169-init
    init():CKModifyRecordZonesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/1415171-recordzonestosave
    recordZonesToSave(): CKRecordZone;
    setRecordZonesToSave(value: CKRecordZone): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/1415173-recordzoneidstodelete
    recordZoneIDsToDelete(): CKRecordZoneID;
    setRecordZoneIDsToDelete(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/1415164-modifyrecordzonescompletionblock
    modifyRecordZonesCompletionBlock(): NSError;
    setModifyRecordZonesCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/3793702-perrecordzonedeleteblock
    perRecordZoneDeleteBlock(): NSError;
    setPerRecordZoneDeleteBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifyrecordzonesoperation/3793703-perrecordzonesaveblock
    perRecordZoneSaveBlock(): NSError;
    setPerRecordZoneSaveBlock(value: NSError): void;
    //
    alloc():CKModifyRecordZonesOperation;
    //
    init():CKModifyRecordZonesOperation;
  }
}

declare const CKModifyRecordZonesOperation: cocoascript.CKModifyRecordZonesOperation;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckrecordzonecapabilities
  type CKRecordZoneCapabilities = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * An operation that fetches database changes.
   * https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation
   */
  interface CKFetchDatabaseChangesOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640502-initwithpreviousserverchangetoke
    initWithPreviousServerChangeToken(previousServerChangeToken: CKServerChangeToken):CKFetchDatabaseChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/2715838-init
    init():CKFetchDatabaseChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640473-fetchallchanges
    fetchAllChanges(): boolean;
    setFetchAllChanges(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640522-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(value: CKServerChangeToken): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640520-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(value: NSUInteger): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640391-recordzonewithidchangedblock
    recordZoneWithIDChangedBlock(): CKRecordZoneID;
    setRecordZoneWithIDChangedBlock(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640428-recordzonewithidwasdeletedblock
    recordZoneWithIDWasDeletedBlock(): CKRecordZoneID;
    setRecordZoneWithIDWasDeletedBlock(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/3746820-recordzonewithidwasdeletedduetou
    recordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock(): CKRecordZoneID;
    setRecordZoneWithIDWasDeletedDueToUserEncryptedDataResetBlock(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/2866207-recordzonewithidwaspurgedblock
    recordZoneWithIDWasPurgedBlock(): CKRecordZoneID;
    setRecordZoneWithIDWasPurgedBlock(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640467-changetokenupdatedblock
    changeTokenUpdatedBlock(): CKServerChangeToken;
    setChangeTokenUpdatedBlock(value: CKServerChangeToken): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchdatabasechangesoperation/1640434-fetchdatabasechangescompletionbl
    fetchDatabaseChangesCompletionBlock(): NSError;
    setFetchDatabaseChangesCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchDatabaseChangesOperation;
    //
    init():CKFetchDatabaseChangesOperation;
  }
}

declare const CKFetchDatabaseChangesOperation: cocoascript.CKFetchDatabaseChangesOperation;
declare namespace cocoascript {
  /**
   * An operation that fetches record zone changes.
   * https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation
   */
  interface CKFetchRecordZoneChangesOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/2980665-initwithrecordzoneids
    initWithRecordZoneIDs_configurationsByRecordZoneID(recordZoneIDs: CKRecordZoneID, configurationsByRecordZoneID: CKFetchRecordZoneChangesConfiguration):CKFetchRecordZoneChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/2715840-init
    init():CKFetchRecordZoneChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/2980664-configurationsbyrecordzoneid
    configurationsByRecordZoneID(): CKFetchRecordZoneChangesConfiguration;
    setConfigurationsByRecordZoneID(value: CKFetchRecordZoneChangesConfiguration): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640386-fetchallchanges
    fetchAllChanges(): boolean;
    setFetchAllChanges(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640463-recordzoneids
    recordZoneIDs(): CKRecordZoneID;
    setRecordZoneIDs(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640417-recordchangedblock
    recordChangedBlock(): CKRecord;
    setRecordChangedBlock(value: CKRecord): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640470-recordwithidwasdeletedblock
    recordWithIDWasDeletedBlock(): CKRecordType;
    setRecordWithIDWasDeletedBlock(value: CKRecordType): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640422-recordzonechangetokensupdatedblo
    recordZoneChangeTokensUpdatedBlock(): NSData;
    setRecordZoneChangeTokensUpdatedBlock(value: NSData): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640411-recordzonefetchcompletionblock
    recordZoneFetchCompletionBlock(): NSError;
    setRecordZoneFetchCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/1640409-fetchrecordzonechangescompletion
    fetchRecordZoneChangesCompletionBlock(): NSError;
    setFetchRecordZoneChangesCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordzonechangesoperation/3793698-recordwaschangedblock
    recordWasChangedBlock(): NSError;
    setRecordWasChangedBlock(value: NSError): void;
    //
    alloc():CKFetchRecordZoneChangesOperation;
    //
    init():CKFetchRecordZoneChangesOperation;
  }
}

declare const CKFetchRecordZoneChangesOperation: cocoascript.CKFetchRecordZoneChangesOperation;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckreferenceaction
  type CKReferenceAction = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckquerysubscriptionoptions
  type CKQuerySubscriptionOptions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  /**
   * A notification that triggers when the contents of a database change.
   * https://developer.apple.com/documentation/cloudkit/ckdatabasenotification
   */
  interface CKDatabaseNotification extends CKNotification {
    // https://developer.apple.com/documentation/cloudkit/ckdatabasenotification/1640510-databasescope
    databaseScope(): CKDatabaseScope;
    setDatabaseScope(value: CKDatabaseScope): void;
    //
    alloc():CKDatabaseNotification;
    //
    init():CKDatabaseNotification;
  }
}

declare const CKDatabaseNotification: cocoascript.CKDatabaseNotification;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckshareparticipantacceptancestatus
  type CKShareParticipantAcceptanceStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckshareparticipantpermission
  type CKShareParticipantPermission = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckshareparticipantrole
  type CKShareParticipantRole = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckrecordsavepolicy
  type CKRecordSavePolicy = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckoperationid
  type CKOperationID = cocoascript.NSString;
}
declare namespace cocoascript {
  /**
   * An object that describes how a CloudKit operation behaves.
   * https://developer.apple.com/documentation/cloudkit/ckoperationconfiguration
   */
  interface CKOperationConfiguration extends NSObject {
    // https://developer.apple.com/documentation/cloudkit/ckoperationconfiguration/2866217-allowscellularaccess
    allowsCellularAccess(): boolean;
    setAllowsCellularAccess(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationconfiguration/2866232-container
    container(): CKContainer;
    setContainer(value: CKContainer): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationconfiguration/2866225-longlived
    longLived(): boolean;
    setLongLived(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationconfiguration/2866201-qualityofservice
    qualityOfService(): NSQualityOfService;
    setQualityOfService(value: NSQualityOfService): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationconfiguration/2866210-timeoutintervalforrequest
    timeoutIntervalForRequest(): NSTimeInterval;
    setTimeoutIntervalForRequest(value: NSTimeInterval): void;
    // https://developer.apple.com/documentation/cloudkit/ckoperationconfiguration/2866221-timeoutintervalforresource
    timeoutIntervalForResource(): NSTimeInterval;
    setTimeoutIntervalForResource(value: NSTimeInterval): void;
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
   * https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation
   */
  interface CKFetchSubscriptionsOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/1515157-initwithsubscriptionids
    initWithSubscriptionIDs(subscriptionIDs: CKSubscriptionID):CKFetchSubscriptionsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/1515123-init
    init():CKFetchSubscriptionsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/1515282-fetchallsubscriptionsoperation
    fetchAllSubscriptionsOperation():CKFetchSubscriptionsOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/1515011-subscriptionids
    subscriptionIDs(): CKSubscriptionID;
    setSubscriptionIDs(value: CKSubscriptionID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/1515261-fetchsubscriptioncompletionblock
    fetchSubscriptionCompletionBlock(): NSError;
    setFetchSubscriptionCompletionBlock(value: NSError): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchsubscriptionsoperation/3793701-persubscriptioncompletionblock
    perSubscriptionCompletionBlock(): NSError;
    setPerSubscriptionCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchSubscriptionsOperation;
    //
    init():CKFetchSubscriptionsOperation;
  }
}

declare const CKFetchSubscriptionsOperation: cocoascript.CKFetchSubscriptionsOperation;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckoperationgrouptransfersize
  type CKOperationGroupTransferSize = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckaccountstatus
  type CKAccountStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckapplicationpermissions
  type CKApplicationPermissions = cocoascript.NSUInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckapplicationpermissionblock
  type CKApplicationPermissionBlock = cocoascript.NSError;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckapplicationpermissionstatus
  type CKApplicationPermissionStatus = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckdatabasescope
  type CKDatabaseScope = cocoascript.NSInteger;
}
declare namespace cocoascript {
  /**
   * An operation that reports on the changed and deleted records in the specified record zone.
   * https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation
   */
  interface CKFetchRecordChangesOperation extends CKDatabaseOperation {
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515224-initwithrecordzoneid
    initWithRecordZoneID_previousServerChangeToken(recordZoneID: CKRecordZoneID, previousServerChangeToken: CKServerChangeToken):CKFetchRecordChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/2715828-init
    init():CKFetchRecordChangesOperation;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515018-recordzoneid
    recordZoneID(): CKRecordZoneID;
    setRecordZoneID(value: CKRecordZoneID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515209-previousserverchangetoken
    previousServerChangeToken(): CKServerChangeToken;
    setPreviousServerChangeToken(value: CKServerChangeToken): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515230-desiredkeys
    desiredKeys(): CKRecordFieldKey;
    setDesiredKeys(value: CKRecordFieldKey): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1514891-resultslimit
    resultsLimit(): NSUInteger;
    setResultsLimit(value: NSUInteger): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515322-morecoming
    moreComing(): boolean;
    setMoreComing(value: boolean): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515155-recordchangedblock
    recordChangedBlock(): CKRecord;
    setRecordChangedBlock(value: CKRecord): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515054-recordwithidwasdeletedblock
    recordWithIDWasDeletedBlock(): CKRecordID;
    setRecordWithIDWasDeletedBlock(value: CKRecordID): void;
    // https://developer.apple.com/documentation/cloudkit/ckfetchrecordchangesoperation/1515267-fetchrecordchangescompletionbloc
    fetchRecordChangesCompletionBlock(): NSError;
    setFetchRecordChangesCompletionBlock(value: NSError): void;
    //
    alloc():CKFetchRecordChangesOperation;
    //
    init():CKFetchRecordChangesOperation;
  }
}

declare const CKFetchRecordChangesOperation: cocoascript.CKFetchRecordChangesOperation;
declare namespace cocoascript {
  /**
   * An operation that marks push notifications as read by your app.
   * https://developer.apple.com/documentation/cloudkit/ckmarknotificationsreadoperation
   */
  interface CKMarkNotificationsReadOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckmarknotificationsreadoperation/1515228-initwithnotificationidstomarkrea
    initWithNotificationIDsToMarkRead(notificationIDs: CKNotificationID):CKMarkNotificationsReadOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmarknotificationsreadoperation/1640383-init
    init():CKMarkNotificationsReadOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmarknotificationsreadoperation/1515056-notificationids
    notificationIDs(): CKNotificationID;
    setNotificationIDs(value: CKNotificationID): void;
    // https://developer.apple.com/documentation/cloudkit/ckmarknotificationsreadoperation/1515317-marknotificationsreadcompletionb
    markNotificationsReadCompletionBlock(): NSError;
    setMarkNotificationsReadCompletionBlock(value: NSError): void;
    //
    alloc():CKMarkNotificationsReadOperation;
    //
    init():CKMarkNotificationsReadOperation;
  }
}

declare const CKMarkNotificationsReadOperation: cocoascript.CKMarkNotificationsReadOperation;
declare namespace cocoascript {
  /**
   * An operation that sets the value of the app icon’s badge.
   * https://developer.apple.com/documentation/cloudkit/ckmodifybadgeoperation
   */
  interface CKModifyBadgeOperation extends CKOperation {
    // https://developer.apple.com/documentation/cloudkit/ckmodifybadgeoperation/1391678-init
    init():CKModifyBadgeOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifybadgeoperation/1391676-initwithbadgevalue
    initWithBadgeValue(badgeValue: NSUInteger):CKModifyBadgeOperation;
    // https://developer.apple.com/documentation/cloudkit/ckmodifybadgeoperation/1391674-badgevalue
    badgeValue(): NSUInteger;
    setBadgeValue(value: NSUInteger): void;
    // https://developer.apple.com/documentation/cloudkit/ckmodifybadgeoperation/1391682-modifybadgecompletionblock
    modifyBadgeCompletionBlock(): NSError;
    setModifyBadgeCompletionBlock(value: NSError): void;
    //
    alloc():CKModifyBadgeOperation;
    //
    init():CKModifyBadgeOperation;
  }
}

declare const CKModifyBadgeOperation: cocoascript.CKModifyBadgeOperation;
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckshareparticipanttype
  type CKShareParticipantType = cocoascript.NSInteger;
}
declare namespace cocoascript {
  // https://developer.apple.com/documentation/cloudkit/ckquerynotificationreason
  type CKQueryNotificationReason = cocoascript.NSInteger;
}
