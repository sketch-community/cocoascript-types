declare namespace cocoascript {
  /**
   * An abstract class that represents a relevance provider.
   * doc://com.apple.documentation/documentation/sirikit/inrelevanceprovider
   */
  interface INRelevanceProvider extends NSObject {
    //
    alloc():cocoascript.INRelevanceProvider;
    //
    init():cocoascript.INRelevanceProvider;
  }
}

declare const INRelevanceProvider: cocoascript.INRelevanceProvider;
