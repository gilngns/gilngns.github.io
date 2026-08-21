const ITEMS_TOP = [
  'LARAVEL',
  'PHP',
  'GCP',
  'MYSQL',
  'JAVASCRIPT',
  'FULLSTACK DEVELOPMENT',
];

const ITEMS_BOTTOM = [
  'REST API',
  'TAILWIND CSS',
  'REACT',
  'GIT',
  'DOCKER',
  'TECHNICAL SEO',
];

function Row({ items, reverse = false }) {
  const line = items.map((item) => `✦ ${item}`).join(' ');

  return (
    <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          aria-hidden={i > 0}
          className="font-heading text-6xl font-extrabold uppercase text-transparent px-8 max-md:text-3xl max-md:px-4"
        >
          {line}
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-wrapper w-full overflow-hidden py-12 bg-[#050505] border-y border-border my-24 relative z-10">
      <Row items={ITEMS_TOP} />
      <Row items={ITEMS_BOTTOM} reverse />
    </div>
  );
}
