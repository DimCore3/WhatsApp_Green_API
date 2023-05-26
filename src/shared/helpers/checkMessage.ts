function checkMessage(notification: any) {
    let phone = Number(notification.body.senderData.sender.replace('@c.us', ''));
    let message;
    if (notification.body.messageData.typeMessage === 'textMessage') {
        message = notification.body.messageData.textMessageData.textMessage;
    } else {
        message = '*ФОРМАТ СООБЩЕНИЯ НЕ ПОДДЕРЖИВАЕТСЯ*'
    }
    return [phone, message]
}

export default checkMessage