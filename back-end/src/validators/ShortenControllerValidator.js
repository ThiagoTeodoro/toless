//Imports
const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {

    /**
     * Validator to validate a request POST in /shorten
     */
    validateShortenPost(){

        return celebrate({
            [Segments.BODY] : Joi.object().keys({
                originalUrl: Joi.string().uri().required().min(1),
            }),
        });
    }

}