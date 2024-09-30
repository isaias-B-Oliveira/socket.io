const model = require("../models/messageModel");

const addMessage = async (message) => {
    await model.addMessage(message);
};

const getMessageByForeignKey = async (id) => {
    const msg = await model.getMessageByForeignKey(id);
    return msg;
};

const deleteMessage = async (messageId) => {
    await model.deleteMessage(messageId);
};

module.exports = { addMessage, getMessageByForeignKey, deleteMessage };
