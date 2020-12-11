declare namespace cocoascript {
  /**
   * A resolution result for notes.
   * doc://com.apple.documentation/documentation/sirikit/innoteresolutionresult
   */
  interface INNoteResolutionResult extends INIntentResolutionResult {
    //
    alloc():cocoascript.INNoteResolutionResult;
    //
    init():cocoascript.INNoteResolutionResult;
  }
}

declare const INNoteResolutionResult: cocoascript.INNoteResolutionResult;
