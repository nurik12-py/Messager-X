import React from "react";
import "./CreateGroup.css";
import { ReactComponent as PictureIcon } from "../../node_modules/bootstrap-icons/icons/image.svg";
import SearchBox from "../componets/common/searchBox";
import NavBar from "../componets/navBar";
import Tab from "../componets/common/tab";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: true,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(temp) {
    this.setState({ isSelected: temp });
  }
  render() {
    const details = (
      <div>
        <label>Photo</label>
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
        </div>
        <label htmlFor="group-name-input">Name</label>
        <div className="d-flex">
          <input
            className="group-name-input"
            placeholder="Enter name of group"
          />
        </div>
        <div className="d-flex">
          <button className="group-create-btn general-margin">
            Create group
          </button>
        </div>
      </div>
    );

    const members = (
      <div>
        <SearchBox />

        <h5 className="members-letter">A</h5>
        <div className="d-flex">
          <div className="member-card general-padding d-flex">
            <div className="member-card-photo"></div>
            <div className="member-card-name">Anna</div>
            <input
              className="custom-checkbox"
              id="member-card-checkbox"
              type="checkbox"
            />
            <label
              className="stretched-label"
              htmlFor="member-card-checkbox"
            ></label>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        <div className="animate create-group">
          <h2>Create group</h2>
          <Tab
            leftContent={details}
            rightContent={members}
            leftLabel="Details"
            rightLabel="Members"
          />
          <div className="spacer"></div>
        </div>
        <NavBar />
      </div>
    );
  }
}

export default CreateGroup;
