import './Avatar.css'

const Avatar = ({firstName, image, link,}) => {
  return (
    <div className="avatar">
      <a target="_blank" href={link} rel="noreferrer">
        <img src={image} alt="" />
      </a>
      <h3>{firstName}</h3>
    </div>
   )};
   
   export default Avatar;