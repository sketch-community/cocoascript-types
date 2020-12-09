declare namespace cocoascript {
/**
 * A mechanism for registering handler routines for specific types of Apple events and dispatching events to those handlers.
 * doc://com.apple.documentation/documentation/foundation/nsappleeventmanager
 */
interface NSAppleEventManager extends NSObject {
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1411880-removeeventhandlerforeventclass
  removeEventHandlerForEventClass_andEventID(eventClass: cocoascript.AEEventClass, eventID: cocoascript.AEEventID):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1416131-seteventhandler
  setEventHandler_andSelector_forEventClass_andEventID(handler: cocoascript.NSAppleEventManager, handleEventSelector: cocoascript.SEL, eventClass: cocoascript.AEEventClass, eventID: cocoascript.AEEventID):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1409260-dispatchrawappleevent
  dispatchRawAppleEvent_withRawReply_handlerRefCon(theAppleEvent: cocoascript.AppleEvent, theReply: cocoascript.AppleEvent, handlerRefCon: cocoascript.SRefCon):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1410477-appleeventforsuspensionid
  appleEventForSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1414690-currentappleevent
  currentAppleEvent(): cocoascript.NSAppleEventDescriptor;
  setCurrentAppleEvent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1413207-currentreplyappleevent
  currentReplyAppleEvent(): cocoascript.NSAppleEventDescriptor;
  setCurrentReplyAppleEvent(): void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1415286-replyappleeventforsuspensionid
  replyAppleEventForSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):cocoascript.NSAppleEventDescriptor;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1412315-resumewithsuspensionid
  resumeWithSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1415997-setcurrentappleeventandreplyeven
  setCurrentAppleEventAndReplyEventWithSuspensionID(suspensionID: cocoascript.NSAppleEventManagerSuspensionID):void;
  // doc://com.apple.documentation/documentation/foundation/nsappleeventmanager/1413501-suspendcurrentappleevent
  suspendCurrentAppleEvent():cocoascript.NSAppleEventManagerSuspensionID;
  // 
  alloc():cocoascript.NSAppleEventManager;
  // 
  init():cocoascript.NSAppleEventManager;
}
}
declare const NSAppleEventManager: cocoascript.NSAppleEventManager;

