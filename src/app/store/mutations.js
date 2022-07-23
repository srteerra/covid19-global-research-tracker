export const WINDOW_WIDTH = (state) => {
  state.windowWidth = window.innerWidth;
};

export const SHOW_TRIAL = (state) => {
  state.TrialModalView = !state.TrialModalView;
  state.showingModal = !state.showingModal;
};

export const SHOW_REGISTER_TRIAL = (state) => {
  state.RegisterTrialView = !state.RegisterTrialView;
  state.showingModal = !state.showingModal;
};
