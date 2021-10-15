import React from "react";
import { KakaoApi } from "./api";

const Kakao = () => {
  return (
    <div>
      <h2>카카오</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {KakaoApi.map((con) => (
          <div key={con.id} style={{ width: "350px" }}>
            <div
              style={{
                background: `url()`,
              }}
            ></div>
            <h3>{con.title}</h3>
            <p>{con.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kakao;
