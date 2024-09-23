const model = require("../models/messageModel");

// const getMessageByForeignKey = async (channelId) => {
//     const query = "SELECT * FROM chatTime.menssage WHERE chanel_id = ?";
//     const [rows] = await model.execute(query, [channelId]);
//     return rows;
// };
const getMessageByForeignKey = async (channelId) => {
    const rows = await model.getMessageByForeignKey(channelId);
    return rows;
};

const addMessage = async (message) => {
    await model.addMessage(message);
};

const updateMessage = async (id, message) => {
    // Defina a query SQL corretamente
    const sql = "UPDATE chatTime.menssage SET message = ? WHERE id = ?";
    await model.updateMessage(id, message, sql); // Passe a query para o modelo
};

module.exports = {
    updateMessage,
    getMessageByForeignKey,
    addMessage,
};
