import Header from './Header';
import { Fragment } from 'react';

//外枠をlayoutStyleで囲い、上部に<Header/>を置いて、{props.children} を表示するだけ
const Layout = props => (
  <Fragment>
    <div>
      <Header />
      {props.children}
    </div>
    <style jsx>{`
div {
  margin: 20px;
  padding: 20px;
  border: 1px solid #DDD;
}
    `}</style>
  </Fragment>
);

export default Layout;