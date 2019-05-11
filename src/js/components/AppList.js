import React, {Component} from 'react';
import AppTodos from './AppTodos';
class AppList extends Component {
    changeDone(id) {
        this.props.changeComplteTop(id);
    }
    submitDelete(id) {
        this.props.deleteItemTop(id);
    }
    componentWillMount() {
        console.log('componentWillMount!!!');
        // 组件将要挂载，在render之前调用，即使多次重复渲染，或者改变组件的state，仅执行一次
    }
    componentDidMount() {
        console.log('componentDidMount!!!');
        // 组件已经挂载，render之后调用，在该方法中，react会使用render方法返回的虚拟DOM对象的创建真是的DOM结构
        // 可以在这个方法中获取DOM节点，同一个组件重复渲染只执行一次
    }

    // 3 更新阶段
    componentWillReceiveProps() {
        // 已加载组件收到新的props之前调用，注意组件初始化渲染时不会执行
        console.log('componentWillReceiveProps!!!');
    }
    shouldComponentUpdate() {
        // 是否需要重新渲染组件，接收了新的props或者新的state的时候立即调用
        console.log('shouldComponentUpdate!!!')
        return true;
    }
    componentWillUpdate() {
        // 组件将要更新
        console.log('componentWillUpdate!!!');
    }
    componentDidUpdate() {
        // 组件已经更新
        console.log('componentDidUpdate!!!');
    }
    // 4销毁阶段
    componentWillUnmount() {
        // 在组建将要被移除之前的时间点触发
        console.log('componentWillUnmount!!!');
    }
    render () {
        let value = this.props.choosevalue;
        const a = this.props.data.map(({id, text, complete, deleteFlag }, index) => {
                if (value === '1' && deleteFlag !== true) {
                    return <AppTodos 
                                key={index} id={id} text={text} complete={complete} 
                                submitDelete={this.submitDelete.bind(this)}
                                changeCompleteItem={this.changeDone.bind(this)}/>
                }
                if (value === '2' && complete === false && deleteFlag !== true) {
                    return <AppTodos 
                                key={index} id={id} text={text} complete={complete} 
                                submitDelete={this.submitDelete.bind(this)}
                                changeCompleteItem={this.changeDone.bind(this)}/>
                }
                if(value === '3' && complete === true && deleteFlag !== true) {
                    return <AppTodos 
                                key={index} id={id} text={text} complete={complete} 
                                submitDelete={this.submitDelete.bind(this)}
                                changeCompleteItem={this.changeDone.bind(this)}/>
                }
        });

        return <div> {a} </div>
    }

}

export default AppList;