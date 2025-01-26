import express from 'express';
import { 
    getTvDetails,
    getTvsByCategory, 
    getTvTrailers, 
    getSimilarTvs, 
    getTrendingTv 
} from '../controllers/tv.controller.js';
const router = express.Router();


 if(!token){
            return res.status(401).json({ success: false, message: "Unauthorized - No Token Provided"});
        }

        const decoded = jwt.verify(token, ENV_VARS.JWT_SECRET);

router.get("/trending", getTrendingTv);
router.get("/:id/trailers", getTvTrailers);
router.get("/:id/details", getTvDetails);
router.get("/:id/similar", getSimilarTvs);
router.get("/:category", getTvsByCategory);

export default router;