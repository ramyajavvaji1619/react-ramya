import './index.css';

const Contact = (props)=>{
    const {contactDetails, isToggle} = props;

   console.log(contactDetails);
   const {id, name, isFavorite, mobileNo} = contactDetails;

    const starImage = isFavorite ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png':
                                    'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

    const onToggle=()=>{
        isToggle(id)
    }

    return(
        <li className="table-row">
        <div className="table-cell name-column">
             <p>{name}</p>
        </div>
        <hr className="seperator"/>
        <div className="table-cell mobile-no-column">
            <p className="mobile-no-value">{mobileNo}</p>
            <button 
            type="button"
            className="favorite-icon-container"
            onClick={onToggle}
            >
            <img src={starImage} alt={name} className="favorite-icon"/>

            </button>
        </div>            
        </li>
    )
}

export default Contact