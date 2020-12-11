declare namespace cocoascript {
  /**
   * A user account that provides the funds when making a payment.
   * doc://com.apple.documentation/documentation/sirikit/inpaymentaccount
   */
  interface INPaymentAccount extends NSObject {
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2867840-initwithnickname
    initWithNickname_number_accountType_organizationName_balance_secondaryBalance(nickname: cocoascript.INSpeakableString, number: cocoascript.NSString, accountType: cocoascript.INAccountType, organizationName: cocoascript.INSpeakableString, balance: cocoascript.INBalanceAmount, secondaryBalance: cocoascript.INBalanceAmount):cocoascript.INPaymentAccount;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2851531-initwithnickname
    initWithNickname_number_accountType_organizationName(nickname: cocoascript.INSpeakableString, number: cocoascript.NSString, accountType: cocoascript.INAccountType, organizationName: cocoascript.INSpeakableString):cocoascript.INPaymentAccount;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2851529-nickname
    nickname(): cocoascript.INSpeakableString;
    setNickname(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2799156-organizationname
    organizationName(): cocoascript.INSpeakableString;
    setOrganizationName(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2799152-accounttype
    accountType(): cocoascript.INAccountType;
    setAccountType(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2799154-accountnumber
    accountNumber(): cocoascript.NSString;
    setAccountNumber(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2867838-balance
    balance(): cocoascript.INBalanceAmount;
    setBalance(): void;
    // doc://com.apple.documentation/documentation/sirikit/inpaymentaccount/2867839-secondarybalance
    secondaryBalance(): cocoascript.INBalanceAmount;
    setSecondaryBalance(): void;
    //
    alloc():cocoascript.INPaymentAccount;
    //
    init():cocoascript.INPaymentAccount;
  }
}

declare const INPaymentAccount: cocoascript.INPaymentAccount;
