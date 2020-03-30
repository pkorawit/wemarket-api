const UserMail = require('@src/module/auth/mail/userMail').getInstance()

module.exports = {
  resetPasswordMail: UserMail.resetPassword,
  verifyRequestMail: UserMail.verifyRequest,
  verifyMail: UserMail.verify
}
