import { IconAction, PhoneInput } from 'shared/ui';
import classes from './index.module.scss';
import { Props } from './model';

const AddContactModule = ({ allContacts, setAllContacts, setShowAddContactModule }: Props) => {

    function addNewContactToArray(newPhone: string) {
        let newArray = [...allContacts];
        for (let index in allContacts) {
            if (allContacts[index].phone === newPhone) {
                alert (' Данный номер уже есть в списке.');
                return;
            }
        }
        newArray.push({
            phone: newPhone,
            messages: [],
        });
        setAllContacts(newArray);
        setShowAddContactModule(false)
    };

    return (
        <div>
            <div className={`${classes.module_header}`}>
                <IconAction action={() => setShowAddContactModule(false)}>
                    <div className={classes.back_icon} />
                </IconAction>
                <h1>Add contact</h1>
            </div>
            <div className={`${classes.module_body}`}>
                <PhoneInput addNewContactToArray={addNewContactToArray}/>
            </div>
        </div>
    );
}

export default AddContactModule;