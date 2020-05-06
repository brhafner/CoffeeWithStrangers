import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class GroupShow extends React.Component {
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount() {
        this.props.requestGroup(this.props.group.id)
        // this.props.requestGroup(this.props.ownProps.match.params.groupId)
    }

    handleDelete(groupId){
        this.props.deleteGroup(groupId)
            .then(() => {
                this.props.history.push('/groups')
            })
    };


    render() {
        
        let { group, currentUserId } = this.props;

        if (!group) {
            return null;
        }

        let organizerTools = <div className="item-show-manag-container">
            <Link className="item-show-manage" to={`/groups/${group.id}/edit`}>Edit Group Info</Link><br/>
            <button className="item-show-manage" onClick={() => this.handleDelete(group.id)}>Delete This Group</button>
        </div>

        return (
            <div className="item-show">
                <Link to='/groups'>Return to Group Index Page</Link>
                <div className="item-show-head">
                    <img src={group.photoUrl} alt="template_img" className="item-profile-picture"></img>
                    <div className="top-line-info">
                        <p className="item-title">{this.props.group.title}</p>
                        <p>324 Members</p>
                        <p>Organized by: {this.props.group.organizerId}</p>
                        {group.organizerId === currentUserId ? organizerTools : ""}
                    </div>
                </div>
                <ul className="second-nav">
                    <li>About</li>
                    <li>Events</li>
                    <li>Members</li>
                    <li>Photos</li>
                    <li><button className="session-submit">Join Group</button></li>
                </ul>
                <div className="item-show-content">
                    
                    <div className="left">
                        <p className="show-about-title">What we're about</p>
                        {/* Insert Below: */}
                        {/* {this.props.group.about} */}
                        <p className="show-about-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='right'>
                        <p className="show-about-title">Organizers</p>
                        <div>
                            <p>Organizer_PHOTO</p>
                            <p>Organizer_FirstName</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default GroupShow;