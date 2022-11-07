const NotifCard = ({notifData}) => {

    console.log(notifData)

    const byNotifType = () => {

        const type = notifData.type;
        const name = notifData.user.name;
        const data = notifData.data;
        const time = notifData.time;

        switch(notifData.type) {
            case 'post':
                return(
                    <section>
                        <p><a className="nt-card__name">{name}</a> reacted to your recent post <a classname="nt-card__title">{data.postTitle}</a></p>
                        <span className="nt-card__time">{`${time} ago`}</span>
                    </section>
                )
            case 'group':
                return(
                    <section>
                        <p><a className="nt-card__name">{name}</a> has joined your group <a classname="nt-card__group">{data.groupName}</a></p>
                        <span className="nt-card__time">{`${time} ago`}</span>
                    </section>
                )
            case 'follow':
                return(
                    <section>
                        <p><a className="nt-card__name">{name}</a> followed you</p>
                        <span className="nt-card__time">{`${time} ago`}</span>
                    </section>
                    
                )
            case 'img-comment':
                return(
                    <section>
                        <section>
                        <p><a className="nt-card__name">{name}</a> commented on your picture</p>
                        <span className="nt-card__time">{`${time} ago`}</span>
                        </section>
                        <img src={data.imgUrl} alt="" />
                    </section>
                )
            case 'message':
                return(
                    <section>
                        <section>
                            <p><a className="nt-card__name">{name}</a> sent you a private message</p>
                            <span className="nt-card__time">{`${time} ago`}</span>
                        </section>

                        <span>{data.message}</span>
                    </section>
                )
        }
    }

    return (
        <div className="nt-card">
            <img src={notifData.user.imgUrl} alt="" className="nt-card__pfp" />
            {byNotifType()}
        </div>
    ) 
}

export default NotifCard;