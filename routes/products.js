var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send([
    {
      "id": "d290f1ee-6c54-4b01-90e6-d701748f0851",
      "name": "Notepad",
      "releaseDate": {},
      "manufacturer": {
        "name": "store",
        "homePage": "https://www.store.in",
        "phone": "432-434-4324"
      },
      "relatedProducts": ["32kldas-6c54-4b01-90e6-d701748f0851"],
      "stock": {
        "qty": 12
      }
    }
  ]);
});

module.exports = router;
