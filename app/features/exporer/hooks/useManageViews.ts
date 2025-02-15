import { useRedux } from '@/app/hooks/useRedux';
import {
  setView,
  setAddressBar,
  setStandardBar,
} from '@/app/redux/slices/folderSlice';

export const useManageViews = () => {
  const { useReduxDispatch, useReduxSelector } = useRedux();
  const { view, addressBar, standartBar } = useReduxSelector(
    (state) => state.folder.folderOptions
  );

  const dispatch = useReduxDispatch();

  const setViewAction = (view: string) => {
    dispatch(setView(view));
  };

  const toggleStandartBar = () => {
    dispatch(setStandardBar(!standartBar));
  };

  const toggleAddressBar = () => {
    dispatch(setAddressBar(!addressBar));
  };

  return {
    setView: setViewAction,
    view,
    addressBar,
    standartBar,
    toggleStandartBar,
    toggleAddressBar,
  };
};
