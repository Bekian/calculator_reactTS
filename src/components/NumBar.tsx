//import { useState } from 'react'

type NumBarProps = {
  input: string;
};

const NumBar: React.FC<NumBarProps> = ({ input }) => {
  return <input type="text" value={input} readOnly />;
};

export default NumBar