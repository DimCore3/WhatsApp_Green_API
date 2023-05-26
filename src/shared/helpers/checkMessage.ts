function checkMessage(notification: any) {
    let phone = Number(notification.body.senderData.sender.replace('@c.us', ''));
    let message = notification.body.messageData.textMessageData.textMessage;
    return [phone, message]
}

export default checkMessage