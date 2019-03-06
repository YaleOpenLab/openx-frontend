import React from 'react';
import Header from '../../components/Layout/Header/Header';
import Footer from '../../components/Layout/Footer/Footer';

const layoutHoc = props => {
    return (
        <React.Fragment>
            <Header />
                {props.children}
            <Footer />
        </React.Fragment>
    )
}

export default layoutHoc;