import React, { useEffect, useState } from "react";
import { getListtag } from "../../api/getApi";
import { GithubFilled } from "@ant-design/icons";
import { useRouter } from "next/router";

export const Footer = () => {
  return (
    <div style={{ paddingBottom: "16px" }}>
      <div className="footer container">
        <div
          className="flex"
          style={{ gap: "40px", justifyContent: "space-between" }}
        >
          <div className="icon-footer">
            <GithubFilled
              style={{
                width: "40px",
                height: "40px",
              }}
            />
          </div>
          <div>
            <p>Created by HUYDV & DUMMUAPI.</p>
            <p>© 2021-2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};
