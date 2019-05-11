import React, {Component} from 'react';
const styles = {
    'title': {
        marginRight: 10,
        fontSize: 20
    },
    'top': {
        marginTop: 20
    }
}
class AppFooter extends Component {
    handleAll(){
        let all = this.refs.all.value;
        this.props.SubmitChooseValue(all);
    }
    handleActive(){
        let active = this.refs.active.value;
        this.props.SubmitChooseValue(active);
    }
    handleComplete(){
        let complete = this.refs.complete.value;
        this.props.SubmitChooseValue(complete);
    }
    render() {
        return (
            <div>
                <h2 style={styles.top}> show </h2>
                <button type='submit' onClick={this.handleAll.bind(this)} style={styles.top} className="ui blue button" value="1" ref='all'> 全部 </button>
                <button type='submit' onClick={this.handleActive.bind(this)} style={styles.top} className="ui blue button" value="2" ref='active'> 还未完成 </button>
                <button type='submit' onClick={this.handleComplete.bind(this)} style={styles.top} className="ui blue button" value="3" ref='complete'> 已完成 </button>
            </div>
        )
    }
}
export default AppFooter
