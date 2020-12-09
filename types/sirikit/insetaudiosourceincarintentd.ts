declare namespace cocoascript {
/**
 * A request to change the source of audio playback in a CarPlay-enabled vehicle.
 * doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent
 */
interface INSetAudioSourceInCarIntent extends INIntent {
  // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent/1648409-initwithaudiosource
  initWithAudioSource_relativeAudioSourceReference(audioSource: cocoascript.INCarAudioSource, relativeAudioSourceReference: cocoascript.INRelativeReference):cocoascript.INSetAudioSourceInCarIntent;
  // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent/1648406-audiosource
  audioSource(): cocoascript.INCarAudioSource;
  setAudioSource(): void;
  // doc://com.apple.documentation/documentation/sirikit/insetaudiosourceincarintent/1648407-relativeaudiosourcereference
  relativeAudioSourceReference(): cocoascript.INRelativeReference;
  setRelativeAudioSourceReference(): void;
  // 
  alloc():cocoascript.INSetAudioSourceInCarIntent;
  // 
  init():cocoascript.INSetAudioSourceInCarIntent;
}
}
declare const INSetAudioSourceInCarIntent: cocoascript.INSetAudioSourceInCarIntent;

