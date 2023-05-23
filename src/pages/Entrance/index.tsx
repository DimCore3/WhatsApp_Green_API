import { useEffect } from "react";
import { Download } from "shared/ui";
import { getAccountStatus } from "shared/api";

const Entrance = ({ setAuthStatus }: { setAuthStatus: Function }) => {
    useEffect(() => {
        getAccountStatus().then(result => setAuthStatus(result));
    })

    return (
        <div className="entrance_page">
            <Download />
        </div>
    );
}

export default Entrance;