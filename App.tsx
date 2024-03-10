import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Navigation from '@navigation';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistQueryClient,
  PersistQueryClientProvider,
} from '@tanstack/react-query-persist-client';
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

const queryClient = new QueryClient();

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
});

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister}}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <BottomSheetModalProvider>
            <Navigation />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </PersistQueryClientProvider>
  );
}

export default App;
