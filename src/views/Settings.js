import React, { Component } from "react";
import "./Settings.css";
import NavBar from "../componets/navBar";
import Collapsible from "../componets/common/collapsible";
import { ReactComponent as PictureIcon } from "../../node_modules/bootstrap-icons/icons/image.svg";
import { ReactComponent as PersonSquareIcon } from "../../node_modules/bootstrap-icons/icons/person-square.svg";
import { getUser } from "../services/fakeMainService";
import { getCurrentEmail } from "../services/authService";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseList: [false],
    };
  }
  async componentDidMount() {
    const { data: user } = await getUser(getCurrentEmail());
    console.log(user);
    this.setState({ user });
  }
  handleCollapse = (index) => {
    const copy = [...this.state.collapseList];
    copy[index] = !copy[index];
    this.setState({ collapseList: copy });
  };

  render() {
    const { user } = this.state;
    const content = user && (
      <div>
        {/* <label>Photo</label>
        <div className="photo-upload-card  general-padding">
          <div className="d-flex">
            <div className="photo-upload-icon d-flex">
              <PictureIcon />
            </div>
          </div>
          <input id="photo-upload" type="file" />
          <p className="photo-upload-text">
            You can upload png, jpg or gif files.
          </p>
          <label className="stretched-label" htmlFor="photo-upload" />
        </div> */}
        <div style={{ marginTop: 15 }}>
          <label htmlFor="group-name-input">Name</label>
          <div className="d-flex">
            <input
              className="group-name-input"
              value={user.name}
              placeholder="Enter name"
            />
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <label htmlFor="group-name-input">Phone</label>
          <div className="d-flex">
            <input
              className="group-name-input"
              value={user.phone}
              placeholder="+998996001855"
            />
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <label htmlFor="group-name-input">Country</label>
          <div className="d-flex">
            <input
              className="group-name-input"
              value={user.country}
              placeholder=""
            />
          </div>
        </div>
        <div style={{ marginTop: 15 }}>
          <label htmlFor="group-name-input">Desctiption</label>
          <div className="d-flex">
            <textarea
              value={user.description}
              className="group-name-input"
              placeholder=""
            ></textarea>
          </div>
        </div>
        <div className="d-flex" style={{ marginBottom: 15 }}>
          <button className="group-create-btn general-margin">Save</button>
        </div>
      </div>
    );
    const { collapseList } = this.state;
    return (
      <div>
        <div className="animate view-margin">
          <h2>Settings</h2>
          <Collapsible
            title="Account"
            subtitle="Update your profile details"
            icon={<PersonSquareIcon style={{ color: "#0176ff" }} />}
            content={content}
            onClick={() => this.handleCollapse(0)}
            isCollapsed={collapseList[0]}
          />
        </div>
        <NavBar />
      </div>
    );
  }
}

export default Settings;
