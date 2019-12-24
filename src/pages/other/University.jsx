import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { HeaderWarp } from './styledOther'
class University extends Component {
    hindleClick = () => {
        return this.props.history.push(`/home/study`);
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <HeaderWarp>

                    <div className="header">

                        <div className="img" onClick={this.hindleClick}>
                            <img src="https://image.hongbeibang.com/FoTuxKG5pqYKuAsT8BjrflkAxEpj?48X48&imageView2/1/w/48/h/48" alt="" />
                        </div>
                    </div>
                    <div>
                        还没写...
                </div>
                </HeaderWarp>

            </div>
        );
    }
}

export default withRouter(University);