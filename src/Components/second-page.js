import React, { Component} from 'react';

class SecondPage extends Component {

    goToFirstPage  = () => {
        this.props.history.push( '/')
    }

    goToThridtPage = ()  => {
        this.props.history.push('/third')
    }
    render() {
        console.log(this.props);
        return (
            <div>
                It's Working for second page

                <button onClick={this.goToFirstPage}>First Page</button>
                <button onClick={this.goToThridtPage}>Third Page</button>
            </div>
        );
    }
}

export default SecondPage;