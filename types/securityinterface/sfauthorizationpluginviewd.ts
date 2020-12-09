declare namespace cocoascript {
/**
 * Allows authorization plug-in developers to create a custom view their plug-in can display.
 * doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview
 */
interface SFAuthorizationPluginView extends NSObject {
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524417-initwithcallbacks
  initWithCallbacks_andEngineRef(callbacks: cocoascript.AuthorizationCallbacks, engineRef: cocoascript.AuthorizationEngineRef):cocoascript.SFAuthorizationPluginView;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524415-callbacks
  callbacks():cocoascript.AuthorizationCallbacks;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524422-engineref
  engineRef():cocoascript.AuthorizationEngineRef;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524408-lasterror
  lastError():cocoascript.NSError;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524388-buttonpressed
  buttonPressed(inButtonType: cocoascript.SFButtonType):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524411-viewfortype
  viewForType(inType: cocoascript.SFViewType):cocoascript.NSView;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524390-didactivate
  didActivate():void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524392-diddeactivate
  didDeactivate():void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524410-willactivatewithuser
  willActivateWithUser(inUserInformation: cocoascript.NSDictionary):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524412-firstkeyview
  firstKeyView():cocoascript.NSView;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524402-firstresponder
  firstResponder():cocoascript.NSResponder;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524413-lastkeyview
  lastKeyView():cocoascript.NSView;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1524404-setenabled
  setEnabled(inEnabled: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1514136-displayview
  displayView():void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1514134-setbutton
  setButton_enabled(inButtonType: cocoascript.SFButtonType, inEnabled: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationpluginview/1514132-updateview
  updateView():void;
  // 
  alloc():cocoascript.SFAuthorizationPluginView;
  // 
  init():cocoascript.SFAuthorizationPluginView;
}
}
declare const SFAuthorizationPluginView: cocoascript.SFAuthorizationPluginView;

