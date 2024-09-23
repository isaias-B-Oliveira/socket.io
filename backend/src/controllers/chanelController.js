const service = require("../services/chanelService");
const serviceSubscribe = require("../services/subscribeService");
const messageService = require("../services/messageService");
const decodeJWT = require("../utils/decodeJWT");

const getChanels = async (_req, res) => {
    const chanels = await service.getAllChenels();
    res.status(200).json({ chanels });
};

const verifySubscribe = async (req, res, next) => {
    const { authorization } = req.headers;

    const { id } = req.params;

    const user = decodeJWT(authorization);

    const idUser = user.payload.id;

    const verifySubscribe = await serviceSubscribe.getUserSubscribe({
        idUser,
        idChannel: id,
    });

    if (!verifySubscribe.length)
        return res.status(404).json({ message: "user not subscribe" });

    next();
};

const getMessagesChannel = async (req, res) => {
    const { id } = req.params;

    try {
        const allMessages = await messageService.getMessageByForeignKey(id);

        if (!allMessages || allMessages.length === 0) {
            return res
                .status(404)
                .json({ message: "No messages found for this channel" });
        }

        res.status(200).json({ messages: allMessages });
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getChanels,
    getMessagesChannel,
    verifySubscribe,
};
