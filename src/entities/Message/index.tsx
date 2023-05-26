import classes from './index.module.scss';

type Props = {
    type: 'in' | 'out',
    text: string,
}

const Message = ({ type, text }: Props) => {
    return (
        <div className={type === 'in' ? classes.message_in : classes.message_out}>
            <div className={classes.message}>
                <p>
                    {text} 
                </p>
            </div>
        </div>
    );
}

export default Message;