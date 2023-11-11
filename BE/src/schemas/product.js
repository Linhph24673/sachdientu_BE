import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string(),
  price: Joi.number().required(),
  quantity: Joi.number(),
  description: Joi.string().required(),
  image: Joi.string(), 
  variantImages: Joi.array().items(Joi.string()), 
  category: Joi.string(), 
  createdAt: Joi.date().default(() => new Date(), "current date"), // Thêm trường ngày tạo mới và mặc định là ngày hiện tại
  updatedAt: Joi.date().default(() => new Date(), "current date"), // Thêm trường ngày cập nhật và mặc định là ngày hiện tại
});

export default productSchema;