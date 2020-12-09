declare namespace cocoascript {
/**
 * A transaction that describes the changes after reordering the items in a section. 
 * doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectiontransaction
 */
interface NSDiffableDataSourceSectionTransaction extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectiontransaction/3600505-sectionidentifier
  sectionIdentifier(): cocoascript.SectionIdentifierType;
  setSectionIdentifier(): void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectiontransaction/3600504-initialsnapshot
  initialSnapshot(): cocoascript.ItemIdentifierType;
  setInitialSnapshot(): void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectiontransaction/3600503-finalsnapshot
  finalSnapshot(): cocoascript.ItemIdentifierType;
  setFinalSnapshot(): void;
  // doc://com.apple.documentation/documentation/uikit/nsdiffabledatasourcesectiontransaction/3600502-difference
  difference(): cocoascript.ItemIdentifierType;
  setDifference(): void;
  // 
  alloc():cocoascript.NSDiffableDataSourceSectionTransaction;
  // 
  init():cocoascript.NSDiffableDataSourceSectionTransaction;
}
}
declare const NSDiffableDataSourceSectionTransaction: cocoascript.NSDiffableDataSourceSectionTransaction;

