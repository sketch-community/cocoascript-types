declare namespace cocoascript {
  /**
   * A resolution result for the type of data contained in notes.
   * doc://com.apple.documentation/documentation/sirikit/innotecontenttyperesolutionresult
   */
  interface INNoteContentTypeResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INNoteContentTypeResolutionResult;
    //
    init():cocoascript.INNoteContentTypeResolutionResult;
  }
}

declare const INNoteContentTypeResolutionResult: cocoascript.INNoteContentTypeResolutionResult;
