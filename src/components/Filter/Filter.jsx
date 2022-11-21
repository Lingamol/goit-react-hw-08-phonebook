// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { FilterInputLabel, FilterInput } from './Filter.Styled';
// import { setFilter } from 'redux/actions';
import { setFilter } from 'redux/filters/filtersSlice';
import { selectFilter } from 'redux/filters/selectors';
import {
  Box,
  Button,
  // ChakraProvider,
  // Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useColorMode,
  useColorModeValue,
  useToast,
  Heading,
  FormErrorMessage,
  Field,
} from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const formBackground = useColorModeValue('gray.100', 'gray.700');
  const onFilterChange = value => dispatch(setFilter(value));
  return (
    <Flex align="center" h="auto" flexDir="column" mb={6}>
      <Box p={6} rounded="md" w={96} background={formBackground}>
        <VStack spacing={4} align="flex-start">
          <FormLabel htmlFor="text" name="filter">
            Find contacts by name
            <Input
              type="text"
              name="filter"
              onChange={event => {
                onFilterChange(event.target.value);
              }}
              value={filter}
              placeholder="Enter contact name"
            />
          </FormLabel>{' '}
        </VStack>
      </Box>
    </Flex>
  );
};
export default Filter;

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterContact: PropTypes.func.isRequired,
// };
