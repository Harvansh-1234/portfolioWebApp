import React from 'react';
import logo1 from '../logo1.svg';
// React.useEffect(() => {
// document.getElementById('animateLogo')
// });

function Home() {
    return (
        <div>
            <div>

            </div>
            <div style={{ width: "200px", height: "100px" }}>
                <object data={logo1} type="image/svg+xml">svg-animation</object>
            </div>
        </div>
    );
}

export default Home;
