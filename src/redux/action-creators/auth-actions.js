import { uiActions } from "../reducers/ui-reducer";
import { setItemOnStorage, removeItemFromStorage } from "../../utils/storage";
import constants from "../../utils/constants";
import { authActions } from "../reducers/auth";
import { apiGetUser, apiLogin } from "../api/auth-api";

export const login = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(uiActions.start());
    try {
      const data = await apiLogin({ email, password });
      if (!data.success) {
        dispatch(uiActions.failed());
      } else {
        const id = data.result.id;
        dispatch(uiActions.success());
        setItemOnStorage({ key: constants.TOKEN, value: data.token });
        setItemOnStorage({ key: constants.USER_ID, value: id });
        dispatch(
          authActions.user({
            ...data.result,
            user_id: id,
          })
        );
      }
    } catch (error) {
      dispatch(uiActions.failed(error.message));
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch(uiActions.start());
    removeItemFromStorage({ key: constants.TOKEN });
    removeItemFromStorage({ key: constants.USER_ID });
    dispatch(uiActions.success());
    dispatch(authActions.user(undefined));
  };
};
