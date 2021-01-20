
import GoblalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <>
      <GoblalStyles />
      <Story />
    </>
  ),
];
