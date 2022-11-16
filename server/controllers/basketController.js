import { Basket, Decor, ShopItem, User } from "../models/Models.js";

class basketConroller {
	async addDecorItem(req, res) {
		try {
			const { _id } = req.body;
			console.log(_id);

			if (_id) {
				const decor = await Decor.findById(_id);
				const basket = await Basket.findOneAndUpdate(req.userId, {
					$push: { basketDecorId: decor },
				});

				return res
					.status(200)
					.json({ decor, message: "Item add in your basket" });
			}

			return res.json({ messaga: "Item not found" });
		} catch (e) {
			console.log(e);
			res.status(500).json({
				messaga: "Server error",
			});
		}
	}
	async addShopItem(req, res) {
		try {
			const { _id } = req.body;

			if (_id) {
				const shopItem = await ShopItem.findOne(_id);
				const basket = await Basket.findOneAndUpdate(req.userId, {
					$push: { basketShopItemsId: shopItem },
				});

				return res
					.status(200)
					.json({ shopItem, message: "Item add in your basket" });
			}

			return res.json({ messaga: "Item not found" });
		} catch (e) {
			console.log(e);
			res.status(500).json({
				messaga: "Server error",
			});
		}
	}

	async getBasket(req, res) {
		const basket = await Basket.findOne({ userId: req.userId });

		const list = await Promise.all(
			basket.basketDecorId.map((decor) => {
				return Decor.findById(decor._id);
			}),
			basket.basketShopItemsId.map((shop) => {
				return ShopItem.findById(shop._id);
			})
		);

		return res.json(list);
	}

	async removeBasketItem(req, res) {}
}

export default new basketConroller();
