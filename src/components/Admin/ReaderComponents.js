import React,{useState,useEffect} from 'react';
import { Table ,Button,Popconfirm} from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_READER_SAGA, } from "../../redux/constant/libraryManager/readerConstants";
import { GET_ALL_BOOK_BY_READER_SAGA } from "../../redux/constant/libraryManager/borrowConstants";

import { FormOutlined, EyeOutlined  } from '@ant-design/icons'

import FormAddReader from '../Form/Reader/FormAddReader';
import FormEditReader from '../Form/Reader/FormEditReader';
import FormViewBookByReader from '../Modal/FormViewBookByReader';


export default function ReaderComponents() {
  const readerList = useSelector(state => state.readerReducers.readerList);

  
  const dispatch = useDispatch();
  const [state,setState]=useState({
    filteredInfo: null,
    sortedInfo: null,
  })
  useEffect(() => {
    dispatch({ type: 'SET_WIDTH', widthDrawer: '520' });

    dispatch({ type: GET_ALL_READER_SAGA })

}, [])

const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };


  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
      sorter: (item2, item1) => {
          return item2.id - item1.id;
      },
      sortDirections: ['descend'],

  },
    {
      title: 'Ten',
      dataIndex: 'Ten',
      key: 'Ten',
  
      filteredValue: filteredInfo.Ten || null,
      onFilter: (value, record) => record.Ten.includes(value),
      sorter: (a, b) => a.Ten.length - b.Ten.length,
      sortOrder: sortedInfo.columnKey === 'Ten' && sortedInfo.order,
      ellipsis: true,
    },

    {
      title: 'Phone',
      dataIndex: 'Phone',
      key: 'Phone',

    },
    {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',

    },
    {
      title: 'DiaChi',
      dataIndex: 'DiaChi',
      key: 'DiaChi',

    },
    {
      title: 'GioiTinh',
      dataIndex: 'GioiTinh',
      key: 'GioiTinh',

    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (text, record, index) => {
        const ButtonGroups = Button.Group;
          return <div>
            <ButtonGroups >
            <button className="btn mr-2 btn-primary" onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Edit Reader',
                            Component: <FormEditReader />,
                        }

                        //dispatch lên reducer nội dung drawer
                        dispatch(action);
                        //dispatch dữ liệu dòng hiện tai lên reducer
                        const actionEditReader = {
                            type: 'EDIT_READER',
                            readerEditModel: record
                        }
                        dispatch(actionEditReader);
                    }}>
                        <FormOutlined style={{ fontSize: 17 }} />
                    </button>
                    
   {/* xu li xem sach cua doc gia  theo id*/}
                    <button className="btn mr-2 btn-info" onClick={() => {
                        const action = {
                            type: 'OPEN_MODAL',
                            title:'View book by reader',
                            Component: <FormViewBookByReader />,

                        }
                        dispatch(action);
                   

                        const action1 = {
                            type: GET_ALL_BOOK_BY_READER_SAGA,
                           
                            MaThe:record.MaThe,

                        }
                        dispatch(action1);
                    }}>
                        <EyeOutlined  style={{ fontSize: 17 }} />
                    </button>
                </ButtonGroups>
            
           

          </div>
      },
  }
  ];

  return (
    <div className="wrapper"  >
    <>

    <Button ghost type="primary" style={{marginBottom:'10px'}}
    onClick={() => {
                        const action = {
                            type: 'OPEN_FORM',
                            title:'Add Reader',
                            Component: <FormAddReader />,
                        }
                        dispatch(action);
                      
                    }}>
            Thêm Độc Giả
          </Button>
        <Table columns={columns} style={{marginRight:'20px'}} dataSource={readerList} onChange={handleChange} pagination={{ defaultPageSize: 7, showSizeChanger: false, pageSizeOptions: ['10', '20', '30']}} />
      </>
    </div>
  )
}
