import MyLayout from '../components/MyLayout';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  textContent: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2)
  }
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <MyLayout>
      <Container maxWidth="xl" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          友井 義明 / t-mario-y
        </Typography>
        <Typography component="h2" variant="h4" align="center"　gutterBottom>
          職務経歴
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h3" variant="h6" gutterBottom>
          期間
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          2014年 7月 ~ 2015年 6月
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          業務内容
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        メインフレーム系の発注管理システムをWebアプリに統合するプロジェクト
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        Webアプリ側 追加機能の詳細設計および実装
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          技術スタック
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - Java(JSF)
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - JavaScript
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          職位
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          チーム:2名  
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          役割:詳細設計/デベロッパ 
        </Typography>
        </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h3" variant="h6" gutterBottom>
          期間
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          2015年 7月 ~ 2016年 2月
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          業務内容
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          Weblogicサーバ バージョンアップに伴うアプリケーション部分の検証作業
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          帳票出力機能(SVF)マイグレーションに伴う追加実装
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          技術スタック
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - Java(JSF)
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - JavaScript
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - SVF
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          職位
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          チーム:5名
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          役割:テスター/デベロッパ
        </Typography>
      </Container>
      <Container maxWidth="lg" className={classes.textContent}>
        <Typography component="h3" variant="h6" gutterBottom>
          期間
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          2016年 4月 ~ 2017年11月
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          業務内容
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          生鮮EDI発注管理システムのフロントエンドを、IE7からEdge/Chrome にアップグレード
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          実現方法アプローチおよび技術選定
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          - jQuery採用
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          - HTML/CSS書き換え方法決定
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          テスト方法検討
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
          開発・テストチームの進行管理
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          技術スタック
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - Java(JSF)
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - JavaScript(jQuery)
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        - CSS
        </Typography>
        <Typography component="h3" variant="h6" gutterBottom>
          職位
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        チーム:4名
        </Typography>
        <Typography component="p" variant="body1" gutterBottom>
        役割:開発チームリーダー
        </Typography>
      </Container>
    </MyLayout>
)};

export default Profile;