export const actions = {
  async showTrialModal(context) {
    context.commit("SHOW_TRIAL");
  },
  async showRegisterTrial(context) {
    context.commit("SHOW_REGISTER_TRIAL");
  },
};
