import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div >
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div>
                        <label className="btn btn-danger" htmlFor="video-search">Video Search</label>
                        <input className="btn btn-danger" onChange={this.handleChange} name='video-search' type="text" placeholder="Search Video" value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Searchbar;