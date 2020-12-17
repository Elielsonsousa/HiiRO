const Joi = require("@hapi/joi");

const signUp = Joi.object({   

    name: Joi.string()
        .required()
        .pattern(/^[a-zA-Z\s.]{2,80}$/),

    email: Joi.string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'com.br'] } }),
        
    password: Joi.string()
        .required()
        .pattern(/^[a-zA-Z0-9?!@#$%"&*()_-]{1,32}$/),
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
