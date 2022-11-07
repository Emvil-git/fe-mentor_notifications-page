import { CircleFill } from "react-bootstrap-icons";

const NotifCard = ({notifData, isUnread, unreadArr, setUnreadArr}) => {
    const handleClick = () => {
        console.log(notifData.id)
        const cUnread = [...unreadArr]
        const index = cUnread.indexOf(notifData.id)
        if (index > -1) {
            cUnread.splice(index, 1)
            console.log(cUnread);
            setUnreadArr(cUnread)
        }
    }

    const handleBG = () => {
        if (isUnread) return "nt-card"
        return "nt-card nt-card--read"
    }

    const byNotifType = () => {

        const type = notifData.type;
        const name = notifData.user.name;
        const data = notifData.data;
        const time = notifData.time;

        switch(notifData.type) {
            case 'post':
                return(
                    <div className="nt-card__text-sect">
                            <span>
                                <a className="nt-card__name">{name}</a> reacted to your recent post <a id="post-title">{data.postTitle}</a>
                                {isUnread && <CircleFill className="nt-card__indicator"/>}
                            </span>
                        <span className="nt-card__time">{`${time} ago`}</span>
                    </div>
                )
            case 'group':
                return(
                    <section className="nt-card__text-sect">
                        <span>
                            <a className="nt-card__name">{name}</a> has joined your group <a id="group-name">{data.groupName}</a>
                            {isUnread && <CircleFill className="nt-card__indicator"/>}
                        </span>
                        <span className="nt-card__time">{`${time} ago`}</span>
                    </section>
                )
            case 'follow':
                return(
                    <section className="nt-card__text-sect">
                        <span>
                            <a className="nt-card__name">{name}</a> followed you
                            {isUnread && <CircleFill className="nt-card__indicator"/>}
                        </span>
                        <span className="nt-card__time">{`${time} ago`}</span>
                    </section>
                    
                )
            case 'img-comment':
                return(
                    <section className="content-sect--img">
                        <section className="nt-card__text-sect">
                        <span>
                            <a className="nt-card__name">{name}</a> commented on your picture
                            {isUnread && <CircleFill className="nt-card__indicator"/>}
                        </span>
                        <span className="nt-card__time">{`${time} ago`}</span>
                        </section>
                        <img src={data.imgUrl} alt="" className="nt-card__img"/>
                    </section>
                )
            case 'message':
                return(
                    <section>
                        <section className="nt-card__text-sect">
                            <span>
                                <a className="nt-card__name">{name}</a> sent you a private message
                                {isUnread && <CircleFill className="nt-card__indicator"/>}
                            </span>
                            <span className="nt-card__time">{`${time} ago`}</span>
                        </section>

                        <p className="nt-card__message">{data.message}</p>
                    </section>
                )
        }
    }

    return (
        <div onClick={handleClick} className={handleBG()}>
            <img src={notifData.user.imgUrl} alt="" className="nt-card__pfp" />
            {byNotifType()}
        </div>
    ) 
}

export default NotifCard;