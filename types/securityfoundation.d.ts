declare namespace cocoascript {
  /**
   * A class that allows you to restrict a user’s access to particular features in your Mac app or daemon.
   * doc://com.apple.documentation/documentation/securityfoundation/sfauthorization
   */
  interface SFAuthorization extends NSObject {
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417643-authorization
    authorization():SFAuthorization;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417650-authorizationwithflags
    authorizationWithFlags_rights_environment(flags: AuthorizationFlags, rights: AuthorizationRights, environment: AuthorizationEnvironment):SFAuthorization;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417646-init
    init():SFAuthorization;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417632-initwithflags
    initWithFlags_rights_environment(flags: AuthorizationFlags, rights: AuthorizationRights, environment: AuthorizationEnvironment):SFAuthorization;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417636-authorizationref
    authorizationRef():AuthorizationRef;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417645-permitwithrights
    permitWithRights_flags_environment_authorizedRights(rights: AuthorizationRights, flags: AuthorizationFlags, environment: AuthorizationEnvironment, authorizedRights: AuthorizationRights):any;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417648-obtainwithrights
    obtainWithRights_flags_environment_authorizedRights_error(rights: AuthorizationRights, flags: AuthorizationFlags, environment: AuthorizationEnvironment, authorizedRights: AuthorizationRights, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417641-permitwithright
    permitWithRight_flags(rightName: AuthorizationString, flags: AuthorizationFlags):any;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417652-obtainwithright
    obtainWithRight_flags_error(rightName: AuthorizationString, flags: AuthorizationFlags, error: NSError):BOOL;
    // doc://com.apple.documentation/documentation/securityfoundation/sfauthorization/1417634-invalidatecredentials
    invalidateCredentials():void;
    //
    alloc():SFAuthorization;
    //
    init():SFAuthorization;
  }
}

declare const SFAuthorization: cocoascript.SFAuthorization;
