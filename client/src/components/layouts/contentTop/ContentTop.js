import React, { useContext }  from 'react'
import { AppContext } from '../../../conotexts/AppContext'
import './contentTop.css'
import user from '../../../acset/img/usersvg.svg'
import image from '../../../acset/img/image.svg'
import people from '../../../acset/img/people.svg'
import happy from '../../../acset/img/happy.svg'


const ContentTop = () => {

    const { setShowModal } = useContext(AppContext)

    const handleShow = () => setShowModal(true)

    return (
        <div>
            <div className="row header__content-top">
                <div className="col-12 mt-4">
                    <div className="header__top">
                        <img src={user} alt="" className="header__top-user"/>
                        <div className="header__top-alert" onClick={handleShow}>Hùng ơi, Bạn đang nghĩ gì thế?</div>
                    </div>
                    <div className="header__bottom mt-1">
                        <div onClick={handleShow}>
                            <img src={image} alt="" className="header__bottom-image" />
                            <span>Image/Video</span>
                        </div>
                        <div>
                            <img src={people} alt="" className="header__bottom-image" />
                            <span>Gắn thẻ bạn</span>
                        </div>
                        <div>
                            <img src={happy} alt="" className="header__bottom-image" />
                            <span>Cảm xúc/Hoạt động</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentTop
