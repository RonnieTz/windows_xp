import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import { RootState, AppDispatch } from '../redux/store';

export const useRedux = () => {
  const useReduxDispatch = () => useDispatch<AppDispatch>();
  const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
  return { useReduxSelector, useReduxDispatch };
};
