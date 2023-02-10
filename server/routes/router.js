const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root route
 * @method GET /
 */
route.get("/", services.homeRoutes);


/**
 * @description add shinobi
 * @method GET /add-shinobi
 */
route.get("/add-shinobi", services.add_shinobi);

/**
 * @description update shinobi
 * @method GET /update-shinobi
 */
route.get("/update-shinobi", services.update_shinobi);

// API
route.post('/api/shinobilist',controller.create)
route.get('/api/shinobilist',controller.find)
route.put('/api/shinobilist/:id',controller.update)
route.delete('/api/shinobilist/:id',controller.delete)


module.exports = route