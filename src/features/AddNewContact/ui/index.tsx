import { IconAction } from "shared/ui";
import { Props } from '../model';

const AddNewContact = ({ showAddContactModule, setShowAddContactModule }: Props) => {

        
    return (
        <IconAction action={() => setShowAddContactModule(!showAddContactModule)} > <p>+</p> </IconAction>
    );
}

export default AddNewContact;