import React from 'react'
import './header.css'
import logo from '../../../acset/img/logo.png'
import search from '../../../acset/img/search.svg'
import home from '../../../acset/img/home.svg'
import watch from '../../../acset/img/watch.svg'
import market from '../../../acset/img/market.svg'
import group from '../../../acset/img/group.svg'
import game from '../../../acset/img/game.svg'
import account from '../../../acset/img/account.svg'
import notifilecation from '../../../acset/img/notifilecation.svg'
import message from '../../../acset/img/message.svg'
import menu from '../../../acset/img/menu1.svg'
import user from '../../../acset/img/usersvg.svg'

const Header = () => {
    return (
        <div className="header__facebook">
            <div className="row align-items-center header__items_facebook">
                <div className="col-4 align-items-center">
                    <img src={logo} alt="logo" className="header__logo"/>
                    <span className="header__input_search">
                        <img src={search} alt="search" className="header__search" />
                        <input type="text" placeholder="Tìm kiếm trên Facebook"/>
                    </span>
                </div>
                <div className="col-4 text-center content">
                    <img src={home} alt="Home" className="content__icon"/>
                    <img src={watch} alt="Home" className="content__icon"/>
                    <img src={market} alt="Home" className="content__icon"/>
                    <img src={group} alt="Home" className="content__icon"/>
                    <img src={game} alt="Home" className="content__icon"/>
                </div>
                <div className="col-4">
                    <div className="content__left">
                        <div className="content__left-user">
                            <img src={user} alt="" style={{width: '20px', height: '20px', margin: '12px'}}/>
                            <span>Hùng</span>
                        </div>
                        <div className="content__left-item">
                            <img src={menu} alt="" className="content__left__icon"/>
                        </div>
                        <div className="content__left-item">
                            <img src={message} alt="" className="content__left__icon"/>
                        </div>
                        <div className="content__left-item">
                            <img src={notifilecation} alt="" className="content__left__icon"/>
                        </div>
                        <div className="content__left-item">
                            <img src={account} alt="" className="content__left__icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
