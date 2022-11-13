import { Decor, Type } from "../models/Models.js";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class decorController {
	async create(req, res) {
		try {
			let { title, price, typesId, description } = req.body;
			if (!title || !price || !description) {
				return res.status(400).json({
					message: "Please field all",
				});
			}

			if (!typesId) {
				return res.status(400).json({
					message: "Please select Type",
				});
			}

			if (!req.files) {
				return res.status(400).json({
					message: "Please import image",
				});
			}

			const { image } = req.files;

			let fileName = uuidv4() + ".jpg";
			image.mv(
				path.resolve(__dirname, "..", "assets/static/image", fileName)
			);

			const decor = await Decor.create({
				title,
				price,
				typesId,
				description,
				img: fileName,
			});

			await Type.findByIdAndUpdate(typesId, {
				$push: { decorId: decor._id },
			});

			return res.status(201).json({ decor, message: "Decor Create" });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: "Error create" });
		}
	}

	async getAll(req, res) {
		let { typesId, limit, page } = req.query;
		page = page || 1;
		limit = limit || 9;
		let offset = page * limit - limit;

		let decors;
		if (typesId) {
			decors = await Decor.find({ typesId }).limit(limit).skip(offset);
		} else {
			decors = await Decor.find({}).limit(limit).skip(offset);
		}

		return res.json(decors);
	}

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const decor = await Decor.findOne({ _id: id });
			return res.json(decor);
		} catch (e) {
			console.log(e);
		}
	}
}

export default new decorController();
