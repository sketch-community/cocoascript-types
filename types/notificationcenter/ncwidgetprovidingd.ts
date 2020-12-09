declare namespace cocoascript {
/**
 * The interface for customizing the appearance and behavior of a Today widget.
 * doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding
 */
interface NCWidgetProviding extends NSExtensionRequestHandling {
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490248-widgetmargininsetsforproposedmar
  widgetMarginInsetsForProposedMarginInsets(defaultMarginInsets: cocoascript.UIEdgeInsets):cocoascript.UIEdgeInsets;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1649132-widgetactivedisplaymodedidchange
  widgetActiveDisplayModeDidChange_withMaximumSize(activeDisplayMode: cocoascript.NCWidgetDisplayMode, maxSize: cocoascript.CGSize):void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490262-widgetperformupdatewithcompletio
  widgetPerformUpdateWithCompletionHandler(completionHandler: cocoascript.NCUpdateResult):void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490251-widgetallowsediting
  widgetAllowsEditing(): cocoascript.BOOL;
  setWidgetAllowsEditing(): void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490249-widgetdidbeginediting
  widgetDidBeginEditing():void;
  // doc://com.apple.documentation/documentation/notificationcenter/ncwidgetproviding/1490258-widgetdidendediting
  widgetDidEndEditing():void;
}
}

