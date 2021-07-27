import Avatar from './Avatar'
import { data } from './data/Data'

import './AvatarContainer.css'


  const AvatarContainer = () => {
      return (
          <div className="avatarCont">
            {data.map((simpson) => {
                return <Avatar firstName={simpson.firstName} image={simpson.image} secondName={simpson.secondName} link={simpson.link}/>
            })}
          </div>
      )
  }

  export default AvatarContainer;