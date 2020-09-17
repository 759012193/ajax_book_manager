import React from 'react';
import {connect} from 'react-redux'
import {message, Table,Button,Divider,Modal,Card} from 'antd'
import './book.css'
import logo from './../admin/images/logo.png'
class Book extends React.Component{

	  dataSource = [
		{
		  key: '1',
		  name: '没意思',
		  author: 'ajax',
		  book_img: 'null',
		},
		{
		  key: '2',
		  name: '没意思',
		  author: 'ajax',
		  book_img: 'null',
		},
	  ];
	  
	   columns = [
		{
		  title: '书名',
		  dataIndex: 'name',
		  key: 'name',
		},
		{
		  title: '作者',
		  dataIndex: 'author',
		  key: 'author',
		},
		{
		  title: '书籍封面',
		  dataIndex: 'book_img',
		  key: 'book_img',
		  render: ()=>{
			return (
				<img src={logo} alt="book_img" width={50} height={70}/>
			)
		}
		},
		{
            title: '操作',
            render: ()=>{
                return (
                    <>
                        <Button className="add-button" onClick={()=>{
                            // 往本地存储一个tag, 记录是否是 --> 点击编辑进入的
                            message.success("编辑成功");
                        }}>编辑</Button>
                        <Divider type="vertical" />
                        <Button className="add-button" onClick={()=>{
                            Modal.confirm({
                                title: '确认删除该记录吗?',
                                content: '删除此资源,所有关联内容都会被删除!',
                                okText: '确认',
                                cancelText: '取消',
                                onOk: ()=>{
									message.success("删除成功");
                                }
                            });
                        }}>删除</Button>
                    </>
                )
            }
        },
	  ];
	
	render(){
		// 添加按钮
        let addBtn = (
            <Button className="add-button" type="primary" onClick={()=>{
                message.success("添加成功！")
            }}>添加书籍</Button>
        );
		return(
			<Card className="card-list" title="书籍列表" extra={addBtn}>
<Table className="content-table" dataSource={this.dataSource} columns={this.columns} />
			</Card>
			
		)
	}
}

export default connect(null, null)(Book);