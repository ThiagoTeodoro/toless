//Imports
const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {

    /**
     * Validator to validate a request POST in /shorten
     */
    validateForwardGet(){

        return celebrate({
            [Segments.PARAMS] : Joi.object().keys({
                hash: Joi.string().required().min(7).max(7),
            }),
        });
    }

}