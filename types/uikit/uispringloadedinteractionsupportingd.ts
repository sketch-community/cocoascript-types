declare namespace cocoascript {
/**
 * The interface that determines if an object supports a spring-loaded interaction for drag and drop activities.
 * doc://com.apple.documentation/documentation/uikit/uispringloadedinteractionsupporting
 */
interface UISpringLoadedInteractionSupporting extends NSObject {
  // doc://com.apple.documentation/documentation/uikit/uispringloadedinteractionsupporting/2897189-springloaded
  springLoaded(): cocoascript.BOOL;
  setSpringLoaded(): void;
}
}

