import { IconProfile } from 'shared/ui';
import classes from './index.module.scss';

const Messages = () => {
    return (
        <div className={classes.chat_messages}>
            <div className='messenger_header'>
                <div>
                    <IconProfile />
                </div>
                <div>
                    some icons
                </div>
            </div>
            <div className={`${classes.body_messages} messenger_body`}>
                Messages body
            </div>
        </div>
    );
}

export default Messages;