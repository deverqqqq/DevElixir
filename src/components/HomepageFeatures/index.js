import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '技術筆記',
    Svg: require('@site/static/img/25225404_7055188.svg').default,
    description: (
      <>
        盡量由深入簡的整理技術內容，讓內容能夠一目了然，同時加強既有的觀念。<br></br>
        Image by <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_25225404.htm#&position=6&from_view=collections&uuid=61fc20b1-4090-4230-a55b-4300f3a28540#page=1&query=undefined&from_query=undefined&position=1&from_view=collections&uuid=61fc20b1-4090-4230-a55b-4300f3a28540">Freepik</a>
      </>
    ),
  },
  {
    title: '技術研究',
    Svg: require('@site/static/img/25644111_7036170.svg').default,
    description: (
      <>
        紀錄平常研究的內容，透過更多且廣的技術面向，提升視野。<br></br>
        <a href="https://www.freepik.com/free-vector/flat-design-devops-illustration_25644111.htm#&position=8&from_view=collections&uuid=5903907b-abf2-477c-83fb-dd2e734a0344">Image by pikisuperstar</a> on Freepik
      </>
    ),
  },
  {
    title: '個人專案',
    Svg: require('@site/static/img/25225399_7055171.svg').default,
    description: (
      <>
        SideProject<br></br>
        Image by <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-intranet-illustration_25225399.htm#&position=4&from_view=collections&uuid=fa3da6f1-740c-4124-94bf-72a14ba8597e?sign-up=google">Freepik</a>
      </>
    ),
  },
  {
    title: 'NoAds',
    Svg: require('@site/static/img/25225428_7054829.svg').default,
    description: (
      <>
        無廣告干擾<br></br>
        Image by <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-ransomware-illustration_25225428.htm#&position=7&from_view=collections&uuid=61fc20b1-4090-4230-a55b-4300f3a28540#page=1&query=undefined&from_query=undefined&position=1&from_view=collections&uuid=61fc20b1-4090-4230-a55b-4300f3a28540#position=7">Freepik</a>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
