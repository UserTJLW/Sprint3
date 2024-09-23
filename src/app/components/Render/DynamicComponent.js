import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../../page'), {
  loading: () => <p>Loading...</p>,
});

export default DynamicComponent;