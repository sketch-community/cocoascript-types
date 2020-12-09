declare namespace cocoascript {
/**
 * Defines the methods for receiving search completion data. 
 * doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate
 */
interface MKLocalSearchCompleterDelegate extends NSObject {
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate/1452209-completerdidupdateresults
  completerDidUpdateResults(completer: cocoascript.MKLocalSearchCompleter):void;
  // doc://com.apple.documentation/documentation/mapkit/mklocalsearchcompleterdelegate/1451885-completer
  completer_didFailWithError(completer: cocoascript.MKLocalSearchCompleter, error: cocoascript.NSError):void;
}
}

