import PropTypes from 'prop-types';
import { Tag } from '@src/components';
import { zeroPad } from '@src/utils';
import * as Style from './Resume.style';

const Resume = ({
  id, name, image, types,
}) => (
  <Style.Section data-testid="resume">
    <Style.Container>
      <Style.Wrapper>
        <Style.Image alt={name} src={image} />
        <Style.Details>
          <Style.Id>{`#${zeroPad(id, 3)}`}</Style.Id>
          <Style.Title>{name}</Style.Title>
          <Style.Tags>
            {types && (
              <>
                {types.map(({ type }) => (
                  <Tag key={type.name} label={type.name} backgroundColor={type.name} />
                ))}
              </>
            )}
          </Style.Tags>
        </Style.Details>
      </Style.Wrapper>
    </Style.Container>
  </Style.Section>
);

Resume.defaultProps = {
  id: null,
  name: null,
  image: null,
  types: null,
};

Resume.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      slot: PropTypes.number.isRequired,
      type: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default Resume;
