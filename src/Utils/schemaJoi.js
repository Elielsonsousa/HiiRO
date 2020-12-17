const Joi = require("@hapi/joi");

const signUp = Joi.object({   

    name: Joi.string()
        .pattern(/^[a-zA-Z\s.]{2,80}$/)
        .required(),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'com.br'] } })
        .required(),
        
    password: Joi.string()
        .pattern(/^[a-zA-Z0-9?!@#$%"&*()_-]{1,32}$/)
        .required(),
});

const Update = Joi.object({

    name: Joi.string()
        .optional()
        .regex(/^[a-zA-Z\s.]{2,80}$/),

    email: Joi.string()
        .optional()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .optional()
        .regex(/^[a-zA-Z0-9?!@#$%¨&*()_-]{1,32}$/),
});

module.exports = {
    signUp,
    Update,
};
