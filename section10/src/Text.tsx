import { FC, VFC } from "react";

type Props = {
  color: string;
  fontSize: string;
}

const Text: VFC<Props> = (props) => {
  // const Text: FC<Props> = (props) => { // children
  // const Text = (props: Props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>
  
}

export default Text