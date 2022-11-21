import { useColorMode, Switch, FormControl, FormLabel } from '@chakra-ui/react';
const Theme = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <FormControl display="flex" alignItems="center" w="auto">
      <FormLabel htmlFor="theme-switch" mb="0">
        Theme switch
      </FormLabel>
      <Switch
        id="theme-switch"
        size="md"
        onChange={toggleColorMode}
        colorScheme="teal"
      />
    </FormControl>
  );
};
export default Theme;
