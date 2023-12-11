async function register ({
  registerHook,
  registerSetting,
  settingsManager,
  videoPrivacyManager
}) {

  videoPrivacyManager.deleteConstant(1)
  videoPrivacyManager.deleteConstant(2)
  videoPrivacyManager.deleteConstant(3)
  videoPrivacyManager.deleteConstant(5)
}

async function unregister () {
  return
}

module.exports = {
  register,
  unregister
}
