import React, { useState } from "react";
import i from "./styles/Home.module.css";
import { dashboardData } from "../constant/contstant";
import Footer from "./ReusabilityComponents/Footer";
import Header from "./ReusabilityComponents/Header";
import CompaneyLogo from "./ReusabilityComponents/CompaneyLogo";
import EmployeeDetails from "./EmployeeDetails";

function Home() {
  let [home, setHome] = useState(true);
  let [emp, setEmp] = useState(false);
  let [temp, setTemp] = useState();
  let hey = (isActive) => {
    if (isActive == "home active") {
      setHome(true);
      setEmp(false);
      setTemp(isActive);
    } else if (isActive == "emp active") {
      setHome(false);
      setEmp(true);
      setTemp(isActive);
    }
  };
  return (
    <>
      {home ? (
        <div className={i.grantParent}>
          <Header />
          <div className={i.parentTag}>
            <CompaneyLogo />
            <div className={i.dashBordParent}>
              <div>
                <p>Employee Productivity Dashboard</p>
              </div>
              <div className={i.datas}>
                {dashboardData.map(({ content, range, percentage }, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div>
                        <p>{content}</p>
                        <span>{percentage}</span>
                      </div>
                      <div className={i.rangeParent}>
                        <input
                          type="text"
                          style={{ width:range}}
                          className={i.range}
                          disabled
                        />
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={i.footerHead}>
            <Footer className={i.homeActive} Fun={hey} active={1} />
          </div>
        </div>
      ) : null}
      {emp ? <EmployeeDetails /> : null}
    </>
  );
}

export default Home;
