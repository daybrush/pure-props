import PureProps from "react-pure-props";
import { PurePropsInterface } from "./types";

export default PureProps as any as new <T = {}, U = {}>(props: any) => PurePropsInterface<T, U>;
