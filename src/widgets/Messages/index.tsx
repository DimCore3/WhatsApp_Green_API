import classes from './index.module.scss';

const Messages = () => {
    return (
        <div className={classes.chat_messages}>
            <div className='messenger_header'>
                <div>
                    Messages header left
                </div>
                <div>
                    Messages header right
                </div>
            </div>
            <div className={`${classes.body_messages} messenger_body`}>
                Messages body
            </div>
        </div>
    );
}

export default Messages;