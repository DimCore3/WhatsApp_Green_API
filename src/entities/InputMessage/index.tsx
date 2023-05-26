import { useState } from 'react';
import classes from './index.module.scss';

const InputMessage = ({ send }: { send: Function }) => {
    const [value, setValue] = useState('');

    return (
        <form className={classes.input_message}>
            <button disabled>Что-нибудь</button>
            <input
                type="text"
                placeholder='Type a message'
                onChange={e => setValue(e.target.value)}
                value={value}
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    send(value);
                    setValue('');
                }}
                disabled={value === ''}
            >
                <img src={require('./assets/send.svg').default} alt="send" />
            </button>
        </form>
    );
}

export default InputMessage;