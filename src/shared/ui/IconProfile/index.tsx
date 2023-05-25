import classes from './index.module.scss';

type Props = {
    imgSrc?: string,
    alt?: string,
    action?: React.MouseEventHandler<HTMLDivElement>    // На случай расширения, когда появится возможность открыть профиль.
}

const IconProfile = ({ imgSrc = '', alt = '', action }: Props) => {
    return (
        <div className={classes.icon_profile}>
            {imgSrc !== ''
                ? <img src={imgSrc} alt={alt} />
                : <img src={require('./assets/default_user.svg').default} alt="" />
            }
        </div>
    );
}

export default IconProfile;