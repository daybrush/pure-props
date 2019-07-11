import PureProps from "react-pure-props";
import { Component } from "preact";


export default PureProps as new <T = {}, U = {}>(props: T) => Component<T, U>;
