type Props = {
    name: string,
    storageKey: string,
}

const SessionStorageInput = ({name, storageKey}: Props) => {
    return (
        <>
            <label htmlFor={`${name}_input`}>{name}</label>
            <input
                type="text"
                name={`${name}_input`}
                onChange={e => sessionStorage.setItem(storageKey, e.target.value)}
            />
        </>
    );
}

export default SessionStorageInput;