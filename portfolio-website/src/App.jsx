import "./App.css"
import { ChartSquareBar } from "./ChartSquareBar";
import { ChevronRight } from "./ChevronRight";
import { CollectionWrapper } from "./CollectionWrapper";
import { Film } from "./Film";
import { Home } from "./Home";
import { PaginationDots } from "./PaginationDots";
import { SideNavigationBar } from "./SideNavigationBar";
import { Users } from "./Users";
import { WebFrameDetach } from "./WebFrameDetach";
import "./style.css";

export const Wireframe = () => {
    return (
      <div className="wireframe">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <WebFrameDetach
              className="web-frame-DETACH-AFTER-PLACING"
              divClassName="web-frame-DETACH-instance"
              divClassNameOverride="web-frame-DETACH-2"
              ellipseClassName="web-frame-DETACH-instance"
              ellipseClassNameOverride="web-frame-DETACH-instance"
              frameClassName="design-component-instance-node"
              line="image.svg"
              lineClassName="web-frame-DETACH-AFTER-PLACING-instance"
              text="www.safalshrestha.com"
            />
            <div className="text-wrapper-2">Safal Shrestha</div>
            <PaginationDots
              className="pagination-dots-instance"
              divClassName="pagination-dots-2"
              divClassNameOverride="pagination-dots-2"
              ellipseClassName="pagination-dots-2"
              ellipseClassNameOverride="pagination-dots-2"
              ofPages="four"
            />
            <img className="element" alt="Element" src="000005330033-1.png" />
            <SideNavigationBar
              className="side-navigation-bar-instance"
              frameClassName="side-navigation-bar-2"
              frameClassNameOverride="side-navigation-bar-6"
              override={<ChevronRight className="chevron-right-2" />}
              sideNavigationItemDivClassName="side-navigation-bar-4"
              sideNavigationItemDivClassName1="side-navigation-bar-5"
              sideNavigationItemDivClassName2="side-navigation-bar-5"
              sideNavigationItemDivClassNameOverride="side-navigation-bar-5"
              sideNavigationItemHasDiv={false}
              sideNavigationItemIcon={<CollectionWrapper />}
              sideNavigationItemIcon1={<ChevronRight className="chevron-right-2" />}
              sideNavigationItemIcon2={<Users className="icon-instance-node-2" />}
              sideNavigationItemIcon3={<ChevronRight className="chevron-right-2" />}
              sideNavigationItemIcon4={<ChartSquareBar className="icon-instance-node-2" />}
              sideNavigationItemIcon5={<ChevronRight className="chevron-right-2" />}
              sideNavigationItemLabel="Home"
              sideNavigationItemLabel1="Photographs"
              sideNavigationItemLabel2="Contact"
              sideNavigationItemLabel3="About"
              sideNavigationItemStateOffClassName="side-navigation-bar-3"
              sideNavigationItemStateOffClassNameOverride="side-navigation-bar-3"
              sideNavigationItemStateOnClassName="side-navigation-bar-3"
              sideNavigationItemStateOnClassName1="side-navigation-bar-7"
              sideNavigationItemStateOnClassName2="side-navigation-bar-7"
              sideNavigationItemStateOnClassNameOverride="side-navigation-bar-3"
              sideNavigationItemVisible={false}
            />
            <Home className="home-2" />
            <Film className="film-instance" color="#545F71" />
          </div>
        </div>
      </div>
    );
  };