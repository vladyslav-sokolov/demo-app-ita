const { Router } = require("express")
const router = Router()

router.get("/status", (req, res) => {
    return res.status(200).send({ status: "OK" })
})

module.exports = router
