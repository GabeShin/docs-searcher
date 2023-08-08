import { useEffect, useRef } from 'react';
import { useQuery } from 'react-query';

import Head from 'next/head';

import { useCreateReducer } from '@/hooks/useCreateReducer';

import { Chat } from '@/components/Chat/Chat';

import HomeContext from './home.context';
import { HomeInitialState, initialState } from './home.state';

interface Props {}

const Home = ({}: Props) => {
  const contextValue = useCreateReducer<HomeInitialState>({
    initialState,
  });

  const {
    state: { lightMode },
    dispatch,
  } = contextValue;

  const { data, error, refetch } = useQuery({});

  // ON LOAD --------------------------------------------
  useEffect(() => {}, []);

  return (
    <HomeContext.Provider
      value={{
        ...contextValue,
      }}
    >
      <Head>
        <title>Chatbot UI</title>
        <meta name="description" content="ChatGPT but better." />
        <meta
          name="viewport"
          content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`flex h-screen w-screen flex-col text-sm text-white dark:text-white ${lightMode}`}
      >
        <Chat />
      </main>
    </HomeContext.Provider>
  );
};
export default Home;
