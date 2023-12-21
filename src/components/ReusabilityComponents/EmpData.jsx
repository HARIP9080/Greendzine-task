import React, { useContext, useState } from "react";
import i from "./EmpStule.module.css";
import { employeeData } from "../../constant/contstant";
import { context } from "../ReusabilityComponents/SearchBar";

function EmpData() {
  let contect = useContext(context);
  let data = employeeData.filter(({name})=>{
    return name.includes(contect)
  })
  console.log(data)
  return (
    <>
      {
        !contect ? (
          employeeData.map(({ empId, name, dob, role }, index) => {
            return (
              <table className={i.tabelHead} key={index}>
                <tbody>
                  <tr className={i.firstRow}>
                    <td>EMP ID </td>
                    <td>:</td>
                    <td>{empId}</td>
                    <td className={i.unicId}>
                      <div>
                        <p>{empId}</p>
                      </div>
                    </td>
                  </tr>
                  <tr className={i.firstRow}>
                    <td>Name</td>
                    <td>:</td>
                    <td>{name}</td>
                    <td></td>
                  </tr>
                  <tr className={i.firstRow}>
                    <td>DOB</td>
                    <td>:</td>
                    <td className={i.DOB}>{dob}</td>
                    <td></td>
                  </tr>
                  <tr className={i.firstRow}>
                    <td>Role</td>
                    <td>:</td>
                    <td className={i.stream}>{role}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            );
          })
        ) : (
          data.map(({ empId, name, dob, role }, index) => {
            return (
              <table className={i.tabelHead} key={index}>
                <tbody>
                  <tr className={i.firstRow}>
                    <td>EMP ID </td>
                    <td>:</td>
                    <td>{empId}</td>
                    <td className={i.unicId}>
                      {" "}
                      <div>
                        {" "}
                        <p>{empId}</p>
                      </div>
                    </td>
                  </tr>
                  <tr className={i.firstRow}>
                    <td>Name</td>
                    <td>:</td>
                    <td>{name}</td>
                    <td></td>
                  </tr>
                  <tr className={i.firstRow}>
                    <td>DOB</td>
                    <td>:</td>
                    <td className={i.DOB}>{dob}</td>
                    <td></td>
                  </tr>
                  <tr className={i.firstRow}>
                    <td>Role</td>
                    <td>:</td>
                    <td className={i.stream}>{role}</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            );
          })
        )
      }
    </>
  );
}

export default React.memo(EmpData);
