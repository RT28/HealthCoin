// import request from './request';

const apiMiddleware = ({ dispatch }) => next => async (action) => {
    next(action);
    return;
//   if (action.type !== Constants.API) {
//     next(action);
//     return;
//   }
//   let { url, options, success, callback, callbackParams, successParams, noInternetCallback } = action.meta;
//   const requestStyle = 'background: #2196f3; color: white;';
//   const responseStyle = 'background: #4caf50; color: white;';
//   console.log('%c================ Action ================', requestStyle);
//   console.log('%c URL:', requestStyle);
//   console.log(url);
//   console.log('%c Request:', requestStyle);
//   console.log(options);
//   console.log('%c================ Action ================', requestStyle);

//   try {
//     dispatch({ type: Constants.SHOW_LOADER, url });
//     const response = await request(url, options);
//     console.log('%c================ Response ================', responseStyle);
//     console.log('%c URL:', responseStyle);
//     console.log(url);
//     console.log('%c Request:', responseStyle);
//     console.log(options);
//     console.log('%c Data:', responseStyle);
//     console.log(response);
//     console.log('%c================ Response ================', responseStyle);
//     if (response.errorCode === 1100020 || response.errorCode === 1100014) {
//       logCrashMessage(JSON.stringify(response), `API_ERROR-${url}`);
//       await AsyncStorage.removeItem('user');
//       setUser({});
//       dispatch({ type: Constants.HIDE_LOADER, url });
//       dispatch({ type: Constants.LOGOUT, url });
//       const navRoutes = {
//           index: 0,
//           actions: [NavigationActions.navigate({ routeName: callbackParams && callbackParams.preLoginVisited ? 'Login' : 'PreLogin' })],
//         }
//       NavigationService.reset(navRoutes);
//       return;
//     }
//     if (response.ErrorNumber) {
//       logCrashMessage(JSON.stringify(response), `API_ERROR-${url}`);
//       dispatch({ type: Constants.HIDE_LOADER, url });
//       if (response.ErrorNumber === 500 && noInternetCallback) {
//         noInternetCallback(response);
//       }
//       showToast(response.Message || response.statusText || response.message || 'Some error occured');
//       return;
//     }
//     if (success) {
//       dispatch({ type: success, response, successParams });
//     }
//     if (callback) {
//       callback(response, true, callbackParams);
//     }
//     dispatch({ type: Constants.HIDE_LOADER, url });
//   } catch (error) {
//     dispatch({ type: Constants.HIDE_LOADER, url });
//     if (error) {
//       logCrashMessage(JSON.stringify(error), `CATCH_API_ERROR-${url}`);
//     }
//     if (callback) {
//       callback(error, false);
//     }
//   }
};

export default apiMiddleware;
