import { IconAction } from 'shared/ui';
import classes from './index.module.scss';

const AddContactModule = ({ setShowAddContactModule }: { setShowAddContactModule: Function }) => {
    return (
        <div>
            <div className={`${classes.module_header}`}>
                <IconAction action={() => setShowAddContactModule(false)}>
                    <div className={classes.back_icon} />
                </IconAction>
                <h1>Add contact</h1>
            </div>
            <div className={`${classes.module_body}`}>
                CONTACTS body
            </div>
        </div>
    );
}

export default AddContactModule;