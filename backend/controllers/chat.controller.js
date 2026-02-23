export const sendMessage = (req, res) => {
  const { chatId, senderId, content } = req.body;   
    try {
        // Here you would typically save the message to the database
        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Error sending message' });
    }
};

export default {
  sendMessage
};