import React, { Profiler } from 'react';
import Directory from '../../components/directory/index';
import { HomePageContainer } from './index.styles';


const HomePage = () => {
    return (
        <HomePageContainer >
            <Profiler id="Directory" onRender={(id,phase,actualDuration) => {
                console.log(id,phase, actualDuration, "profiler")
            }}>
                <Directory />
            </Profiler>
        </HomePageContainer>
    )
}

export default HomePage;
