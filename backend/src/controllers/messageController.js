const messageService = require("../services/messageService");

const updateMessage = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { message } = req.body;

        if (!id || !message) {
            return res
                .status(400)
                .json({ message: "ID and message are required" });
        }

        const result = await messageService.updateMessage(id, message);

        res.status(200).json({
            message: "Message updated successfully",
            result,
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    updateMessage,
};
