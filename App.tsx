import {darkTheme, lightTheme} from '@constants/theme';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Navigation from '@navigation';
import {persistor, store} from '@store/store';
import {createAsyncStoragePersister} from '@tanstack/query-async-storage-persister';
import {QueryClient} from '@tanstack/react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client';
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Appearance, useColorScheme} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@localization';
import {ColorSchemeName} from 'react-native/Libraries/Utilities/Appearance';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

EStyleSheet.build(lightTheme);

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
  let colorScheme = useColorScheme();
  const {i18n} = useTranslation();
  useEffect(() => {
    (async () => {
      try {
        const theme = await AsyncStorage.getItem('theme');
        if (theme && (theme === 'light' || theme === 'dark')) {
          Appearance.setColorScheme(theme);
        }
      } catch (error) {
        console.log('err', error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        EStyleSheet.build(colorScheme === 'dark' ? darkTheme : lightTheme);
        if (typeof colorScheme === 'string') {
          await AsyncStorage.setItem('theme', colorScheme);
        }
      } catch (error) {
        console.log('err', error);
      }
    })();
  }, [colorScheme]);
  useEffect(() => {
    (async () => {
      try {
        const language = await AsyncStorage.getItem('language');
        if (language) {
          await i18n.changeLanguage(language);
        }
      } catch (error) {
        console.log('err', error);
      }
    })();
  }, []);
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{persister, maxAge: Infinity}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <GestureHandlerRootView style={{flex: 1}}>
              <BottomSheetModalProvider>
                <Navigation />
              </BottomSheetModalProvider>
            </GestureHandlerRootView>
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    </PersistQueryClientProvider>
  );
}

export default App;
