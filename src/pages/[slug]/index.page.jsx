import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Resume, Tabs } from '@src/components';
import * as Style from './slug.style';

const Page = () => {
  const router = useRouter();
  const pokemonData = useSelector((state) => state.pokemon.selected);

  const handleOnButtonBackClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Style.Page backgroundColor={pokemonData?.types[0].type.name || 'default'}>
      <Style.BackgroundText textColor={pokemonData?.types[0].type.name || 'default'}>
        {pokemonData?.name || ''}
      </Style.BackgroundText>
      <Style.Container>
        <Style.BackButton type="button" onClick={handleOnButtonBackClick} />
      </Style.Container>
      {pokemonData ? (
        <>
          <Resume
            id={pokemonData.id}
            name={pokemonData.name}
            image={pokemonData.image}
            types={pokemonData.types}
          />
          <Tabs
            featuredColor={pokemonData.types[0].type.name}
          />
        </>
      ) : (
        <Style.NotFoundContainer>
          <Style.NotFoundText>Pokémon not found!</Style.NotFoundText>
        </Style.NotFoundContainer>
      )}
    </Style.Page>
  );
};

export default Page;
