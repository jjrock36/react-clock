class Seconds extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "second" }, /*#__PURE__*/
      React.createElement("div", { className: "sec", id: "sec" })));



  }}


class Minutes extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "minute" }, /*#__PURE__*/
      React.createElement("div", { className: "min", id: "min" })));



  }}


class Hours extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "hour" }, /*#__PURE__*/
      React.createElement("div", { className: "hr", id: "hr" })));



  }}


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date() };

  }

  componentDidMount() {
    this.timerID = setInterval(
    () => this.tick(), 1000);

  }

  componentWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    const deg = 6;
    const hr = document.getElementById('hr');
    const min = document.getElementById('min');
    const sec = document.getElementById('sec');

    let day = this.state.date;
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    this.setState({
      date: new Date() });


    hr.style.transform = 'rotateZ(' + (hh + mm / 12) + 'deg)';
    min.style.transform = 'rotateZ(' + mm + 'deg)';
    sec.style.transform = 'rotateZ(' + ss + 'deg)';
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "clock" }, /*#__PURE__*/
      React.createElement("h2", { id: "digital" }, this.state.date.toLocaleTimeString()), /*#__PURE__*/
      React.createElement(Hours, null), /*#__PURE__*/
      React.createElement(Minutes, null), /*#__PURE__*/
      React.createElement(Seconds, null)));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Clock, null),
document.getElementById('clock'));