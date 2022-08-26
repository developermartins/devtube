import { configureStore } from "@reduxjs/toolkit";

import useReducer from "./userSlice";
import videoReducer from "./videoSlice";

export default configureStore({
    reducer: {
      user: useReducer,
      video: videoReducer,
    },
});
