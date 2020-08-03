import React, { Component } from "react";
import { ReactComponent as GlobeIcon } from "../../node_modules/bootstrap-icons/icons/globe.svg";
import { ReactComponent as MailIcon } from "../../node_modules/bootstrap-icons/icons/mailbox.svg";
import { ReactComponent as Gear } from "../../node_modules/bootstrap-icons/icons/gear-wide-connected.svg";
import { ReactComponent as More } from "../../node_modules/bootstrap-icons/icons/three-dots-vertical.svg";
import { ReactComponent as Left } from "../../node_modules/bootstrap-icons/icons/chevron-left.svg";
import { ReactComponent as Trash } from "../../node_modules/bootstrap-icons/icons/trash.svg";
import { ReactComponent as Star } from "../../node_modules/bootstrap-icons/icons/star.svg";

import { ReactComponent as PhoneIcon } from "../../node_modules/bootstrap-icons/icons/telephone.svg";
import Navigation from "../componets/common/navigation";
import ProfileCard from "../componets/profileCard";
import DropdownElement from "../componets/common/dropdownElement";
import {
  getProfile,
  addFavotire,
  removeFavorite,
} from "../services/fakeMainService";
import { getCurrentEmail } from "../services/authService";
class ViewProfile extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      targetUser: this.props.match.params.id,
    };
  }
  async componentDidMount() {
    const { data: profile } = await getProfile(this.state.targetUser);
    console.log(profile);
    this.setState({ profile });
  }
  makeFavorite = async () => {
    const result = await addFavotire(getCurrentEmail(), this.state.targetUser);
    console.log(result);
  };
  deleteFavorite = async () => {
    const result = await removeFavorite(getCurrentEmail(), this.state.profile);
    console.log(result);
  };
  render() {
    const dropdownElements = (
      <div>
        <DropdownElement
          title={"Delete from favotite"}
          icon={<Trash onClick={this.deleteFavorite} />}
          style={{ color: "red" }}
        />
        <DropdownElement
          title={"Add to favotire"}
          icon={<Star onClick={this.makeFavorite} />}
          style={{ color: "#00a1ff" }}
        />
      </div>
    );
    const { profile } = this.state;
    return (
      <div>
        <div className="d-flex">
          <Navigation
            leftIcon={<Left />}
            rightIcon={<More />}
            leftLink={"/chats"}
            title={profile ? profile.name : "Loading..."}
            subtitle={"Chat details"}
            dropdownContent={dropdownElements}
          />
        </div>
        {profile && (
          <div style={{ marginTop: 10 }} className="view-margin">
            <ProfileCard
              title={profile.name}
              description={profile.description && profile.description}
            />
            <div>
              <div className="base-card-container">
                {profile.country && (
                  <div className="base-card d-flex">
                    <div>
                      <div className="base-card-title">Country</div>
                      <div>{profile.country}</div>
                    </div>
                    <div>
                      <GlobeIcon />
                    </div>
                  </div>
                )}

                <div className="base-card d-flex">
                  <div>
                    <div className="base-card-title">Email</div>
                    <div>{profile.email}</div>
                  </div>
                  <div>
                    <MailIcon />
                  </div>
                </div>
                {profile.phone && (
                  <div className="base-card d-flex">
                    <div>
                      <div className="base-card-title">Phone</div>
                      <div>{profile.phone && profile.phone}</div>
                    </div>
                    <div>
                      <PhoneIcon />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ViewProfile;
