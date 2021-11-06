declare namespace cocoascript {
  /**
   * A class that allows you to restrict a user’s access to particular features in your Mac app or daemon.
   * https://developer.apple.com/documentation/securityfoundation/sfauthorization
   */
  interface SFAuthorization extends NSObject {
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417643-authorization
    authorization():SFAuthorization;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417650-authorizationwithflags
    authorizationWithFlags_rights_environment(flags: AuthorizationFlags, rights: AuthorizationRights, environment: AuthorizationEnvironment):SFAuthorization;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417646-init
    init():SFAuthorization;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417632-initwithflags
    initWithFlags_rights_environment(flags: AuthorizationFlags, rights: AuthorizationRights, environment: AuthorizationEnvironment):SFAuthorization;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417636-authorizationref
    authorizationRef():AuthorizationRef;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417645-permitwithrights
    permitWithRights_flags_environment_authorizedRights(rights: AuthorizationRights, flags: AuthorizationFlags, environment: AuthorizationEnvironment, authorizedRights: AuthorizationRights):any;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417648-obtainwithrights
    obtainWithRights_flags_environment_authorizedRights_error(rights: AuthorizationRights, flags: AuthorizationFlags, environment: AuthorizationEnvironment, authorizedRights: AuthorizationRights, error: NSError):boolean;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417641-permitwithright
    permitWithRight_flags(rightName: AuthorizationString, flags: AuthorizationFlags):any;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417652-obtainwithright
    obtainWithRight_flags_error(rightName: AuthorizationString, flags: AuthorizationFlags, error: NSError):boolean;
    // https://developer.apple.com/documentation/securityfoundation/sfauthorization/1417634-invalidatecredentials
    invalidateCredentials():void;
    //
    alloc():SFAuthorization;
    //
    init():SFAuthorization;
  }
}

declare const SFAuthorization: cocoascript.SFAuthorization;
