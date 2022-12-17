import { Router } from "express"
import { deleteAnime, getAnime, getOneAnime, newAnime, updateAnime } from "../controllers/anime.controllers.js"

const router = Router()

router.get('/api/anime',getAnime)
router.get('/api/anime/:id',getOneAnime)
router.post('api/anime/new',newAnime)
router.put('api/anime/update/:id',updateAnime)
router.delete('api/anime/delete/:id',deleteAnime)

export default router
