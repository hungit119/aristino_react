import "./header.scss";
import React from "react";
import { FaPhone, FaUser } from "react-icons/fa";
export const HeaderTop = () => {
  return (
    <div className="header-top">
      <p className="header-top-title">
        Tặng Voucher 100K cho hóa đơn từ 1 triệu
      </p>
      <p className="header-top-contact">
        {" "}
        <span>
          {" "}
          <FaPhone />
        </span>{" "}
        18006226 <span>| Đăng nhập</span>{" "}
        <span>
          <FaUser />
        </span>
        <div className="contact-drop-down">
          <p>Đăng kí</p>
          <p>Đăng nhập</p>
          <p>Ưu đãi đội viên</p>
        </div>
      </p>
    </div>
  );
};
