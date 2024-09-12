const connection = require("../models/connection");

const getMessageByForeignKey = async (channelId) => {
    const query = "SELECT * FROM chatTime.menssage WHERE chanel_id = ?";
    const [rows] = await connection.execute(query, [channelId]);
    return rows;
};

const updateMessage = async (id, message) => {
    const sql = "UPDATE chatTime.menssage SET message = ? WHERE id = ?";

    // Certifique-se de que `message` e `id` estão definidos
    if (!message || !id) {
        throw new Error("Message or ID is missing");
    }

    // Execute a query apenas com os valores definidos
    await connection.execute(sql, [message, id]);
};

module.exports = {
    updateMessage,
    getMessageByForeignKey,
};
