import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Systems and Architecture',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Operating systems, memory, processes, concurrency, and the hardware
        model that shapes real performance.
      </>
    ),
  },
  {
    title: 'Algorithms and Data',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Data structures, algorithmic tradeoffs, and complexity notes with
        practical examples.
      </>
    ),
  },
  {
    title: 'Networks and Security',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Protocols, distributed systems basics, and security fundamentals from
        threat modeling to crypto primitives.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {/*{FeatureList.map((props, idx) => (*/}
          {/*  <Feature key={idx} {...props} />*/}
          {/*))}*/}
        </div>
      </div>
    </section>
  );
}
