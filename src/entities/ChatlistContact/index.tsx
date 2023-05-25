import { IconProfile } from 'shared/ui';
import classes from './index.module.scss'

const ChatlistContact = () => {
    return (
        <div className={classes.chatlist_contact}>
            <IconProfile />
            <div className={classes.contact_information}>
                <div className={classes.phone_and_data}>
                    <h2>
                        phone number
                    </h2>
                    <p>
                        data
                    </p>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur
                </p>
            </div>
        </div>
    );
}

export default ChatlistContact;