declare namespace cocoascript {
/**
 * An abstract class that forms the basis of event and command processing in AppKit. 
 * doc://com.apple.documentation/documentation/appkit/nsresponder
 */
interface NSResponder extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1528708-acceptsfirstresponder
  acceptsFirstResponder(): cocoascript.BOOL;
  setAcceptsFirstResponder(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1526750-becomefirstresponder
  becomeFirstResponder():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1532115-resignfirstresponder
  resignFirstResponder():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527066-validateproposedfirstresponder
  validateProposedFirstResponder_forEvent(responder: cocoascript.NSResponder, event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1528245-nextresponder
  nextResponder(): cocoascript.NSResponder;
  setNextResponder(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1524634-mousedown
  mouseDown(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527420-mousedragged
  mouseDragged(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1535349-mouseup
  mouseUp(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525114-mousemoved
  mouseMoved(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1529306-mouseentered
  mouseEntered(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527561-mouseexited
  mouseExited(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1524727-rightmousedown
  rightMouseDown(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1529135-rightmousedragged
  rightMouseDragged(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1526309-rightmouseup
  rightMouseUp(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525719-othermousedown
  otherMouseDown(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1529804-othermousedragged
  otherMouseDragged(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1531343-othermouseup
  otherMouseUp(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525805-keydown
  keyDown(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527436-keyup
  keyUp(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1531599-interpretkeyevents
  interpretKeyEvents(eventArray: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1524690-performkeyequivalent
  performKeyEquivalent(event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1584388-performmnemonic
  performMnemonic(string: cocoascript.NSString):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527264-flushbufferedkeyevents
  flushBufferedKeyEvents():void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534071-pressurechangewithevent
  pressureChangeWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525066-cursorupdate
  cursorUpdate(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527647-flagschanged
  flagsChanged(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1530905-tabletpoint
  tabletPoint(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527018-tabletproximity
  tabletProximity(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525123-helprequested
  helpRequested(eventPtr: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534192-scrollwheel
  scrollWheel(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1535080-quicklookwithevent
  quickLookWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/3237219-changemodewithevent
  changeModeWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1535269-supplementaltargetforaction
  supplementalTargetForAction_sender(action: cocoascript.SEL, sender: cocoascript.NSResponder):cocoascript.NSResponder;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1526236-encoderestorablestatewithcoder
  encodeRestorableStateWithCoder(coder: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1526253-restorestatewithcoder
  restoreStateWithCoder(coder: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1526242-restorablestatekeypaths
  restorableStateKeyPaths(): cocoascript.NSString;
  setRestorableStateKeyPaths(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1526243-invalidaterestorablestate
  invalidateRestorableState():void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534108-useractivity
  userActivity(): cocoascript.NSUserActivity;
  setUserActivity(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534884-updateuseractivitystate
  updateUserActivityState(userActivity: cocoascript.NSUserActivity):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1531294-presenterror
  presentError(error: cocoascript.NSError):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534705-presenterror
  presentError_modalForWindow_delegate_didPresentSelector_contextInfo(error: cocoascript.NSError, window: cocoascript.NSWindow, delegate: cocoascript.NSResponder, didPresentSelector: cocoascript.SEL, contextInfo: void):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525188-willpresenterror
  willPresentError(error: cocoascript.NSError):cocoascript.NSError;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1524516-trytoperform
  tryToPerform_with(action: cocoascript.SEL, object: cocoascript.NSResponder):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1533094-menu
  menu(): cocoascript.NSMenu;
  setMenu(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1524638-validrequestorforsendtype
  validRequestorForSendType_returnType(sendType: cocoascript.NSPasteboardType, returnType: cocoascript.NSPasteboardType):cocoascript.NSResponder;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1535376-undomanager
  undoManager(): cocoascript.NSUndoManager;
  setUndoManager(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534105-shouldbetreatedasinkevent
  shouldBeTreatedAsInkEvent(event: cocoascript.NSEvent):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534197-noresponderfor
  noResponderFor(eventSelector: cocoascript.SEL):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1555072-setinterfacestyle
  setInterfaceStyle(interfaceStyle: cocoascript.NSInterfaceStyle):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1555071-interfacestyle
  interfaceStyle():cocoascript.NSInterfaceStyle;
  // doc://com.apple.documentation/documentation/appkit/nsinterfacestyledefault
  NSInterfaceStyleDefault(): cocoascript.NSString;
  setNSInterfaceStyleDefault(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1526368-begingesturewithevent
  beginGestureWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1531251-endgesturewithevent
  endGestureWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525862-magnifywithevent
  magnifyWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525572-rotatewithevent
  rotateWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1524275-swipewithevent
  swipeWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1531151-touchesbeganwithevent
  touchesBeganWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1524501-touchesmovedwithevent
  touchesMovedWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1530614-touchescancelledwithevent
  touchesCancelledWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525779-touchesendedwithevent
  touchesEndedWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1534209-wantsforwardedscrolleventsforaxi
  wantsForwardedScrollEventsForAxis(axis: cocoascript.NSEventGestureAxis):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1532984-smartmagnifywithevent
  smartMagnifyWithEvent(event: cocoascript.NSEvent):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1527456-wantsscrolleventsforswipetrackin
  wantsScrollEventsForSwipeTrackingOnAxis(axis: cocoascript.NSEventGestureAxis):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525967-performtextfinderaction
  performTextFinderAction(sender: cocoascript.NSResponder):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1525437-init
  init():cocoascript.NSResponder;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1535389-initwithcoder
  initWithCoder(coder: cocoascript.NSCoder):cocoascript.NSResponder;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/2544731-touchbar
  touchBar(): cocoascript.NSTouchBar;
  setTouchBar(): void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/2876293-encoderestorablestatewithcoder
  encodeRestorableStateWithCoder_backgroundQueue(coder: cocoascript.NSCoder, queue: cocoascript.NSOperationQueue):void;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/2544690-maketouchbar
  makeTouchBar():cocoascript.NSTouchBar;
  // doc://com.apple.documentation/documentation/appkit/nsresponder/1644675-newwindowfortab
  newWindowForTab(sender: cocoascript.NSResponder):void;
  // 
  alloc():cocoascript.NSResponder;
  // 
  init():cocoascript.NSResponder;
}
}
declare const NSResponder: cocoascript.NSResponder;

