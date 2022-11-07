const NotifCard = ({notifData}) => {

    console.log(notifData)

    const byNotifType = () => {
        switch(notifData.type) {
            case 'post':
                return(
                    <section>
                        post
                    </section>
                )
            case 'group':
                return(
                    <section>group</section>
                )
            case 'follow':
                return(
                    <section>follow</section>
                )
            case 'img-comment':
                return(
                    <section>img-comment</section>
                )
            case 'message':
                return(
                    <section>message</section>
                )
        }
    }

    return (
        <div className="nt-card">
            <img src={notifData.user.imgUrl} alt="" />
            {byNotifType()}
        </div>
    ) 
}

export default NotifCard;