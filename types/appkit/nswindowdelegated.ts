declare namespace cocoascript {
/**
 * A set of optional methods that a delegate of 
 * doc://com.apple.documentation/documentation/appkit/nswindowdelegate
 */
interface NSWindowDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419611-window
  window_willPositionSheet_usingRect(window: cocoascript.NSWindow, sheet: cocoascript.NSWindow, rect: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419408-windowwillbeginsheet
  windowWillBeginSheet(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419773-windowdidendsheet
  windowDidEndSheet(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419292-windowwillresize
  windowWillResize_toSize(sender: cocoascript.NSWindow, frameSize: cocoascript.NSSize):cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419567-windowdidresize
  windowDidResize(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419555-windowwillstartliveresize
  windowWillStartLiveResize(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419150-windowdidendliveresize
  windowDidEndLiveResize(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419461-windowwillminiaturize
  windowWillMiniaturize(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419621-windowdidminiaturize
  windowDidMiniaturize(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419296-windowdiddeminiaturize
  windowDidDeminiaturize(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419684-windowwillusestandardframe
  windowWillUseStandardFrame_defaultFrame(window: cocoascript.NSWindow, newFrame: cocoascript.NSRect):cocoascript.NSRect;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419533-windowshouldzoom
  windowShouldZoom_toFrame(window: cocoascript.NSWindow, newFrame: cocoascript.NSRect):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419282-window
  window_willUseFullScreenContentSize(window: cocoascript.NSWindow, proposedSize: cocoascript.NSSize):cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419144-window
  window_willUseFullScreenPresentationOptions(window: cocoascript.NSWindow, proposedOptions: cocoascript.NSApplicationPresentationOptions):cocoascript.NSApplicationPresentationOptions;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419563-windowwillenterfullscreen
  windowWillEnterFullScreen(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419116-windowdidenterfullscreen
  windowDidEnterFullScreen(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419332-windowwillexitfullscreen
  windowWillExitFullScreen(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419146-windowdidexitfullscreen
  windowDidExitFullScreen(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419521-customwindowstoenterfullscreenfo
  customWindowsToEnterFullScreenForWindow(window: cocoascript.NSWindow):cocoascript.NSWindow;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419557-customwindowstoenterfullscreenfo
  customWindowsToEnterFullScreenForWindow_onScreen(window: cocoascript.NSWindow, screen: cocoascript.NSScreen):cocoascript.NSWindow;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419406-window
  window_startCustomAnimationToEnterFullScreenWithDuration(window: cocoascript.NSWindow, duration: cocoascript.NSTimeInterval):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419709-window
  window_startCustomAnimationToEnterFullScreenOnScreen_withDuration(window: cocoascript.NSWindow, screen: cocoascript.NSScreen, duration: cocoascript.NSTimeInterval):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419591-windowdidfailtoenterfullscreen
  windowDidFailToEnterFullScreen(window: cocoascript.NSWindow):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419070-customwindowstoexitfullscreenfor
  customWindowsToExitFullScreenForWindow(window: cocoascript.NSWindow):cocoascript.NSWindow;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419705-window
  window_startCustomAnimationToExitFullScreenWithDuration(window: cocoascript.NSWindow, duration: cocoascript.NSTimeInterval):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419573-windowdidfailtoexitfullscreen
  windowDidFailToExitFullScreen(window: cocoascript.NSWindow):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419336-windowwillmove
  windowWillMove(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419674-windowdidmove
  windowDidMove(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419267-windowdidchangescreen
  windowDidChangeScreen(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419581-windowdidchangescreenprofile
  windowDidChangeScreenProfile(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419517-windowdidchangebackingproperties
  windowDidChangeBackingProperties(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419380-windowshouldclose
  windowShouldClose(sender: cocoascript.NSWindow):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419605-windowwillclose
  windowWillClose(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419737-windowdidbecomekey
  windowDidBecomeKey(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419711-windowdidresignkey
  windowDidResignKey(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419190-windowdidbecomemain
  windowDidBecomeMain(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419584-windowdidresignmain
  windowDidResignMain(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419416-windowwillreturnfieldeditor
  windowWillReturnFieldEditor_toObject(sender: cocoascript.NSWindow, client: cocoascript.NSWindowDelegate):cocoascript.NSWindowDelegate;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419493-windowdidupdate
  windowDidUpdate(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419258-windowdidexpose
  windowDidExpose(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419424-windowdidchangeocclusionstate
  windowDidChangeOcclusionState(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419452-window
  window_shouldDragDocumentWithEvent_from_withPasteboard(window: cocoascript.NSWindow, event: cocoascript.NSEvent, dragImageLocation: cocoascript.NSPoint, pasteboard: cocoascript.NSPasteboard):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419745-windowwillreturnundomanager
  windowWillReturnUndoManager(window: cocoascript.NSWindow):cocoascript.NSUndoManager;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419465-window
  window_shouldPopUpDocumentPathMenu(window: cocoascript.NSWindow, menu: cocoascript.NSMenu):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419619-window
  window_willEncodeRestorableState(window: cocoascript.NSWindow, state: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419475-window
  window_didDecodeRestorableState(window: cocoascript.NSWindow, state: cocoascript.NSCoder):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419360-window
  window_willResizeForVersionBrowserWithMaxPreferredSize_maxAllowedSize(window: cocoascript.NSWindow, maxPreferredFrameSize: cocoascript.NSSize, maxAllowedFrameSize: cocoascript.NSSize):cocoascript.NSSize;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419463-windowwillenterversionbrowser
  windowWillEnterVersionBrowser(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419064-windowdidenterversionbrowser
  windowDidEnterVersionBrowser(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419252-windowwillexitversionbrowser
  windowWillExitVersionBrowser(notification: cocoascript.NSNotification):void;
  // doc://com.apple.documentation/documentation/appkit/nswindowdelegate/1419501-windowdidexitversionbrowser
  windowDidExitVersionBrowser(notification: cocoascript.NSNotification):void;
}
}

