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

