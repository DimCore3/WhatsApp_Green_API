import classes from './index.module.scss';

const Contacts = () => {
    return (
        <div className={classes.chat_contacts}>
            <div className='messenger_header'>
                <div>
                    CONTACTS HEADER LEFT
                </div>
                <div>
                    CONTACTS HEADER Right
                </div>
            </div>
            <div className={`${classes.body_contacts} messenger_body`}>
                CONTACTS body
            </div>
        </div>
    );
}

export default Contacts;