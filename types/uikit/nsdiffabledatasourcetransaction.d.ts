declare namespace cocoascript {
  /**
   * A transaction that describes the changes after reordering the items in the view.
   * doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcetransaction
   */
  interface NSDiffableDataSourceTransaction extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcetransaction/3600510-sectiontransactions
    sectionTransactions(): cocoascript.ItemIdentifierType;
    setSectionTransactions(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcetransaction/3600509-initialsnapshot
    initialSnapshot(): cocoascript.ItemIdentifierType;
    setInitialSnapshot(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcetransaction/3600508-finalsnapshot
    finalSnapshot(): cocoascript.ItemIdentifierType;
    setFinalSnapshot(): void;
    // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcetransaction/3600507-difference
    difference(): cocoascript.ItemIdentifierType;
    setDifference(): void;
    //
    alloc():cocoascript.NSDiffableDataSourceTransaction;
    //
    init():cocoascript.NSDiffableDataSourceTransaction;
  }
}

declare const NSDiffableDataSourceTransaction: cocoascript.NSDiffableDataSourceTransaction;
