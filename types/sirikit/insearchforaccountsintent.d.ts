declare namespace cocoascript {
  /**
   * A request for information about the user’s accounts in your app.
   * doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent
   */
  interface INSearchForAccountsIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867916-initwithaccountnickname
    initWithAccountNickname_accountType_organizationName_requestedBalanceType(accountNickname: cocoascript.INSpeakableString, accountType: cocoascript.INAccountType, organizationName: cocoascript.INSpeakableString, requestedBalanceType: cocoascript.INBalanceType):cocoascript.INSearchForAccountsIntent;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867912-accountnickname
    accountNickname(): cocoascript.INSpeakableString;
    setAccountNickname(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867910-accounttype
    accountType(): cocoascript.INAccountType;
    setAccountType(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867917-organizationname
    organizationName(): cocoascript.INSpeakableString;
    setOrganizationName(): void;
    // doc://com.apple.documentation/documentation/sirikit/insearchforaccountsintent/2867918-requestedbalancetype
    requestedBalanceType(): cocoascript.INBalanceType;
    setRequestedBalanceType(): void;
    //
    alloc():cocoascript.INSearchForAccountsIntent;
    //
    init():cocoascript.INSearchForAccountsIntent;
  }
}

declare const INSearchForAccountsIntent: cocoascript.INSearchForAccountsIntent;
