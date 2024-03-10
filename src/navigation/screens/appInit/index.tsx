import React from 'react';
import useSession from '@hooks/useSession';
import Loader from '@components/loader';

const AppInit = () => {
  useSession();

  return <Loader />;
};

export default AppInit;
