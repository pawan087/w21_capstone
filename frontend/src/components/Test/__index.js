import styles from "./test.module.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useState } from "react";

export default function Test() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div onClick={() => setVisible(!visible)} className={styles.helloDiv}>
        Hello
      </div>
      {visible && (
        <div
          onClick={() => setVisible(!visible)}
          className={styles.backGround}
        />
      )}
      {visible && (
        <SideNav
          className={styles.sideNav}
          expanded={true}
          onSelect={(selected) => {
            // Add your code here
          }}
        >
          <SideNav.Toggle onClick={() => setVisible(!visible)} />
          <SideNav.Nav defaultSelected="home">
            <NavItem eventKey="home">
              <NavIcon>
                <i
                  className="fa fa-fw fa-home"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Home</NavText>
            </NavItem>
            <NavItem eventKey="charts">
              <NavIcon>
                <i
                  className="fa fa-fw fa-line-chart"
                  style={{ fontSize: "1.75em" }}
                />
              </NavIcon>
              <NavText>Charts</NavText>
              <NavItem eventKey="charts/linechart">
                <NavText>Line Chart</NavText>
              </NavItem>
              <NavItem eventKey="charts/barchart">
                <NavText>Bar Chart</NavText>
              </NavItem>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      )}
    </div>
  );
}
