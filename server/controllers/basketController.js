import { Basket, Decor, User } from "../models/Models.js";

class basketConroller {
	async addItem(req, res) {
		try {
			const { typesId, shopTypeId } = req.body;

			if (typesId) {
				const decor = await Decor.findOne(typesId);
				const basket = await Basket.findOneAndUpdate(req.userId);
			}
		} catch (e) {
			console.log(e);
			res.status(500).json({
				messaga: "Server error",
			});
		}
	}
}

export default new basketConroller();
