import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { Head, Resume, Tabs } from '@src/components';
import { TabAbout, TabEvolution, TabStats } from '@src/components/Tabs/content';
import { addPokemon } from '@src/redux/modules/pokemon';
import { capitalize } from '@src/utils';
import api from '@src/api';
import * as Style from './slug.style';

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const localData = useSelector((state) => {
    const targetName = router.query.slug;
    return state.pokemon.loaded.find((element) => element.name === targetName.toLowerCase());
  });
  const [data, setData] = useState(localData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const target = router.query.slug;
    if (data || !target) {
      return;
    }
    const search = async (name) => {
      const response = await api.get(`/pokemon/${name.toLowerCase()}`);
      setLoading(false);
      if (!response) {
        return;
      }
      dispatch(addPokemon(response.data));
      setData(response.data);
    };
    search(target);
  }, [data, dispatch, router.query.slug]);

  const tabs = [
    {
      id: 'tab-about',
      label: 'About',
      component: TabAbout,
      content: {},
    },
    {
      id: 'tab-stats',
      label: 'Stats',
      component: TabStats,
      content: {
        name: data?.name,
        stats: data?.stats,
      },
    },
    {
      id: 'tab-evolution',
      label: 'Evolution',
      component: TabEvolution,
      content: {},
    },
  ];

  const handleOnButtonBackClick = useCallback(() => {
    router.push('/');
  }, [router]);

  return (
    <Style.Page backgroundColor={data?.types[0].type.name || 'default'}>
      <Head title={data ? `${capitalize(data.name)} - Pokédex` : 'Pokédex'} />
      <Style.BackgroundText textColor={data?.types[0].type.name || 'default'}>
        {data?.name || ''}
      </Style.BackgroundText>
      <Style.Container>
        <Style.BackButton type="button" onClick={handleOnButtonBackClick} />
      </Style.Container>
      {data ? (
        <>
          <Resume
            id={data.id}
            name={data.name}
            image={data.sprites.other['official-artwork'].front_default}
            types={data.types}
          />
          <Tabs
            defaultValue="tab-stats"
            featuredColor={data.types[0].type.name}
            tabs={tabs}
          />
        </>
      ) : (
        <Style.MessageContainer>
          <Style.Message>{loading ? 'Loading, please wait...' : 'Pokémon not found!'}</Style.Message>
        </Style.MessageContainer>
      )}
    </Style.Page>
  );
};

export default Page;
