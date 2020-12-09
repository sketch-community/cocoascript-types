declare namespace cocoascript {
/**
 * The class responsible for displaying a lock icon that can be used to indicate that a user interface has restricted access.
 * doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview
 */
interface SFAuthorizationView extends NSView {
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411019-setstring
  setString(authorizationString: cocoascript.AuthorizationString):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411021-setauthorizationrights
  setAuthorizationRights(authorizationRights: cocoascript.AuthorizationRights):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411004-setautoupdate
  setAutoupdate(autoupdate: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411030-setautoupdate
  setAutoupdate_interval(autoupdate: cocoascript.BOOL, interval: cocoascript.NSTimeInterval):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410998-setflags
  setFlags(flags: cocoascript.AuthorizationFlags):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411000-setenabled
  setEnabled(enabled: cocoascript.BOOL):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410994-setdelegate
  setDelegate(delegate: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410996-delegate
  delegate():cocoascript.SFAuthorizationView;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411015-updatestatus
  updateStatus(inSender: cocoascript.SFAuthorizationView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411032-authorization
  authorization():cocoascript.SFAuthorization;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1410995-authorizationrights
  authorizationRights():cocoascript.AuthorizationRights;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411023-authorizationstate
  authorizationState():cocoascript.SFAuthorizationViewState;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411028-isenabled
  isEnabled():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411027-authorize
  authorize(inSender: cocoascript.SFAuthorizationView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/securityinterface/sfauthorizationview/1411025-deauthorize
  deauthorize(inSender: cocoascript.SFAuthorizationView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411006-authorizationviewshoulddeauthori
  authorizationViewShouldDeauthorize(view: cocoascript.SFAuthorizationView):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411010-authorizationviewcreatedauthoriz
  authorizationViewCreatedAuthorization(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411002-authorizationviewdidauthorize
  authorizationViewDidAuthorize(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411017-authorizationviewdiddeauthorize
  authorizationViewDidDeauthorize(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1411034-authorizationviewdidhide
  authorizationViewDidHide(view: cocoascript.SFAuthorizationView):void;
  // doc://com.apple.documentation/documentation/objectivec/nsobject/1410992-authorizationviewreleasedauthori
  authorizationViewReleasedAuthorization(view: cocoascript.SFAuthorizationView):void;
  // 
  alloc():cocoascript.SFAuthorizationView;
  // 
  init():cocoascript.SFAuthorizationView;
}
}
declare const SFAuthorizationView: cocoascript.SFAuthorizationView;

