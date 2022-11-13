import { ShopItem, ShopTypes } from "../models/Models.js";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class shopItemController {
	async create(req, res) {
		try {
			let { title, price, shopTypeId, description } = req.body;

			if (!title || !price || !description) {
				return res.status(400).json({
					message: "Please field all",
				});
			}

			if (!shopTypeId) {
				return res.status(400).json({
					message: "Please select Type",
				});
			}

			if (!req.files.image) {
				return res.status(400).json({
					message: "Pleasa import image",
				});
			}

			const { image } = req.files;
			let fileName = uuidv4() + ".jpg";
			image.mv(
				path.resolve(__dirname, "..", "assets/static/image", fileName)
			);

			const shopItem = await ShopItem.create({
				title,
				price,
				shopTypeId,
				description,
				img: fileName,
			});

			await ShopTypes.findOneAndUpdate(shopTypeId, {
				$push: { shopItemId: shopItem },
			});

			return res
				.status(200)
				.json({ shopItem, message: "Shop item created" });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Server error" });
		}
	}

	async getAll(req, res) {
		try {
			let { shopTypeId, limit, page } = req.query;
			page = page || 1;
			limit = limit || 9;
			let offset = page * limit - limit;

			let shopItems;
			if (shopTypeId) {
				shopItems = await ShopItem.find({ shopTypeId })
					.limit(limit)
					.skip(offset);
			} else {
				shopItems = await ShopItem.find({}).limit(limit).skip(offset);
			}

			return res.status(200).json({ shopItems, message: "All worked" });
		} catch (e) {
			res.status(500).json({ message: "Server error" });
		}
	}

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const shopItem = await ShopItem.findOne({ _id: id });
			console.log(id, shopItem);
			if (!shopItem) {
				return res.status(404).json({ message: "Server error" });
			}

			return res.status(200).json(shopItem);
		} catch (e) {
			res.status(500).json({ message: "Server error" });
		}
	}

	async remove(req, res) {
		try {
			const id = req.params.id;

			const shopItem = await ShopItem.findOneAndDelete({ _id: id });

			const { shopTypeId } = shopItem;

			if (!shopItem)
				return res.status(404).json({ message: "Can't find post" });

			await ShopTypes.findByIdAndUpdate(shopTypeId, {
				$pull: { shopItemId: id },
			});

			return res.status(200).json({ message: "Post deleted" });
		} catch (e) {
			res.status(500).json({ message: "Server error" });
		}
	}
}

export default new shopItemController();
