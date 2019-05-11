import React, {Component} from 'react';
import AppForm from './components/AppForm';
import AppList from './components/AppList';
import AppFooter from './components/AppFooter';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choosevalue: 1,
            data: this.props.data
        }
    }
    OnAddTodoItem (newItem) {
        // 我们传一个函数给子组件，并回调后得到返回的参数newItem，更新data
        let newdata = this.state.data.concat(newItem);
        this.setState({data : newdata});
    }
    SubmitChooseValue(id) {
        console.log('---->', id);
        this.setState({choosevalue: id})
    }
    AllChangeComplete(id) {
        let newdata = this.state.data.map((item, index) => {
            if(item.id === id) {
                item.complete = !item.complete;
            }
            return item;
        })
        this.setState({data: newdata})
    }
    AllOneDeleteItem(id) {
        console.log(id);
        let newdata = this.state.data.map((item, index) => {
            console.log(item);
            if(item.id == id) {
                item.deleteFlag = true;
            }
            return item;
        })
        this.setState({data: newdata})
    }

    render() {
        const {data, choosevalue} = this.state;
        return (
            <div className="ui comments">
                <h1> My Todo with React </h1>
                <div className="ui divider"></div>
                <AppForm  AddTodoItem={this.OnAddTodoItem.bind(this)} />
                <AppList data={data} 
                    choosevalue={choosevalue}
                    changeComplteTop={this.AllChangeComplete.bind(this) }
                    deleteItemTop={this.AllOneDeleteItem.bind(this)}
                />
                <AppFooter SubmitChooseValue={this.SubmitChooseValue.bind(this)}/>
            </div>
        )
    }
}

export default App;