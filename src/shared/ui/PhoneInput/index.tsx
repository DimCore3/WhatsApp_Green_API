import { useState } from "react";
import { validatePhone } from "shared/helpers";

const PhoneInput = ({ addNewContactToArray }: { addNewContactToArray: Function }) => {
    const [value, setValue] = useState('');

    function checkAndSendPhone(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (validatePhone(value)) {
            addNewContactToArray(value);
        }
    }

    return (
        <form action="">
            <input
                onChange={e => setValue(e.target.value.replaceAll(' ',''))}
                type="text"
                placeholder="79*********"
            />
            <button onClick={checkAndSendPhone}><p>+</p></button>
        </form>
    );
}

export default PhoneInput;