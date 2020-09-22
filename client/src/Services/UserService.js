import { config } from "../config";
import axios from "axios";
// Fetch requests for backend end-points
export default {

    getAllUser : async () => {
        try {
            const res = await axios(`/api/user`)
            return res.json();
        }
        catch (err) {
            console.log(`Error - UserService.js - getAllUser() - ${err}`)
        }
    }
}