import { Router } from "express"
const router = Router()
import createLogger from "./utils/logger"
const logger = createLogger()

router.post("/logs", (req, res) => {
  if (req.body.message) {
    logger.fatal(req.body.message)
    return res.status(200).send({ message: req.body.message })
  } else {
    return res.status(400).send({ message: "No message provided" })
  }
})

export default router
