declare namespace cocoascript {
/**
 * A general-purpose recorder of operations that enables undo and redo. 
 * doc://com.apple.documentation/documentation/foundation/nsundomanager
 */
interface NSUndoManager extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1437863-registerundowithtarget
  registerUndoWithTarget_handler(target: cocoascript.NSUndoManager, undoHandler: cocoascript.NSUndoManager):void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1414001-registerundowithtarget
  registerUndoWithTarget_selector_object(target: cocoascript.NSUndoManager, selector: cocoascript.SEL, anObject: cocoascript.NSUndoManager):void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409564-preparewithinvocationtarget
  prepareWithInvocationTarget(target: cocoascript.NSUndoManager):cocoascript.NSUndoManager;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412394-canundo
  canUndo(): cocoascript.BOOL;
  setCanUndo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415212-canredo
  canRedo(): cocoascript.BOOL;
  setCanRedo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412189-undo
  undo():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1410826-undonestedgroup
  undoNestedGroup():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1417030-redo
  redo():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409753-levelsofundo
  levelsOfUndo(): cocoascript.NSUInteger;
  setLevelsOfUndo(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409894-beginundogrouping
  beginUndoGrouping():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1416490-endundogrouping
  endUndoGrouping():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1417407-groupsbyevent
  groupsByEvent(): cocoascript.BOOL;
  setGroupsByEvent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409006-groupinglevel
  groupingLevel(): cocoascript.NSInteger;
  setGroupingLevel(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412239-disableundoregistration
  disableUndoRegistration():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1408957-enableundoregistration
  enableUndoRegistration():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415464-undoregistrationenabled
  undoRegistrationEnabled(): cocoascript.BOOL;
  setUndoRegistrationEnabled(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1407345-undoing
  undoing(): cocoascript.BOOL;
  setUndoing(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1411654-redoing
  redoing(): cocoascript.BOOL;
  setRedoing(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1407442-removeallactions
  removeAllActions():void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409896-removeallactionswithtarget
  removeAllActionsWithTarget(target: cocoascript.NSUndoManager):void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415127-undoactionname
  undoActionName(): cocoascript.NSString;
  setUndoActionName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1417487-redoactionname
  redoActionName(): cocoascript.NSString;
  setRedoActionName(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412915-setactionname
  setActionName(actionName: cocoascript.NSString):void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412953-undomenuitemtitle
  undoMenuItemTitle(): cocoascript.NSString;
  setUndoMenuItemTitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409938-redomenuitemtitle
  redoMenuItemTitle(): cocoascript.NSString;
  setRedoMenuItemTitle(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1413122-undomenutitleforundoactionname
  undoMenuTitleForUndoActionName(actionName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1407438-redomenutitleforundoactionname
  redoMenuTitleForUndoActionName(actionName: cocoascript.NSString):cocoascript.NSString;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1409504-runloopmodes
  runLoopModes(): cocoascript.NSRunLoopMode;
  setRunLoopModes(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1412159-setactionisdiscardable
  setActionIsDiscardable(discardable: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1415261-undoactionisdiscardable
  undoActionIsDiscardable(): cocoascript.BOOL;
  setUndoActionIsDiscardable(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanager/1413488-redoactionisdiscardable
  redoActionIsDiscardable(): cocoascript.BOOL;
  setRedoActionIsDiscardable(): void;
  // doc://com.apple.documentation/documentation/foundation/nsundomanagergroupisdiscardablekey
  NSUndoManagerGroupIsDiscardableKey(): cocoascript.const;
  setNSUndoManagerGroupIsDiscardableKey(): void;
  // 
  alloc():cocoascript.NSUndoManager;
  // 
  init():cocoascript.NSUndoManager;
}
}
declare const NSUndoManager: cocoascript.NSUndoManager;

