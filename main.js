async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  videoPrivacyManager
}) {

  videoPrivacyManager.deleteConstant(1) //Public
  videoPrivacyManager.deleteConstant(2) //Unlisted
  videoPrivacyManager.deleteConstant(3) //Private
  videoPrivacyManager.deleteConstant(5) //Password protected - Added in 6.0.3.
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
};
