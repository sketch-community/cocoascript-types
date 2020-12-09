declare namespace cocoascript {
/**
 * A simple interface for loading and playing audio files. 
 * doc://com.apple.documentation/documentation/appkit/nssound
 */
interface NSSound extends NSObject {
  // doc://com.apple.documentation/documentation/appkit/nssound/1477300-delegate
  delegate(): cocoascript.NSSoundDelegate;
  setDelegate(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477274-initwithcontentsoffile
  initWithContentsOfFile_byReference(path: cocoascript.NSString, byRef: cocoascript.BOOL):cocoascript.NSSound;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477288-initwithcontentsofurl
  initWithContentsOfURL_byReference(url: cocoascript.NSURL, byRef: cocoascript.BOOL):cocoascript.NSSound;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477292-initwithdata
  initWithData(data: cocoascript.NSData):cocoascript.NSSound;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477294-initwithpasteboard
  initWithPasteboard(pasteboard: cocoascript.NSPasteboard):cocoascript.NSSound;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477296-name
  name(): cocoascript.NSSoundName;
  setName(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477286-setname
  setName(string: cocoascript.NSSoundName):cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477315-volume
  volume(): number;
  setVolume(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477320-currenttime
  currentTime(): cocoascript.NSTimeInterval;
  setCurrentTime(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477311-loops
  loops(): cocoascript.BOOL;
  setLoops(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477284-playbackdeviceidentifier
  playbackDeviceIdentifier(): cocoascript.NSSoundPlaybackDeviceIdentifier;
  setPlaybackDeviceIdentifier(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477290-soundunfilteredtypes
  soundUnfilteredTypes(): cocoascript.NSString;
  setSoundUnfilteredTypes(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477313-duration
  duration(): cocoascript.NSTimeInterval;
  setDuration(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477302-playing
  playing(): cocoascript.BOOL;
  setPlaying(): void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477307-pause
  pause():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477322-play
  play():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477336-resume
  resume():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477282-stop
  stop():cocoascript.BOOL;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477338-writetopasteboard
  writeToPasteboard(pasteboard: cocoascript.NSPasteboard):void;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477326-channelmapping
  channelMapping():cocoascript.NSArray;
  // doc://com.apple.documentation/documentation/appkit/nssound/1477317-setchannelmapping
  setChannelMapping(channelMapping: cocoascript.NSArray):void;
  // 
  alloc():cocoascript.NSSound;
  // 
  init():cocoascript.NSSound;
}
}
declare const NSSound: cocoascript.NSSound;

