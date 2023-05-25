import classes from './index.module.scss';

type Props = {
    children: React.ReactNode,
    action: React.MouseEventHandler<HTMLDivElement>
}

const IconAction = ({ children, action }: Props) => {

    return (
        <div onClick={action} className={classes.icon_action}>
            {children}
        </div>
    );
}

export default IconAction;