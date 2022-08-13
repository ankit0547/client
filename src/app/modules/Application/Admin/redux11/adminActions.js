import { commonTypes } from "./commonTypes";

export const appLoadedSuccessfully = () => ({
  type: commonTypes.APPLICATION_LOADED,
  data: { isLoaded: true },
});

export const appFailedToLoad = () => ({
  type: commonTypes.APPLICATION_LOADED,
  data: { isLoaded: false },
});
