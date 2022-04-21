import React from "react";
import "./header_section.scss";
import Logo from "../../access/logo.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHeart, FaCartArrowDown, FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
export const HeaderSection = () => {
  const cities = [
    "Hà Nội",
    "Vũng Tàu",
    "Bắc Ninh",
    "Hải Phòng",
    "Quảng Ninh",
    "Hưng Yên",
    "Vĩnh Phúc",
    "Phú Thọ",
    "Yên Bái",
    "Lai Châu",
    "Lào Cai",
    "Lạng Sơn",
    "Ninh Bình",
    "Thái Bình",
    "Thanh Hóa",
    "Nghệ An",
    "Bắc Giang",
    "Tp.Hồ Chí Minh",
    "Quảng Bình",
    "Hải Dương",
    "Tuyên Quang",
    "Đồng Nai",
    "Khánh Hòa",
    "Đà Nẵng",
    "Thái Nguyên",
    "Quảng Ngãi",
    "Bình Dương",
    "Gia Lai",
    "An Giang",
  ];
  return (
    <div className="header-section">
      <div className="header-section-left">
        <img src={Logo}></img>
      </div>
      <div className="header-section-center">
        <ul className="header-section-center-section">
          <li className="header-section-center-section-item">
            <p>TRANG CHỦ</p>
            <div className="line"></div>
          </li>
          <li className="header-section-center-section-item">
            <p>THƯƠNG HIỆU</p>
            <div className="th-drop-down">
              <p>Tin tức Aristino</p>
              <p>Phong cách Aristino</p>
              <p>Báo chí nói về chúng tôi</p>
              <p>Ưu đãi liên kết</p>
              <p>Đôi cánh yêu thương</p>
            </div>
            <div className="line"></div>
          </li>
          <li className="header-section-center-section-item">
            <p>SẢN PHẨM</p>
            <div className="sp-drop-down row"></div>
            <div className="line"></div>
          </li>
          <li className="header-section-center-section-item">
            <p>PHỤ KIỆN</p>
            <div className="pk-drop-down">
              <p>Thắt lưng</p>
              <p>Ví nam</p>
              <p>Cà vạt</p>
              <p>Cặp da</p>
              <p>Giày da</p>
              <p>Va li</p>
              <p>Khác</p>
            </div>
            <div className="line"></div>
          </li>
          <li className="header-section-center-section-item">
            <p>BỘ SƯU TẬP</p>
            <div className="bst-drop-down">
              <p className="bst-drop-down-title">XUÂN HÈ 2022</p>
              <p className="bst-drop-down-item">Man In Innovation</p>
              <p className="bst-drop-down-item">Man In Legend</p>
            </div>
            <div className="line"></div>
          </li>
          <li className="header-section-center-section-item">
            <p>CỬA HÀNG</p>
            <div className="ch-drop-down">
              {cities.map((city, index) => (
                <p key={index}>{city}</p>
              ))}
            </div>
            <div className="line"></div>
          </li>
          <li className="header-section-center-section-item">
            <p>SALE</p>
            <div className="line"></div>
          </li>
        </ul>
      </div>
      <div className="header-section-right">
        <div className="header-section-right-input">
          <div className="search">
            <input placeholder="Tìm kiếm" />
            <div className="icon-search">
              <IconContext.Provider value={{ className: "icon-search" }}>
                <FaSearch />
              </IconContext.Provider>
            </div>
          </div>
        </div>
        <div className="header-section-right-like">
          <IconContext.Provider
            value={{ color: "red", className: "icon-like" }}
          >
            <FaHeart />
          </IconContext.Provider>
          <p className="number-like">0</p>
        </div>
        <div className="header-section-right-cart">
          <IconContext.Provider value={{ className: "icon-cart" }}>
            <FaCartArrowDown />
          </IconContext.Provider>
          <p className="number-cart">0</p>
        </div>
      </div>
    </div>
  );
};
