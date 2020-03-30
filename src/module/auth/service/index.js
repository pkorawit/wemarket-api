const UserService = require('@src/module/auth/service/userService').getInstance()

module.exports = {
  verifyRequestService: UserService.verifyRequest
}
