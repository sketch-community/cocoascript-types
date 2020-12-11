declare namespace cocoascript {
  /**
   * A request to transfer money between two accounts.
   * doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent
   */
  interface INTransferMoneyIntent extends INIntent {
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868061-initwithfromaccount
    initWithFromAccount_toAccount_transactionAmount_transactionScheduledDate_transactionNote(fromAccount: cocoascript.INPaymentAccount, toAccount: cocoascript.INPaymentAccount, transactionAmount: cocoascript.INPaymentAmount, transactionScheduledDate: cocoascript.INDateComponentsRange, transactionNote: cocoascript.NSString):cocoascript.INTransferMoneyIntent;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868067-fromaccount
    fromAccount(): cocoascript.INPaymentAccount;
    setFromAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868060-toaccount
    toAccount(): cocoascript.INPaymentAccount;
    setToAccount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868056-transactionamount
    transactionAmount(): cocoascript.INPaymentAmount;
    setTransactionAmount(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868068-transactionscheduleddate
    transactionScheduledDate(): cocoascript.INDateComponentsRange;
    setTransactionScheduledDate(): void;
    // doc://com.apple.documentation/documentation/sirikit/intransfermoneyintent/2868062-transactionnote
    transactionNote(): cocoascript.NSString;
    setTransactionNote(): void;
    //
    alloc():cocoascript.INTransferMoneyIntent;
    //
    init():cocoascript.INTransferMoneyIntent;
  }
}

declare const INTransferMoneyIntent: cocoascript.INTransferMoneyIntent;
