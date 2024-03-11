import ThemeProvider from '@components/providers/themeProvider';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import useLanguage from '@hooks/useLanguage';
import Navigation from '@navigation';
import {persistor, store} from '@store/store';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {QueryClient} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@localization';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst',
      staleTime: Infinity,
      gcTime: Infinity, // 24 hours
      refetchOnReconnect: 'always',
      retry: 3,
    },
    mutations: {
      networkMode: 'offlineFirst',
      gcTime: Infinity, // 24 hours
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: AsyncStorage,
  key: 'REACT_QUERY_OFFLINE_CACHE',
});

function App() {
  useLanguage();
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister, maxAge: Infinity}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <SafeAreaProvider>
              <GestureHandlerRootView style={{flex: 1}}>
                <BottomSheetModalProvider>
                  <Navigation />
                </BottomSheetModalProvider>
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </PersistQueryClientProvider>
  );
}

export default App;
