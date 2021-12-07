import React from 'react';
import ContinueLink from 'components/ContinueLink';
import LoopLink from 'components/LoopLink';
import Node from 'components/Node';
import Option from 'components/Option';
import { useStory } from 'components/StoryProvider';

const Test = (props) => {
  const story = useStory();

  const handleSetOptions = () => {
    if (!Boolean(story.actions)) {
      story.addActions([
        <Option variant="intelligence">Prueba de inteligencia</Option>,
        <Option variant="interpersonal">Prueba de habilidades sociales</Option>,
        <Option variant="physique">Prueba de físico</Option>,
        <Option variant="locomotion">Prueba de locomotricidad</Option>,
        <Option>Opción por defecto</Option>,
      ]);
    }
  };

  const [selected, setSelected] = React.useState({});

  const Link = (children, label) => (
    <ContinueLink
      label={label}
      onClick={(key, value) => {
        setSelected({
          ...selected,
          [key]: value,
        });
      }}
      persist
      selected={selected[label]}>
      {children}
    </ContinueLink>
  );

  return (
    <Node>
      Cuenta atrás en
      <Link label={'cuatro'}>
        <Link label={'tres'}>
          <Link label={'dos'}>
            <Link label={'uno'}>
              . Explosión de motores y tirón de la inercia. Quiero un caramelo
              de <LoopLink values={['limón', 'naranja', 'menta', 'café']} />,
              por favor.
            </Link>
          </Link>
        </Link>
      </Link>
    </Node>
  );
};

export default Test;
