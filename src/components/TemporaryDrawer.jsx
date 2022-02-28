import { useState } from "react";


const TemporaryDrawer = () => {
    const [state, setState] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift' )) {
            return;
        }

        setState({ ...state, [anchor]: open })
    };
}

export default TemporaryDrawer;