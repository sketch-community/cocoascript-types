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
