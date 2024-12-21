import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/user-model";
import mongoose from "mongoose";

import {
    replaceMongoIdInArray,
    replaceMongoIdInObject,
} from "@/utils/data-util";


//contains all query that will be made on the mongo db server.

// query function to get all existing events.
//.lean() dile database theke metadata anbe na. sudhu amader schema te deya field gulo anbe. meta tokhon lage, jokhon tumi database theke data ene, abr database e kichu write korba ba modified data pathaba. jehetu ekhanae serokom kichu korchi na, sejonno meta lagche na amader. 
async function getAllEvents(query) {
    let allEvents = [];
    if (query) {
        // if query is provided, get the matching events. To search the matching events among all events on the database, we will need to use Regex. We create a regex from the query. Then, we use the regex to find the event names that match the query. On Regex creation, The second parameter "i" means case insensitive.
        const regex = new RegExp(query, "i");
        allEvents = await eventModel.find({ name: { $regex: regex } }).lean();
    } else {
        allEvents = await eventModel.find().lean();
    }
    // replace the _id with id on every entry on the array.
    return replaceMongoIdInArray(allEvents);
}

// get single event. 
async function getEventById(eventId) {
    const event = await eventModel.findById(eventId).lean();
    return replaceMongoIdInObject(event);
}

// register. We are calling userModel.create() to create a new user.
async function createUser(user) {
    return await userModel.create(user);
}

// find user by email and password
async function findUserByCredentials(credentials) {
    const user = await userModel.findOne(credentials).lean();
    if (user) {
        return replaceMongoIdInObject(user);
    }
    return null;
}

async function updateInterest(eventId, authId) {
    // ekhane eventModel.findById(eventId).lean() korbo na. karon database theke data ene, abr shei data k modify kore database e  write korle, metada gulo lagbe. Karon event.save() jokhon call korbo tokhon, shei meta data niye e request ta perform hobe. Sejonno metadata k rakha lagbe ekahane.
    const event = await eventModel.findById(eventId);

    if (event) {
        const foundUsers = event.interested_ids.find(
            (id) => id.toString() === authId
        );

        if (foundUsers) {
            event.interested_ids.pull(new mongoose.Types.ObjectId(authId));
        } else {
            event.interested_ids.push(new mongoose.Types.ObjectId(authId));
        }

        event.save();
    }
}

async function updateGoing(eventId, authId) {
    const event = await eventModel.findById(eventId);
    event.going_ids.push(new mongoose.Types.ObjectId(authId));
    event.save();
}

export {
    createUser,
    findUserByCredentials, getAllEvents,
    getEventById, updateGoing, updateInterest
};

