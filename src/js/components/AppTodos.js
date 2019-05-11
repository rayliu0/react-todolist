import React, {Component} from 'react';
const styles = {
    'title': {
        paddingLeft: '20px',
        paddingRight: '50px',
        position: 'relative',
        cursor: 'pointer'
    },
    'delete': {
        marginLeft: '20px',
        marginRight: '50px'
    }
}
export default class AppTodos extends Component {
    handleChangeComplete() {
        let newComplete = this.props;
        this.props.changeCompleteItem(newComplete.id)
    }
    handleDelete() {
        console.log('--------del------------>', this.props)
        let delteItem = this.props;
        this.props.submitDelete(delteItem.id)
    }
    render() {
        return (
            <div className="comment">
                <div className="content"></div>
                <span className="author" style={styles.title} onClick={this.handleChangeComplete.bind(this)}> {this.props.text} 
                    <span className={this.props.complete ? 'line' : ''}></span>
                </span>
                <span className="author" style={styles.title} >{this.props.complete ? '已完成' : '未完成'}</span>
                <span className="author"> {this.props.id} </span>
                <span className="ui blue button" onClick={this.handleDelete.bind(this)} style={styles.delete}>删除</span>
            </div>
        )
    }
}