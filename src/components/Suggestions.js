import '../styles/suggestions.scss';
import Profile from "./Profile";



function Suggestions(){
    return (
        <div className="suggestions">
            <div className="titleContainer">
            <div className="title">Suggestions For You</div>
            <a href="/">See All</a>
            </div>

            <Profile
                caption="New to Instagram"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="Followed by _vasanth + 1 more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
            />
            <Profile
                caption="Follows you"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
            />
            <Profile
                caption="Followed by _atharva + 71 more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
                storyBorder={true}
            />
            <Profile
                caption="Followed by gayathri + 14 more"
                urlText="Follow"
                iconSize="medium"
                captionSize="small"
            />
        </div>

    );
}

export default Suggestions