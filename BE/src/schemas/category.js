import Joi from "joi";
const categorySchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  createdAt: Joi.date().default(() => new Date(), "current date"),
});

export default categorySchema;