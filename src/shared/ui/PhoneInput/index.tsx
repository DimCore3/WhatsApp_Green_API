import { useState } from "react";
import { ValidatePhone } from "shared/helpers";

const PhoneInput = ({ addNewContactToArray }: { addNewContactToArray: Function }) => {
    const [value, setValue] = useState('');

    function checkAndSendPhone(e: React.FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (ValidatePhone(value)) {
            addNewContactToArray(value);
        }
    }

    return (
        <form action="">
            <input
                onChange={e => setValue(e.target.value)}
                type="text"
                placeholder="79*********"
            />
            <button onClick={checkAndSendPhone}><p>+</p></button>
        </form>
    );
}

export default PhoneInput;