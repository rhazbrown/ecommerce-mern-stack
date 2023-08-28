const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51BIbqBJAcgrGFRRryVwp2BHGF5LAqMbQMZ8uwQ7IlAzFAyglVQhhyI0kteYfhXpD4dSlflubKVBF7RofWJ4nW3GJ00uXF2Rk9W"
);
//const KEY = process.env.STRIPE_KEY;
//const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
