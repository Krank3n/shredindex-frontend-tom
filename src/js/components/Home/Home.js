import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => (
  <>
    <h1>
      <FormattedMessage
        id="shredindex.app.TITLE"
        defaultMessage="Shred Index"
      />
    </h1>
    <p>
      <FormattedMessage
        id="shredindex.app.SUBTITLE"
        defaultMessage="Live your best adventure lifestyle"
      />
    </p>
  </>
);

export default Home;
