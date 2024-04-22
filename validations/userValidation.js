const Joi = require('joi');

const registerSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).required(),
    phone: Joi.string().pattern(new RegExp('^\\+?[0-9]{9,14}$')).required(),
    role: Joi.string().valid('Student', 'Staff', 'Admin').required(),
});

const loginSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(6).required(),

})

<<<<<<< HEAD
module.exports = { registerSchema, loginSchema};
=======
const roomRequestSchema = Joi.object({
    roomId: Joi.number().integer().required()
})



module.exports = { registerSchema, loginSchema, roomRequestSchema};
>>>>>>> hasanboy
