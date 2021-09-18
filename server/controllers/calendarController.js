import {validationResult} from "express-validator";
import calendarService from "../service/calendarService";

const ApiError = require('../error/ApiError');

class CalendarController {

    async create(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.badRequest('Ошибка при валидации', errors.array()))
            }
            const event = await calendarService.create(req.name, req.description, req.date);
            return res.json(event);
        } catch (e) {
            next(e);
        }
    };

    async getEvents(req, res, next) {
        const events = await calendarService.getEvents();
    };

    async delete(req, res, next) {
      await calendarService.delete(req.id);
    };
}

module.exports = new CalendarController();