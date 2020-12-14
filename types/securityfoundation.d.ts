declare namespace cocoascript {
  /**
   * A class that allows you to restrict a user’s access to particular features in your Mac app or daemon.
   * doc://com.apple.documentation/documentation/securityfoundation/sfauthorization
   */
  interface SFAuthorization extends NSObject {
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417646-init
    init():cocoascript.SFAuthorization;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417632-initwithflags
    initWithFlags_rights_environment(flags: cocoascript.AuthorizationFlags, rights: cocoascript.AuthorizationRights, environment: cocoascript.AuthorizationEnvironment):cocoascript.SFAuthorization;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417636-authorizationref
    authorizationRef():cocoascript.AuthorizationRef;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417645-permitwithrights
    permitWithRights_flags_environment_authorizedRights(rights: cocoascript.AuthorizationRights, flags: cocoascript.AuthorizationFlags, environment: cocoascript.AuthorizationEnvironment, authorizedRights: cocoascript.AuthorizationRights):any;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417648-obtainwithrights
    obtainWithRights_flags_environment_authorizedRights_error(rights: cocoascript.AuthorizationRights, flags: cocoascript.AuthorizationFlags, environment: cocoascript.AuthorizationEnvironment, authorizedRights: cocoascript.AuthorizationRights, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417641-permitwithright
    permitWithRight_flags(rightName: cocoascript.AuthorizationString, flags: cocoascript.AuthorizationFlags):any;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417652-obtainwithright
    obtainWithRight_flags_error(rightName: cocoascript.AuthorizationString, flags: cocoascript.AuthorizationFlags, error: cocoascript.NSError):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417634-invalidatecredentials
    invalidateCredentials():void;
    //
    alloc():cocoascript.SFAuthorization;
    //
    init():cocoascript.SFAuthorization;
  }
}

declare const SFAuthorization: cocoascript.SFAuthorization;
