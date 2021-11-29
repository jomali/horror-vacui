import React from 'react';
import ContinueLink from '../../components/ContinueLink';
import LoopLink from '../../components/LoopLink';

const TestA = (props) => {
  return (
    <>
      Cuenta atrás en
      <ContinueLink label={'cuatro'}>
        <TestB />
      </ContinueLink>
    </>
  );
};

const TestB = (props) => {
  return (
    <>
      cuatro,
      <ContinueLink label={'tres'}>
        <TestC />
      </ContinueLink>
    </>
  );
};

const TestC = (props) => {
  return (
    <>
      tres,
      <ContinueLink label={'dos'}>
        <TestD />
      </ContinueLink>
    </>
  );
};

const TestD = (props) => {
  return (
    <>
      dos,
      <ContinueLink label={'uno'}>
        <TestE />
      </ContinueLink>
    </>
  );
};

const TestE = (props) => {
  return (
    <>
      uno. Explosión de motores y tirón de la inercia. Quiero un caramelo de{' '}
      <LoopLink values={['limón', 'naranja', 'menta', 'café']} />, por favor.
    </>
  );
};

export default TestA;
