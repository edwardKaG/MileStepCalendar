const dateModel = require('../models/dateModel');
const UserDto = require('../dtos/userDto');
const ApiError = require('../error/ApiError');

class calendarService {
    async create(id, name, description, date) {
        const event = await dateModel.create({name, description, date});
        return event;
    }

    async getEvents() {
        const events = await dateModel.findAll();
        events.json();
    }

    async delete(id) {
        await dateModel.findOneAndDelete({id});
    }
}

export default calendarService;