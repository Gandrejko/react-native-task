import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Navigation from '@navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@localization';

EStyleSheet.build({
  $background: '#fff',
  $primary: '#04997b',
  $secondary: '#EBEFF5',
  $text: '#06070A',
  $textLight: '#606773',
});

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <BottomSheetModalProvider>
          <Navigation />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
