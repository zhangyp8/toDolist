import React, { Component } from 'react';
class ToDoList extends Component{
    constructor(){
        super();
        this.state={
            list:[
                // {
                //     title:'',
                //     checked:true,
                // }
            ]
        }
    }
    // 添加事项
    handleAddData=(e)=>{
        //console.log(e.keyCode);
        
        if(e.keyCode===13){
           // console.log(this.refs.title.value)
            let titleTemp = this.refs.title.value;
            let listTemp = this.state.list;
            listTemp.push({
                title:titleTemp,
                checked:false
            });
            this.setState({
                list:listTemp
            })
            this.refs.title.value = '';
            //console.log(this.state.list)
        }
    }
    // 改变事项状态
    handleChange=(key)=>{
        
        let listTemp = this.state.list;
        listTemp[key].checked = !listTemp[key].checked;
        this.setState({
            list:listTemp
        });
        //console.log(this.state.list);
    }
    // 删除事项
    handleDelete=(key)=>{
        let listTemp = this.state.list;
        listTemp.splice(key,1);
        this.setState({
            list:listTemp
        });
    }
    render(){
        return(
            <div>
               <div className = "title">ToDoList: <input ref = "title" onKeyUp={this.handleAddData}></input></div> 
               <div className = "listItem">
               <hr/>
                    <h3>待办事项</h3>
                    <ul>
                        {
                          this.state.list.map((value,key)=>{
                              if(!value.checked){
                                    return(
                                        <li key = {key} className = "todoItem">
                                            <input type="checkbox" checked = {value.checked} onChange={this.handleChange.bind(this,key)}/>
                                            {value.title}&nbsp;<button className = "delItem" onClick = {this.handleDelete.bind(this,key)}>删除</button>
                                        </li>
                                    )
                                }
                          })  
                        }
                        
                    </ul>
                    <hr/>
                    <h3>已完成事项</h3>
                    <ul>
                        {
                          this.state.list.map((value,key)=>{
                              if(value.checked){
                                    return(
                                        <li key = {key} className = "doneItem">
                                            <input type="checkbox" checked = {value.checked} onChange={this.handleChange.bind(this,key)}/>
                                            {value.title}
                                        </li>
                                    )
                                }
                          })  
                        }
                        
                    </ul>
               </div> 
            </div>
        )
    }
}
export default ToDoList