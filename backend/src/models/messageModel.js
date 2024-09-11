const connection = require("./connection");

const getMessageByForeignKey = async (id) => {
    const sql = `
SELECT message, data_time, C.name as UserName, B.name as channelName, description, last_name 
FROM chatTime.menssage as A INNER JOIN chatTime.chanel as B
INNER JOIN chatTime.user as C on A.chanel_id = B.id AND A.chanel_id=?;
`;
    const [msgs] = await connection.execute(sql, [id]);
    return msgs;
};

const updateMessage = async (messageId, newMessage) => {
    const sql = "UPDATE chatTime.menssage SET message = ? WHERE id = ?";
    await connection.execute(sql, [newMessage, messageId]);
};

module.exports = { getMessageByForeignKey, updateMessage };
