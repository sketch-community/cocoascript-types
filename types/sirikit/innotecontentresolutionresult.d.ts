declare namespace cocoascript {
  /**
   * A resolution result for the content of notes.
   * doc://com.apple.documentation/documentation/sirikit/innotecontentresolutionresult
   */
  interface INNoteContentResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INNoteContentResolutionResult;
    //
    init():cocoascript.INNoteContentResolutionResult;
  }
}

declare const INNoteContentResolutionResult: cocoascript.INNoteContentResolutionResult;
