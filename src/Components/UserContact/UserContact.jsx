import './UserContact.css'

function UserContact(props) {
    return (
    <div className="UserContact">

    <img src={props.imgUrl} alt="Image Not Found"/>

    <span> {props.name} </span>

</div>
    );
}
export default UserContact;