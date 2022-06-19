
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux'
export default function FormViewBookDetaild() {


    const bookDetaild = useSelector(state => state.bookReducers.bookDetaild);



    return (
      <div className="wrapper" style={{marginLeft: '-2px',paddingTop:'0px'}} >
      <>
          <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="box-detaild-img">
                    <img className="img-detaild" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg" alt="sample38" />
                    </div>
                </div>
         
                <div className="col-8">
                    <div className="row">
                    <div className="col-5 infor-detaild"><span >Tên: </span>{bookDetaild.Ten}</div>
                    <div className="col-5 infor-detaild"><span >Tác Gỉa: </span>{bookDetaild.TacGia}</div>
                    <div className="col-5 infor-detaild"><span >Thể Loại: </span>{bookDetaild.TheLoai}</div>
                    <div className="col-5 infor-detaild"><span >Số Lượng Hiện Tại: </span>{bookDetaild.SoLgHienTai}</div>
                    <div className="col-5 infor-detaild"><span >Nhà Xuất Bản: </span>{bookDetaild.NXB}</div>
                    <div className="col-5 infor-detaild"><span >Kệ Sách: </span>{bookDetaild.KeSach}</div>
                    <div className="col-5 infor-detaild"><span >Năm Xuất Bản: </span>{bookDetaild.NamXB}</div>
                    <div className="col-5 infor-detaild"><span >Giá: </span>{bookDetaild.Gia}</div>
                    <div className="col-11 infor-detaild infor-detaild-t"><span >Nội Dung: </span>{bookDetaild.NoiDung}</div>
                    </div>
                </div>
            </div>
          </div>
        </>
      </div>
    )
}
