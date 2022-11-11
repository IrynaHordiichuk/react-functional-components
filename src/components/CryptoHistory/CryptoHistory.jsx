
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format} from 'date-fns';

export const CryptoHistory = ({transactions}) => {
  return (
  <BaseTable>
    <THead>
      <tr>
        <Th>№</Th>
        <Th>PRICE</Th>
        <Th>AMOUNT</Th>
        <Th>DATE</Th>
      </tr>
    </THead>
  
    <tbody>
      {transactions.map(({id, price, amount, date }) => ( 
      <Tr key={id}>
        <Td>{id}</Td>
        <Td>{price}</Td>
        <Td>{amount}</Td>
        <Td>{format(new Date(date), 'Pp', {addSuffix: true})}</Td>
      </Tr>))} 
    </tbody>
  </BaseTable>);
};
