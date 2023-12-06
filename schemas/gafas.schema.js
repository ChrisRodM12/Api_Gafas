const Joi = require('joi');

const id = Joi.number()
const marca = Joi.string().min(5).max(255)
const forma = Joi.string().min(5).max(255)
const calibre = Joi.string().min(5).max(255)
const genero = Joi.string().min(5).max(255)
const color = Joi.string().min(5).max(255)
const precio = Joi.number()

const creategafasSchema = Joi.object({
    marca: marca.required(),
    forma: forma.required(),
    calibre: calibre.required(),
    genero: genero.required(),
    color: color.required(),
    precio: precio.required(),
});

const updategafasSchema = Joi.object({
    marca: marca.optional(),
    forma: forma.optional(),
    calibre: calibre.optional(),
    genero: genero.optional(),
    color: color.optional(),
    precio: precio.optional(),
});

const getgafasSchema = Joi.object({
    id: id.required()
});

module.exports = {
    creategafasSchema,
    updategafasSchema,
    getgafasSchema
}

