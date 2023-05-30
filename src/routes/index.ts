import { Router } from "express";
const router = Router()

import * as page from "../controllers/pagens"
import * as search from "../controllers/search"

router.get("/", page.home)
router.get("/dogs", page.dogs)
router.get("/cats", page.cats)
router.get("/fishes", page.fishes)

router.get("/search", search.search)

export default router;