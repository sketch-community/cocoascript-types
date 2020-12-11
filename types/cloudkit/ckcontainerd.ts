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
