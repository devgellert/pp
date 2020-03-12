export function nextBackground (index){
    const max = this.state.pictures.length - 1;
    index === max ? this.setState({index: 0}) : this.setState({index: this.state.index+1})
}
export function previousBackground (index){
    const max = this.state.pictures.length - 1;
    index === 0 ? this.setState({index: max}) : this.setState({index: this.state.index-1})
}
