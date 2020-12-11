declare namespace cocoascript {
  /**
   * The
   * doc://com.apple.documentation/documentation/uikit/uiwebviewdelegate
   */
  interface UIWebViewDelegate extends NSObject {
    // doc://com.apple.documentation/documentation/uikit/uiwebviewdelegate/1617945-webview
    webView_shouldStartLoadWithRequest_navigationType(webView: cocoascript.UIWebView, request: cocoascript.NSURLRequest, navigationType: cocoascript.UIWebViewNavigationType):cocoascript.BOOL;
    // doc://com.apple.documentation/documentation/uikit/uiwebviewdelegate/1617947-webviewdidstartload
    webViewDidStartLoad(webView: cocoascript.UIWebView):void;
    // doc://com.apple.documentation/documentation/uikit/uiwebviewdelegate/1617969-webviewdidfinishload
    webViewDidFinishLoad(webView: cocoascript.UIWebView):void;
    // doc://com.apple.documentation/documentation/uikit/uiwebviewdelegate/1617970-webview
    webView_didFailLoadWithError(webView: cocoascript.UIWebView, error: cocoascript.NSError):void;
  }
}
