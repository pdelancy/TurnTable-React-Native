const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/users', (req, res) => {
    res.json({ success: true });
});

router.get('/', (req, res)=>[
    res.send("HEROKU IS WORKING! LET'S GET TURNT!")
]);

module.exports = router;
